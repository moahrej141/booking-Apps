# Booking App

A simple web-based booking system built with **React** for the frontend and **Node.js/Express** for the backend.  
Users can submit a booking form and receive confirmation via email.

---

📁 Project Structure

rese/
├── frontend/ # React app (client)
│ └── src/
│ └── components/
│ └── BookingForm.jsx
├── backend/ # Express server (API)
│ ├── routes/
│ │ └── bookings.js
│ ├── models/
│ │ └── Booking.js
│ └── server.js
└── README.md


🚀 Features

- Booking form with name, date, and email
- Saves booking in MySQL database (via Sequelize)
- Sends confirmation email using Gmail SMTP
- Displays list of all bookings


⚙️ Technologies

- **Frontend:** React, Axios, React DatePicker
- **Backend:** Node.js, Express, Sequelize, Nodemailer
- **Database:** MySQL

1.Backend Setup

```bash
cd rese/backend
npm install
```
-Create a .env file in backend/ with:
```bash
ini
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=booking_app
EMAIL_USER=your@gmail.com
EMAIL_PASS=your_app_password
```

-Start the backend server:
```bash
node server.js
```

-Frontend Setup

```bash
cd rese/frontend
npm install
npm start
```

📩 Email Configuration
To use Gmail for sending emails:
Enable 2-Step Verification on your Gmail.
Create an App Password (not your main password).
Use that App Password in your .env file.


🧑‍💻 Author
Made by Soulaiman — 2025

