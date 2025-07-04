import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientModule } from './patient/patient.module';
import { MedicationModule } from './medication/medication.module';
import { AssignmentModule } from './assignment/assignment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
        logging: true, // good for dev
      // logging: false, // good for production
      // migrationsRun: true, // uncomment if you want to run migrations automatically
      // migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      // cli: {
      //   migrationsDir: 'src/migrations',
      // },
      // autoLoadEntities: true, // uncomment if you want to automatically load entities
    }),
    PatientModule,
    MedicationModule,
    AssignmentModule,
  ],
})
export class AppModule {}
