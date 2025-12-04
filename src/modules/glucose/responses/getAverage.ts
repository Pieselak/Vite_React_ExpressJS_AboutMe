import { ApiProperty } from '@nestjs/swagger';

export class GetAverageResponse {
  @ApiProperty({
    description: 'Average glucose value',
    example: 118,
  })
  average: number;
}
