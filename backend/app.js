const express = require('express');
const cors = require('cors');
const portfolioRoutes = require('./routes/portfolioRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/contact', contactRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Personal Portfolio Backend');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});