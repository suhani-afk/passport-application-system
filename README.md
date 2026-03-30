# 🛂 Passport Application Management System

A full-stack web application designed to simplify and digitize the passport application process. This system replaces traditional paper-based workflows with an efficient, centralized digital platform where users can apply for passports, track their status, and administrators can manage applications.

---

## 📌 Project Overview

Passport services are among the most widely accessed government facilities, yet traditional systems rely heavily on manual processes such as form submission, physical verification, police checks, and multi-stage approvals. These processes are time-consuming, error-prone, and difficult to track.

This project, developed as part of **BCSE302L: Database Systems (DBMS)**, provides a web-based solution to streamline the entire workflow. It allows users to apply online, track application status in real time, and enables administrators to efficiently manage and verify applications.

---

## 🚀 Features

- Online passport application submission  
- Data stored using a **MySQL Relational DBMS**  
- Automatic application status generation using SQL logic  
- Admin panel to update document & police verification status  
- Searchable application records with edit/delete options  
- Real-time application status tracking with visual progress  

---

## 🏗️ Tech Stack

**Frontend:** React.js, Axios  
**Backend:** Node.js, Express.js  
**Database (DBMS):** MySQL  

---

## 🧩 System Architecture

The application follows a **three-tier architecture**:

- **Presentation Layer:** React.js Single Page Application (SPA)  
- **Application Layer:** Node.js + Express.js  
- **Data Layer:** MySQL relational database  

### 🔄 Workflow

- Frontend sends HTTP requests using Axios  
- Backend processes requests and executes SQL queries  
- Data is returned in JSON format  

---

## 🗄️ Database Design (DBMS Concepts)

This project demonstrates key DBMS concepts:

- Normalized relational schema  
- Primary and Foreign Keys  
- CRUD operations using SQL  
- **MySQL VIEW with CASE statement** to dynamically compute application status  
- Reduced redundancy and improved data consistency  

---

## ⚙️ Functionalities

- **Create (Insert):** Apply for passport  
- **Read (Select):** View applications  
- **Update:** Modify verification status  
- **Delete:** Remove applications  

---

## 🖥️ Installation & Setup

### 1. Clone the Repository


```bash
git clone https://github.com/suhani-afk/passport-application-system.git
cd passport-application-system
