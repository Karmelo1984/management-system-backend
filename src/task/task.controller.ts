import { Controller, Get } from '@nestjs/common';

@Controller('task')
export class TaskController {
  @Get()
  getTask(): string {
    return 'Task';
  }
}
