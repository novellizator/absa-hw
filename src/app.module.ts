import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiController } from './api/api.controller';
import { LuhnService } from './luhn/luhn.service';

@Module({
  imports: [],
  controllers: [AppController, ApiController],
  providers: [AppService, LuhnService],
})
export class AppModule {}
