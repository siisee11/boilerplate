import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SystemModule } from './system/system.module';

@Module({
  imports: [SystemModule],
  controllers: [AppController],
  providers: [Logger, AppService],
})
export class AppModule {}
