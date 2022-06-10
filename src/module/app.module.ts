import AppConfig from '../config/app.config';
import { Module } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { CommentService } from '../service/comment.service';
import { ReportService } from '../service/report.service';
import { ConfigModule } from '@nestjs/config';
import { AppConfigService } from '../config/app.config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [AppConfig],
    }),
  ],
  providers: [
    AppService,
    AppConfigService,
    CommentService,
    ReportService
  ],
})
export class AppModule {
}
