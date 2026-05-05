const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // ✅ ADDED

dotenv.config();

connectDB(); // ✅ ADDED — MongoDB connect karega

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes'); // ✅ UPAR LAYA

app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes); // ✅ UPAR LAYA

// Test route
app.get('/', function(req, res) {
  res.json({ 
    message: 'India Travel Portal API Running! 🚀',
    status: 'success'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log(`Server chal raha hai port ${PORT} pe! 🔥`);
});