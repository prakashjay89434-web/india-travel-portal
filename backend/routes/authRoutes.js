const express = require('express');
const router = express.Router();

// Test route
router.get('/test', function(req, res) {
  res.json({ 
    message: 'Auth API Working! ✅' 
  });
});

// Signup route
router.post('/signup', async function(req, res) {
  try {
    const { name, email, password } = req.body;

    // Empty check
    if(!name || !email || !password) {
      return res.status(400).json({ 
        message: 'Please fill all fields!' 
      });
    }

    res.status(201).json({ 
      message: 'User registered successfully! ✅',
      user: { name, email }
    });

  } catch (error) {
    res.status(500).json({ 
      message: 'Server error!', 
      error: error.message 
    });
  }
});

// Login route
router.post('/login', async function(req, res) {
  try {
    const { email, password } = req.body;

    if(!email || !password) {
      return res.status(400).json({ 
        message: 'Please fill all fields!' 
      });
    }

    res.status(200).json({ 
      message: 'Login successful! ✅',
      token: 'demo-token-123'
    });

  } catch (error) {
    res.status(500).json({ 
      message: 'Server error!', 
      error: error.message 
    });
  }
});

module.exports = router;