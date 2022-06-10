import { Injectable } from '@nestjs/common';
import { ReportService } from './report.service';

@Injectable()
export class AppService {

  constructor(private reportService: ReportService) {
    const docs = 'docs';
    this.reportService.readDirectory(docs);
  }

}
