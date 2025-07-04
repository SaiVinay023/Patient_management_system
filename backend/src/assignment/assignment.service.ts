import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Assignment } from './entities/assignment.entity';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';

@Injectable()
export class AssignmentService {
  constructor(
    @InjectRepository(Assignment)
    private readonly assignmentRepository: Repository<Assignment>,
  ) {}

  async create(createAssignmentDto: CreateAssignmentDto): Promise<Assignment> {
    const assignment = this.assignmentRepository.create(createAssignmentDto);
    return this.assignmentRepository.save(assignment);
  }

  findAll(): Promise<Assignment[]> {
    return this.assignmentRepository.find();
  }

  async findOne(id: number): Promise<Assignment> {
    const assignment = await this.assignmentRepository.findOneBy({ id });
    if (!assignment) {
      throw new NotFoundException(`Assignment with ID ${id} not found`);
    }
    return assignment;
  }

  async update(id: number, updateAssignmentDto: UpdateAssignmentDto): Promise<Assignment> {
    await this.assignmentRepository.update(id, updateAssignmentDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.assignmentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Assignment with ID ${id} not found`);
    }
  }

  // Calculate remaining days
 /* calculateRemainingDays(startDate: string, numberOfDays: number): number {
    const start = new Date(startDate);
    const end = new Date(start);
    end.setDate(end.getDate() + numberOfDays);

    const today = new Date();
    if (today > end) return 0;

    const diffTime = end.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  } */

    calculateRemainingDays(startDate: string, numberOfDays: number): number {
  const start = new Date(startDate);
  const now = new Date();
  const end = new Date(start);
  end.setDate(start.getDate() + numberOfDays);
  const remainingMs = end.getTime() - now.getTime();
  return Math.max(Math.ceil(remainingMs / (1000 * 60 * 60 * 24)), 0);
}


  async findAllWithRemainingDays() {
    const assignments = await this.findAll();

    return assignments.map((assignment) => {
      const remainingDays = this.calculateRemainingDays(
        assignment.startDate,
        assignment.numberOfDays,
      );
      return { ...assignment, remainingDays };
    });
  }
}
// This service provides methods to create, read, update, and delete assignments.
// It uses TypeORM's Repository to interact with the database.