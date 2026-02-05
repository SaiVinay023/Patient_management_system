# 🏥 Patient Management System

A full-stack web application for managing patients, medications, and treatment assignments. Built with modern technologies to demonstrate clean architecture, RESTful API design, and seamless frontend-backend integration.

## 🎯 Overview

This application provides a comprehensive solution for managing digital health workflows, allowing healthcare providers to track patients, medications, and treatment schedules efficiently. The system automatically calculates remaining treatment days based on assignment data.

## ✨ Features

### Backend (NestJS)
- **Patient Management**: Create, read, update, and delete patient records with name and date of birth
- **Medication Management**: Manage medication catalog with name, dosage, and frequency information
- **Treatment Assignments**: Assign medications to patients with start dates and treatment duration
- **Automatic Calculations**: Real-time calculation of remaining treatment days for each assignment
- **Data Validation**: Input validation with appropriate error handling and HTTP status codes
- **Unit Testing**: Core business logic covered with unit tests

### Frontend (Next.js)
- **Patient Dashboard**: View all patients with their active medication assignments
- **Treatment Tracking**: Display remaining treatment days for each assignment
- **Interactive Forms**: Create and manage patients, medications, and assignments
- **Responsive Design**: Styled with Tailwind CSS for a modern, mobile-friendly interface
- **Type Safety**: Full TypeScript implementation across the application

## 🛠️ Tech Stack

**Backend:**
- NestJS
- TypeScript
- SQLite
- TypeORM

**Frontend:**
- Next.js
- TypeScript
- Tailwind CSS
- React

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

**Backend Setup:**

```bash
cd backend
npm install
npm run start:dev
```

The backend server will run on `http://localhost:8080`.

**Frontend Setup:**

```bash
cd frontend
npm install
npm run dev
```

The frontend application will run on `http://localhost:3000`.

## 📁 Project Structure

```
Patient_management_system/
├── backend/
│   ├── src/
│   ├── database.sqlite
│   └── package.json
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md
```

## 🔑 Key Functionalities

### API Endpoints
- Patient CRUD operations
- Medication CRUD operations
- Treatment assignment management
- Remaining days calculation endpoint

### Data Models
- **Patient**: Stores patient information (name, date of birth)
- **Medication**: Contains medication details (name, dosage, frequency)
- **Assignment**: Links patients with medications, including start date and treatment duration

### Business Logic
- Patients can have multiple active medication assignments
- Automatic calculation of remaining treatment days based on: `(start_date + duration) - current_date`
- Real-time updates as dates progress

## 🧪 Testing

Run backend tests:

```bash
cd backend
npm test
```

## 🔧 Configuration

- Database: SQLite database located at `backend/database.sqlite`
- Backend URL: Configured as a global constant in the frontend
- Default ports: Backend (8080), Frontend (3000)

## 📝 Development Approach

- Clean, scalable folder structure
- Type-safe TypeScript implementation
- Comprehensive error handling and validation
- RESTful API design principles
- Progressive commits with clear messages
- Component-based frontend architecture

## 🤝 Contributing

This is a portfolio project. Feel free to fork and modify for your own use.

## 📄 License

MIT License - feel free to use this project for learning and portfolio purposes.

---

Built with ❤️ using NestJS and Next.js