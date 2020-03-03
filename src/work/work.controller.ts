import { Controller, Get } from '@nestjs/common';

import { WorkService } from './work.service';

@Controller()
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Get('/works')
  getWorks() {
    return this.workService.findAll();
  }
}
