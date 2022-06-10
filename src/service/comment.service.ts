import { Injectable } from '@nestjs/common';
import { AppConfigService } from '../config/app.config.service';
import * as fs from 'fs';

@Injectable()
export class CommentService {

  private readonly reportMetricsMap: Map<string, any>;

  constructor(readonly appConfig: AppConfigService) {
    this.reportMetricsMap = new Map(Object.entries(this.appConfig.reportMetrics));
  }

  analyzeFile(file: string): Map<string, number> {

    const resultsMap = new Map<string, number>();

    fs.readFileSync(file, 'utf8').split(/\r?\n/).forEach(line => {
      if (line.length > 0) {
        this.reportMetricsMap.forEach((value: any, key: string) => {
          if (typeof value === 'number' && line.length < value) {
            CommentService.incrementValueForKey(key, resultsMap);
          }
          if (typeof value === 'string' && line.toLowerCase().includes(value.toLowerCase())) {
            CommentService.incrementValueForKey(key, resultsMap);
          }
        });
      }
    });

    return resultsMap;
  }

  private static incrementValueForKey(key: string, map: Map<string, number>) {
    if (!map.has(key)) map.set(key, 0);
    map.set(key, map.get(key) + 1);
  }

}