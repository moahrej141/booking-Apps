const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const Booking = require('./models/Booking');
const bookingRoutes = require('./routes/bookings');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/bookings', bookingRoutes);

sequelize.sync().then(() => {
  console.log('📦 Database is ready');
  app.listen(3000, () => console.log('🚀 The server is working on http://localhost:3000'));
});
