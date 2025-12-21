import { ApiProperty } from '@nestjs/swagger';

export class GetTimeInRangeResponse {
  @ApiProperty({
    description: 'Time spent below target range',
    example: 15,
  })
  low: number;

  @ApiProperty({
    description: 'Time spent in target range',
    example: 480,
  })
  inRange: number;

  @ApiProperty({
    description: 'Time spent above target range',
    example: 120,
  })
  high: number;

  @ApiProperty({
    description: 'Time spent in very high range',
    example: 45,
  })
  veryHigh: number;
}
