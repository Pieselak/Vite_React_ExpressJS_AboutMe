import { Type } from 'class-transformer';
import { IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetTimeInRangeDto {
  @ApiProperty({
    description: 'Number of hours to calculate time in range for',
    minimum: 1,
    example: {
      hours: 24,
    },
  })
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  hours: number;
}
