import {
  Controller,
  Get,
  HttpCode,
  InternalServerErrorException,
  NotImplementedException,
  Query,
  UnauthorizedException,
} from '@nestjs/common';
import { FetchDataResponse } from './responses/getData';
import { GlucoseService } from './glucose.service';
import { GetAverageResponse } from './responses/getAverage';
import { GetTimeInRangeResponse } from './responses/getTimeInRange';
import { GetAverageDto } from './dto/getAverage';
import { GetTimeInRangeDto } from './dto/getTimeInRange';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiServiceUnavailableResponse,
} from '@nestjs/swagger';

@Controller('glucose')
export class GlucoseController {
  constructor(private readonly glucoseService: GlucoseService) {}

  @Get('getData')
  @ApiOkResponse({
    type: FetchDataResponse,
    description: 'Glucose data retrieved successfully',
  })
  @ApiServiceUnavailableResponse({
    description: 'Service is unavailable',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  async getData(): Promise<FetchDataResponse> {
    return await this.glucoseService.getData();
  }

  @Get('getAverage')
  @ApiOkResponse({
    type: GetAverageResponse,
    description: 'Average glucose data retrieved successfully',
  })
  @ApiBadRequestResponse({
    description: 'Invalid query parameters',
  })
  @ApiServiceUnavailableResponse({
    description: 'Service is unavailable',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  async getAverage(@Query() query: GetAverageDto): Promise<GetAverageResponse> {
    return await this.glucoseService.getAverage(query);
  }

  @Get('getTimeInRange')
  @ApiOkResponse({
    type: GetTimeInRangeResponse,
    description: 'Time in Range data retrieved successfully',
  })
  @ApiBadRequestResponse({
    description: 'Invalid query parameters',
  })
  @ApiServiceUnavailableResponse({
    description: 'Service is unavailable',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  async getTimeInRange(
    @Query() query: GetTimeInRangeDto,
  ): Promise<GetTimeInRangeResponse> {
    return await this.glucoseService.getTimeInRange(query);
  }
}
