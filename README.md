# 🚀 MSME Smart Maintenance Platform

> **An AI-Powered Industry 5.0 Knowledge Management & Predictive Maintenance Platform for MSMEs**

![MERN](https://img.shields.io/badge/Stack-MERN-green)
![AI](https://img.shields.io/badge/AI-Gemini-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Status](https://img.shields.io/badge/Status-MVP-orange)

---

## 📖 Overview

The **MSME Smart Maintenance Platform** is a web-based application designed to help Micro, Small, and Medium Enterprises (MSMEs) digitize their maintenance process using **AI**, **QR Code technology**, and a centralized **Knowledge Management System**.

The platform enables workers to quickly report machine issues by scanning QR codes, receive AI-generated fault analysis and Standard Operating Procedures (SOPs), and build a searchable knowledge base for future maintenance.

---

## 🎯 Problem Statement

Many MSMEs still rely on manual maintenance records and technician experience, resulting in:

* ❌ Slow issue reporting
* ❌ Repeated troubleshooting
* ❌ Lack of centralized knowledge
* ❌ Increased machine downtime
* ❌ No standardized repair procedures

---

## 💡 Solution

Our platform provides:

* QR Code based machine identification
* Digital issue reporting
* AI-powered fault diagnosis
* Automatic SOP generation
* Knowledge base management
* Maintenance dashboard
* Historical maintenance records

---

# ✨ Features

### 🔐 Authentication

* Secure Login & Registration
* JWT Authentication
* Role-Based Access Control

Roles:

* 👷 Worker
* 🛠 Maintenance Engineer
* 👨‍💼 Supervisor
* 👑 Admin

---

### 🏭 Machine Management

* Add Machine
* Edit Machine
* Delete Machine
* Machine Status
* Department Management

---

### 📱 QR Code Integration

Each machine receives a unique QR Code.

Scanning the QR Code will:

* Open machine profile
* Show maintenance history
* Display previous issues
* Create new issue report

---

### 📝 Smart Issue Reporting

Workers can:

* Scan QR Code
* Upload machine image
* Describe issue
* Set priority
* Submit maintenance request

---

### 🤖 AI Fault Analysis

Using Gemini AI

The system generates:

* Possible Fault
* Root Cause
* Severity
* Safety Precautions
* Recommended Actions

---

### 📄 AI SOP Generator

Generate repair procedures automatically.

Includes:

* Repair Steps
* Required Tools
* Safety Instructions
* Estimated Repair Time

---

### 📚 Knowledge Base

Search previous maintenance records by:

* Machine
* Department
* Issue
* Keywords

---

### 📊 Dashboard

Real-time statistics

* Total Machines
* Open Issues
* Closed Issues
* Most Frequent Faults
* Machine Health Overview

---

## 🏗 System Architecture

```text
Worker
    │
    ▼
Scan QR Code
    │
    ▼
Machine Details
    │
    ▼
Issue Reporting
    │
    ▼
AI Analysis
    │
    ▼
SOP Generation
    │
    ▼
Knowledge Base
    │
    ▼
Dashboard
```

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* React Router
* Axios
* Recharts

---

## Backend

* Node.js
* Express.js
* JWT Authentication
* Multer

---

## Database

* MongoDB Atlas
* Mongoose

---

## AI

* Google Gemini API

---

## Cloud

* Vercel
* Render
* Cloudinary

---

# 📂 Project Structure

```
msme-smart-maintenance

│

├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── services
│   └── assets
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── models
│   ├── config
│   ├── uploads
│   └── utils
│
├── docs
│
└── README.md
```

---

# 👨‍💻 Team Members

| Member   | Role                                |
| -------- | ----------------------------------- |
| Member 1 | Team Lead & Authentication          |
| Member 2 | Frontend & Dashboard                |
| Member 3 | Backend, Database & QR Module       |
| Member 4 | AI Integration & Knowledge Base     |
| Member 5 | Testing, Deployment & Documentation |

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/msme-smart-maintenance.git
```

---

## Install Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Install Backend

```bash
cd backend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_api_key

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=
```

---

# 📌 API Endpoints

## Authentication

```
POST /api/auth/register

POST /api/auth/login

GET /api/auth/profile
```

---

## Machine

```
GET /api/machines

POST /api/machines

PUT /api/machines/:id

DELETE /api/machines/:id
```

---

## Reports

```
GET /api/reports

POST /api/reports

PUT /api/reports/:id
```

---

## AI

```
POST /api/ai/analyze

POST /api/ai/sop

POST /api/ai/rootcause
```

---

# 📈 Future Enhancements

* Voice-based issue reporting
* Predictive Maintenance
* IoT Sensor Integration
* Email Notifications
* Mobile Application
* Multi-language Support
* AI Chat Assistant

---

# 📅 Development Roadmap

* ✅ Authentication
* ✅ Machine Management
* ✅ QR Code Integration
* ⏳ AI Fault Analysis
* ⏳ SOP Generator
* ⏳ Dashboard
* ⏳ Knowledge Base
* ⏳ Deployment

---

# 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# ⭐ Acknowledgements

* MSME College Screening Program
* MERN Stack Community
* Google Gemini API
* Open Source Contributors

---

## ❤️ Built with MERN + AI for Industry 5.0
