// typescript
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GlucoseReadingEntity } from './entities/glucose.entity';
import { GetAverageResponse } from './responses/getAverage';
import { GetTimeInRangeResponse } from './responses/getTimeInRange';

@Injectable()
export class GlucoseRepository {
  constructor(
    @InjectRepository(GlucoseReadingEntity)
    private readonly repo: Repository<GlucoseReadingEntity>,
  ) {}

  async saveMeasurement(payload: {
    value: number;
    unit: string;
    timestamp: number | Date;
  }): Promise<GlucoseReadingEntity> {
    const timestamp =
      payload.timestamp instanceof Date
        ? payload.timestamp
        : new Date(payload.timestamp);
    const entity = this.repo.create({
      value: payload.value,
      unit: payload.unit,
      timestamp,
    });
    return this.repo.save(entity);
  }

  async getAverage(hours: number): Promise<GetAverageResponse | null> {
    const result = await this.repo
      .createQueryBuilder('glucose_readings')
      .select('ROUND(AVG(glucose_readings.value))', 'avg')
      .where('HOUR(TIMEDIFF(NOW(), glucose_readings.timestamp)) <= :hours', {
        hours,
      })
      .getRawOne();
    return result?.avg ? { average: parseInt(result.avg) } : null;
  }

  async getTimeInRange(
    hours: number,
    targetLow: number,
    targetHigh: number,
    alarmHigh: number,
  ): Promise<GetTimeInRangeResponse | null> {
    const result = await this.repo
      .createQueryBuilder('glucose_readings')
      .select(
        'SUM(CASE WHEN glucose_readings.value <= :targetLow THEN 1 ELSE 0 END)',
        'low',
      )
      .addSelect(
        'SUM(CASE WHEN glucose_readings.value > :targetLow AND glucose_readings.value < :targetHigh THEN 1 ELSE 0 END)',
        'inRange',
      )
      .addSelect(
        'SUM(CASE WHEN glucose_readings.value >= :targetHigh AND glucose_readings.value < :alarmHigh THEN 1 ELSE 0 END)',
        'high',
      )
      .addSelect(
        'SUM(CASE WHEN glucose_readings.value >= :alarmHigh THEN 1 ELSE 0 END)',
        'veryHigh',
      )
      .where('HOUR(TIMEDIFF(NOW(), glucose_readings.timestamp)) <= :hours', {
        hours,
      })
      .setParameters({
        targetLow,
        targetHigh,
        alarmHigh,
      })
      .getRawOne();

    return {
      low: parseInt(result.low, 10),
      inRange: parseInt(result.inRange, 10),
      high: parseInt(result.high, 10),
      veryHigh: parseInt(result.veryHigh, 10),
    };
  }
}
