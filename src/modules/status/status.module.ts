import { Module } from '@nestjs/common';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusRepository } from './status.repository';
import { SettingsEntity } from '../../entities/settings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SettingsEntity])],
  controllers: [StatusController],
  providers: [StatusService, StatusRepository],
  exports: [StatusService],
})
export class StatusModule {}
