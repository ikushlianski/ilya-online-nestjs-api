import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';

import { SkillService } from './skill.service';
import { schema } from './dto/create-skill.dto';
import { JoiValidationPipe } from './dto/skill.pipe';
import { Skill } from './skill.interface';

@Controller()
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Get('/skills')
  getAllSkills() {
    return this.skillService.findAll();
  }

  @Post('/skills')
  @UsePipes(new JoiValidationPipe(schema))
  createSkill(@Body() createSkillDto: Skill) {
    return this.skillService.create(createSkillDto);
  }
}
