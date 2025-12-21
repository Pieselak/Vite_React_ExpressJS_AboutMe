import { ApiProperty } from '@nestjs/swagger';

export class FetchDataResponse {
  @ApiProperty({
    description: 'Current glucose reading',
    example: {
      value: 120,
      unit: 'mg/dL',
      trendArrow: 1,
      trendColor: 2,
      sensorActive: true,
      sensorExpires: 1704067200,
      timestamp: 1704064800,
    },
  })
  glucoseData: {
    value: number;
    unit: string;
    trendArrow: number;
    trendColor: number;
    sensorActive: boolean;
    sensorExpires: number;
    timestamp: number;
  };

  @ApiProperty({
    description: 'Graph data with readings and thresholds',
    example: {
      readings: [
        { value: 115, unit: 'mg/dL', trendColor: 2, timestamp: 1704064800 },
        { value: 120, unit: 'mg/dL', trendColor: 2, timestamp: 1704065100 },
      ],
      targetHigh: 180,
      targetLow: 70,
      alarmHigh: 240,
      alarmLow: 70,
    },
  })
  graphData: {
    readings: Array<{
      value: number;
      unit: string;
      trendColor: number;
      timestamp: number;
    }>;
    targetHigh: number;
    targetLow: number;
    alarmHigh: number;
    alarmLow: number;
  };

  @ApiProperty({
    description: 'Timestamp for next data refresh',
    example: 1704068400,
  })
  nextRefresh: number;
}
