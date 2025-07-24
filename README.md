# 🏡 Home Loan Management System

A user-friendly online platform that simplifies the process of home loan application, tracking, and EMI management. Built with React, this system provides a hassle-free experience for both users and administrators.

---

##  Project Overview

Availing home loans in India is often time-consuming and complex. This application streamlines the loan application and approval process by enabling users to:

- Apply for loans digitally
- Calculate EMI and loan eligibility
- Track application status in real-time
- Manage documents and personal information
- Access admin-level approvals and verifications

---

##  Users

- **Admin**: Manages loan approvals, application reviews, and system data.
- **Customer**: Registers, applies for loans, uploads documents, and tracks loan progress.

---

##  Features

-  Home page with company overview and service info
- User authentication (Login/Register)
-  EMI & Eligibility Calculators
-  Loan application submission with document upload
-  Loan status tracking via Application ID & DOB
-  Admin dashboard for approvals
-  FAQ section for user support

---

##  Tech Stack

- **Frontend**: React.js, HTML5, CSS3, JavaScript
- **Backend**: (To be integrated —  Spring Boot)
- **Database**: (To be integrated —  MySQL)
- **Authentication**: Spring Security - Bcrypt

---

##  Modules Overview

### 1. Home Page
- Overview of services
- Quick links to registration and login
- Access to calculators

### 2. User Authentication
- Email & password based registration/login
- Role-based access (Admin/Customer)

### 3. Loan Application
- Personal details (Name, DOB, PAN, Aadhar, etc.)
- Property & income information
- Document upload
- Checklist verification
- Application ID & verification appointment generation

### 4. Loan Tracker
- Track application status using:
  - Application ID
  - Date of Birth
- Status stages:
  - Sent for Verification
  - Under Final Approval
  - Approved / Rejected

### 5. Calculators
- **Eligibility Calculator**
  - `Loan Amount = 60 × (0.6 × Net Monthly Salary)`
- **EMI Calculator**
  - `EMI = P × R × [(1 + R)^n / ((1 + R)^n - 1)]`
  - Interest Rate fixed at **8.5%**

### 6. Account Creation
- Auto account generation post-approval
- Funds disbursement info

---

## 📁 Folder Structure

```bash
home-loan-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md

```
---

# Clone the repository
git clone https://github.com/writemedivi/vapasi-2025-capstone-frontend.git

### Navigate into the project directory
cd home-loan-app

### Install dependencies
npm install

### Run the development server
npm start

---
###  Contributed by

Team: VapasiWorks 2025 Batch
