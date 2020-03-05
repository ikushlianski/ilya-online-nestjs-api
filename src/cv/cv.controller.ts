import { Controller, Get } from '@nestjs/common';

import { CvService } from './cv.service';

@Controller()
export class CvController {
  constructor(private readonly CvService: CvService) {}

  @Get('/cv')
  getWorks() {
    return this.CvService.findAll();
  }
}
