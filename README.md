# 🏥 Care App — Full Stack Service Booking Platform

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.1-38bdf8?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/DaisyUI-5-FF69B4?logo=daisyui" />
  <img src="https://img.shields.io/badge/NextAuth-Authentication-blue" />
  <img src="https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb" />
  <img src="https://img.shields.io/badge/Nodemailer-Email-orange" />
  <img src="https://img.shields.io/badge/Vercel-Deployment-black?logo=vercel" />
  <img src="https://img.shields.io/badge/Status-Active-brightgreen" />
</p>

A modern and secure platform that allows users to book trusted care services including baby care, elderly care, and patient assistance.

---

## 🌐 Live Project

🔗 **Live Website:** https://care-mauve.vercel.app  
🔗 **GitHub Repository:** https://github.com/somrat350/Care.com  

---

## 📸 Screenshot

<img width="1279" height="894" alt="Screenshot_1" src="https://github.com/user-attachments/assets/7128e930-e78b-4838-a1e2-bd75d22f9c44" />

---

## 🧩 Project Overview

Care App is a full stack web application that helps users easily book verified care services. It focuses on trust, safety, and simplicity while providing a smooth experience for both users and service providers.

---

## ✨ Core Features

- Book baby, elderly, and patient care services
- Secure authentication (login / register)
- Protected private routes for authenticated users
- Service booking with date and details
- Email confirmation after successful booking
- Modern UI built with Tailwind CSS and DaisyUI
- Fully responsive across mobile and desktop

---

## 🛠️ Technologies Used

### Frontend

- Next.js (App Router)
- JavaScript

### Styling

- Tailwind CSS
- DaisyUI

### Authentication

- NextAuth.js

### Backend

- MongoDB (Native Driver)
- Nodemailer (Email Service)

### Deployment

- Vercel

---

## 📦 Dependencies

```json
{
  "next": "^14.0.0",
  "next-auth": "^4.24.0",
  "mongodb": "^6.3.0",
  "nodemailer": "^6.9.8",
  "daisyui": "^5.0.0",
  "tailwindcss": "^3.4.0"
}
```

---

## 🚀 How to Run Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/somrat350/Care.com.git
cd Care.com
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env.local` file:

```env
MONGO_URI=your_mongodb_uri
DB_NAME=your_db_name
NEXTAUTH_SECRET=your_secret
NEXT_PUBLIC_BASE_URL=http://localhost:3000
SMTP_HOST=your_host_name
SMTP_PORT=your_port
SMTP_USER=your_user_name
SMTP_PASS=your_user_password
```

### 4️⃣ Run the development server

```bash
npm run dev
```

Then open:  
👉 http://localhost:3000

---

## 🔗 Resources

- Next.js: https://nextjs.org/
- NextAuth: https://next-auth.js.org/
- MongoDB: https://www.mongodb.com/
- Tailwind CSS: https://tailwindcss.com/
- DaisyUI: https://daisyui.com/