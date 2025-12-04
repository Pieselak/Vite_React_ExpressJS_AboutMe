import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlucoseController } from './glucose.controller';
import { GlucoseService } from './glucose.service';
import { GlucoseAuthService } from './glucose.auth.service';
import { GlucoseRepository } from './glucose.repository';
import { GlucoseReadingEntity } from './entities/glucose.entity';
import { HttpConfigService } from '../../config/http.config';
import { CacheConfig } from '../../config/cache.config';
import { GlucoseConfig } from '../../config/glucose.config';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
    CacheModule.registerAsync({
      useClass: CacheConfig,
    }),
    TypeOrmModule.forFeature([GlucoseReadingEntity]),
  ],
  controllers: [GlucoseController],
  providers: [
    GlucoseService,
    GlucoseAuthService,
    GlucoseRepository,
    GlucoseConfig,
  ],
})
export class GlucoseModule {}
