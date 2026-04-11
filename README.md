# 🛂 Passport Application Management System

A full-stack web application designed to digitise and streamline the passport application process. The system replaces traditional manual workflows with a centralised digital platform, enabling users to apply online, track application status in real time, and allowing administrators to efficiently manage and verify records.

---

## 📌 Project Overview

Passport services traditionally involve manual form submission, physical verification, and multiple approval stages, making the process time-consuming and difficult to track.  

This project, developed as part of **BCSE302L: Database Systems (DBMS)**, provides a web-based solution that simplifies the workflow by digitising the entire system and ensuring efficient data management.

---

## 🚀 Features

- Online passport application submission through a user-friendly interface  
- Structured data storage using a **MySQL Relational DBMS**  
- **Automatic application status generation** using SQL (VIEW + CASE logic)  
- Admin panel for updating document submission and police verification status  
- Searchable application records with edit and delete functionality  
- Real-time application status tracking with visual progress indicators  

---

## 🏗️ Tech Stack

**Frontend:** React.js, Axios  
**Backend:** Node.js, Express.js  
**Database (DBMS):** MySQL  

---

## 🧩 System Architecture

The application follows a **three-tier architecture**:

- **Presentation Layer:** React.js (Single Page Application)  
- **Application Layer:** Node.js + Express.js  
- **Data Layer:** MySQL relational database  

### 🔄 Workflow

- Frontend sends HTTP requests using Axios  
- Backend processes requests and executes SQL queries  
- Data is returned in JSON format  

---

## 🗄️ Database Design (DBMS Concepts)

- Normalized relational schema  
- Primary and Foreign Keys  
- SQL-based CRUD operations  
- MySQL VIEW with CASE statement for dynamic status computation  
- Reduced redundancy and improved data consistency  

---

## ⚙️ Functionalities

- Create (Insert): Apply for passport  
- Read (Select): View applications  
- Update: Modify verification status  
- Delete: Remove applications  

---

## 🔥 Key Highlights

- Implemented a self-updating status engine using SQL logic  
- Eliminated manual status updates to improve accuracy  
- Designed a scalable and modular architecture  
- Ensured efficient data handling using DBMS principles  

---

## 🖥️ Installation & Setup

### 1. Clone the Repository

    git clone https://github.com/suhani-afk/passport-application-system.git
    cd passport-application-system

---

### 2. Install Dependencies

Frontend:

    cd client
    npm install
    npm start

Backend:

    cd server
    npm install
    node index.js

---

### 3. Setup Database (MySQL Workbench)

1. Open MySQL Workbench and connect to your server  
2. Open a New Query Tab  
3. Run:

    CREATE DATABASE passport_db;
    USE passport_db;

4. Copy and paste your project SQL code (tables + view)  
5. Click Execute (⚡)

---

## 📊 Key Outcomes

- Improved efficiency by digitising passport workflows  
- Reduced manual errors through automated status computation  
- Provided real-time tracking for better user experience  

---

## 🎯 Future Enhancements

- User authentication system  
- Document upload feature  
- Email/SMS notifications  
- Role-based access control  

---

## 👩‍💻 Author

Suhani  
CSE AIML Student, VIT Chennai  

---

## 🔗 Project Link

https://github.com/suhani-afk/passport-application-system  

---

## 📄 License

This project is developed for academic purposes as part of BCSE302L: Database Systems (DBMS).
