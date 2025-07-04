import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AssignmentEntity } from '../../assignment/entities/assignment.entity';

@Entity('patients')
export class PatientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'date_of_birth', type: 'date' })
  dateOfBirth: string;

  @OneToMany(() => AssignmentEntity, (assignment) => assignment.patient, {
    cascade: true,
  })
  assignments: AssignmentEntity[];
}
