import { ApiProperty } from '@nestjs/swagger';

export class StatusCheckResponse {
  @ApiProperty({
    description: 'Service operational status',
    example: 'operational',
  })
  status: 'operational';

  @ApiProperty({
    description: 'Current timestamp',
    example: 1704064800,
  })
  timestamp: number;

  @ApiProperty({
    description: 'Service uptime in seconds',
    example: 86400,
  })
  uptime: number;
}
