import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { Assignment } from './entities/assignment.entity';


@Controller('assignments')
export class AssignmentController {
  constructor(private readonly assignmentService: AssignmentService) {}

  @Post()
  async create(@Body() createAssignmentDto: CreateAssignmentDto): Promise<Assignment> {
    return await this.assignmentService.create(createAssignmentDto);
  }

  @Get()
  async findAll(): Promise<Assignment[]> {
    return await this.assignmentService.findAllWithRemainingDays();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Assignment> {
    return await this.assignmentService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAssignmentDto: UpdateAssignmentDto,
  ): Promise<Assignment> {
    return await this.assignmentService.update(+id, updateAssignmentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.assignmentService.remove(+id);
  }

  @Get(':id/remaining-days')
  async getRemainingDays(@Param('id') id: string): Promise<{ remainingDays: number }> {
    const assignment = await this.assignmentService.findOne(+id);
    return {
      remainingDays: this.assignmentService.calculateRemainingDays(
        assignment.startDate,
        assignment.numberOfDays,
      ),
    };
  }
}
