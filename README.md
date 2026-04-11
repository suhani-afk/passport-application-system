# 🛂 Passport Application Management System

A full-stack web application designed to digitize passport processing — enabling applicants to submit applications and track status online, while administrators manage and verify records in real time.

---

## ✨ Features

* 📝 **Online Application Submission**
  Submit passport applications through a clean, validated form

* 📋 **View & Search Records**
  Browse all applications in a searchable table with color-coded status badges

* ✏️ **Update Verification Status**
  Edit document submission and police verification details for any record

* 🗑️ **Delete Applications**
  Remove records safely with a confirmation dialog

* 📍 **Live Status Tracking**
  Enter an Application ID to view a visual progress stepper in real time

* ⚙️ **Auto-derived Application Status**
  Status is computed dynamically via a MySQL VIEW — never stored manually

---

## 🛠️ Tech Stack

### Frontend
* React.js
* React Router v6
* Axios

### Backend
* Node.js
* Express.js

### Database
* MySQL

---

## 📁 Project Structure

```bash
passport-management/
│
├── backend/
│   ├── db.js                        # MySQL connection
│   ├── routes/
│   │   └── applicationRoutes.js     # API route definitions
│   ├── controllers/
│   │   └── applicationController.js # CRUD logic
│   └── utils/
│       └── statusLogic.js           # Server-side status helper
│
├── frontend/
│   └── src/
│       ├── App.js                   # Root component + routing
│       ├── components/
│       │   └── Navbar.js
│       ├── pages/
│       │   ├── Home.js
│       │   ├── Apply.js
│       │   ├── View.js
│       │   ├── Update.js
│       │   └── Status.js
│       └── services/
│           └── api.js               # Centralized Axios API helpers
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/passport-management.git
cd passport-management
```

---

### 2️⃣ Setup Database

```bash
mysql -u root -p
```

```sql
CREATE DATABASE passport_db;
USE passport_db;
SOURCE schema.sql;
```

---

### 3️⃣ Setup Backend

```bash
cd backend
npm install
```

Edit `db.js` with your MySQL credentials:

```js
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'passport_db'
});
```

Run backend:

```bash
node index.js
```

---

### 4️⃣ Setup Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🚀 Usage

* Open: http://localhost:3000
* Submit a new passport application via the **Apply** page
* View and manage all records on the **View** page
* Track your application progress on the **Status** page

---


