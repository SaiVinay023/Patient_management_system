import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';

@Controller('assignments')
export class AssignmentController {
  constructor(private readonly assignmentService: AssignmentService) {}

  @Post()
  create(@Body() createAssignmentDto: CreateAssignmentDto) {
    return this.assignmentService.create(createAssignmentDto);
  }

  @Get()
  findAll() {
    return this.assignmentService.findAllWithRemainingDays();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assignmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssignmentDto: UpdateAssignmentDto) {
    return this.assignmentService.update(+id, updateAssignmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assignmentService.remove(+id);
  }
  // assignments.controller.ts
/*@Get(':id/remaining-days')
getRemainingDays(@Param('id') id: string) {
  return this.assignmentService.calculateRemainingDays(+id);
} */

  @Get(':id/remaining-days')
async getRemainingDays(@Param('id') id: string) {
  const assignment = await this.assignmentService.findOne(+id);
  return {
    remainingDays: this.assignmentService.calculateRemainingDays(
      assignment.startDate,
      assignment.numberOfDays,
    ),
  };
}

}
// This controller handles HTTP requests for assignments.
// It uses the AssignmentService to perform CRUD operations on assignments.