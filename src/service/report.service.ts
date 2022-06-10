import { Injectable } from '@nestjs/common';
import { CommentService } from './comment.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ReportService {

  private commentService: CommentService;

  constructor(comment: CommentService) {
    this.commentService = comment;
  }

  readDirectory(directory) {
    const totalResults = new Map<string, number>();

    fs.readdir(directory, (err, files) => {
      if (err) throw err;

      files.forEach(fileName => {
        const filePath = path.join(directory, fileName);
        const results: Map<string, number> = this.commentService.analyzeFile(filePath);
        this.mergeResults(results, totalResults);
      });

      console.log(`RESULTS\n=======`);
      totalResults.forEach((v, k) => console.log(`${k}:${v}`));
    });
  }

  private mergeResults(source: Map<string, number>, target: Map<string, number>) {
    source.forEach((value, key) => {
      target.set(key, target.has(key) ? target.get(key) + value : value);
    });
  }
}
