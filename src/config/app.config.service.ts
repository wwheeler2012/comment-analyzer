import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {

  constructor(readonly configService: ConfigService) {}

  get enviroment(): string {
    return this.configService.get<string>('environment');
  }

  get reportMetrics(): Record<string, any> {
    return this.configService.get<Record<string, any>>('report_metrics');
  }

}
