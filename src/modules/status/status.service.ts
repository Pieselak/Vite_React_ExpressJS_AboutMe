import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { StatusCheckResponse } from './responses/statusCheck';
import { StatusRepository } from './status.repository';

@Injectable()
export class StatusService {
  constructor(private readonly repository: StatusRepository) {}

  async toggleMaintenanceMode(enable: boolean): Promise<string> {
    const maintenanceSetting = await this.repository.getMaintenanceStatus();
    if (maintenanceSetting && maintenanceSetting.enabled === enable) {
      return `Maintenance mode is already ${enable ? 'enabled' : 'disabled'}.`;
    }

    await this.repository.seveMaintenanceStatus(enable);
    return `Maintenance mode has been ${enable ? 'enabled' : 'disabled'}.`;
  }

  enableMaintenanceMode(): Promise<string> {
    return this.toggleMaintenanceMode(true);
  }

  disableMaintenanceMode(): Promise<string> {
    return this.toggleMaintenanceMode(false);
  }

  async statusCheck(): Promise<StatusCheckResponse> {
    const maintenance = await this.repository.getMaintenanceStatus();
    if (maintenance) {
      throw new ServiceUnavailableException(
        'The service is currently under maintenance.',
      );
    }

    return {
      status: 'operational',
      timestamp: Number(Date.now()),
      uptime: process.uptime(),
    };
  }
}
