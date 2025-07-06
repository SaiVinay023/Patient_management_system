import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Patient } from '../../patient/entities/patient.entity';
import { Medication } from '../../medication/entities/medication.entity';

@Entity()
export class Assignment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Patient, (patient) => patient.assignments, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'patientId' })
  patient: Patient;

  @ManyToOne(() => Medication, (medication) => medication.assignments, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'medicationId' })
  medication: Medication;

  @Column({ type: 'date' })
  startDate: string;

  @Column({ type: 'int' })
  numberOfDays: number;
}
