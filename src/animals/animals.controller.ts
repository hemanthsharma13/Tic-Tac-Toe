import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { AddNodeDTO } from './dto/create-tree.dto';

@Controller('api/v1/tree')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Post()
  create(@Body() addNode: AddNodeDTO) {
    return this.animalsService.add(addNode);
  }

  @Get()
  findAll() {
    return this.animalsService.find();
  }
}
