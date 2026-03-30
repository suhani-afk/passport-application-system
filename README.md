# 🛂 Passport Application Management System

A full-stack web application designed to simplify and digitise the passport application process. This system replaces traditional paper-based workflows with an efficient, centralised digital platform where users can apply for passports, track their status and administrators can manage applications.

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

## 🖥️ Installation & Setup

### 1. Clone the Repository


```bash
git clone https://github.com/suhani-afk/passport-application-system.git
cd passport-application-system
```

### 2. Install Dependencies

Frontend:
```bash
cd client
npm install
npm start
```

Backend:
```bash
cd server
npm install
node index.js
```

### 3. Setup Database (MySQL Workbench)
1.Open MySQL Workbench and connect to your server
2.Open a New Query Tab
3.Run:
```bash
CREATE DATABASE passport_db;
USE passport_db;
```
4.Copy and paste your project SQL code

5.Click Execute (⚡)
