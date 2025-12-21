import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SettingsEntity } from '../../entities/settings.entity';

@Injectable()
export class StatusRepository {
  constructor(
    @InjectRepository(SettingsEntity)
    private readonly repo: Repository<SettingsEntity>,
  ) {}

  async seveMaintenanceStatus(enabled: boolean): Promise<void> {
    const value = JSON.stringify(enabled);
    const existing = await this.repo.findOne({
      where: { code: 'MAINTENANCE' },
    });
    if (existing) {
      existing.value = value;
      await this.repo.save(existing);
    } else {
      const setting = this.repo.create({
        code: 'MAINTENANCE',
        label: 'status.maintenance',
        value,
      });
      await this.repo.save(setting);
    }
  }

  async getMaintenanceStatus(): Promise<{ enabled: boolean }> {
    const result = await this.repo.findOne({
      where: { code: 'MAINTENANCE' },
    });
    const enabled = result?.value ? JSON.parse(result.value) : false;
    return { enabled };
  }
}
