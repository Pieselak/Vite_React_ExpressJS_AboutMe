import { Controller, Get, Post } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusCheckResponse } from './responses/statusCheck';
import { ApiOkResponse, ApiServiceUnavailableResponse } from '@nestjs/swagger';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get('check')
  @ApiOkResponse({
    type: StatusCheckResponse,
    description: 'Service status check response',
  })
  @ApiServiceUnavailableResponse({
    description: 'Service is under maintenance',
  })
  async statusCheck(): Promise<StatusCheckResponse> {
    return await this.statusService.statusCheck();
  }

  @Post('maintenance') // TBD Swagger docs
  async enableMaintenanceMode(): Promise<string> {
    return await this.statusService.enableMaintenanceMode();
  }
}
