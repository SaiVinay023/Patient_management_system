import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AssignmentEntity } from '../../assignment/entities/assignment.entity';

@Entity('medications')
export class MedicationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  dosage: string;

  @Column()
  frequency: string;

  @OneToMany(() => AssignmentEntity, (assignment) => assignment.medication, {
    cascade: true,
  })
  assignments: AssignmentEntity[];
}
