import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Assignment } from '../../assignment/entities/assignment.entity';

@Entity('medications')
export class Medication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  dosage: string;

  @Column()
  frequency: string;

  @OneToMany(() => Assignment, (assignment) => assignment.medication, {
    cascade: true,
  })
  assignments: Assignment[];
}
