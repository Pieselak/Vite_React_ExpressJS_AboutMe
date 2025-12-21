import { IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class GetAverageDto {
  @ApiProperty({
    description: 'Number of hours to calculate average glucose for',
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
