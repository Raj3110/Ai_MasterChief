const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { body, validationResult } = require('express-validator');

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

const users = [];

// Sign-up route
app.post('/register', [
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array()[0].msg });
  }

  const { email, password } = req.body;

  // Check if user already exists
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // bcrypt for Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Creating a new user
  const user = {
    id: users.length + 1,
    email,
    password: hashedPassword
  };
  users.push(user);

  // Create and assign a token
  const token = jwt.sign({ userId: user.id }, 'your_jwt_secret');

  res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });
  
  res.json({ message: 'User registered successfully' });
});

// Login route
app.post('/login', [
  body('email').isEmail(),
  body('password').exists(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array()[0].msg });
  }

  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  // Checking.. password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  // Create and assign a token
  const token = jwt.sign({ userId: user.id }, 'masterchief');

  res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });
  
  res.json({ message: 'Logged in successfully' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));