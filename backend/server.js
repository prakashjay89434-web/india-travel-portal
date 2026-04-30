const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

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

const bookingRoutes = require('./routes/bookingRoutes');
app.use('/api/bookings', bookingRoutes);