const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Helper function to read/write messages data
const readMessagesData = () => {
  const filePath = path.join(__dirname, '../data/messages.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

const writeMessagesData = (data) => {
  const filePath = path.join(__dirname, '../data/messages.json');
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Submit contact form
router.post('/', (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    const messages = readMessagesData();
    const newMessage = {
      id: uuidv4(),
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString(),
      isRead: false
    };
    
    messages.push(newMessage);
    writeMessagesData(messages);
    
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: 'Error saving message' });
  }
});

// Get all messages (for demo purposes)
router.get('/', (req, res) => {
  try {
    const messages = readMessagesData();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Error reading messages' });
  }
});

module.exports = router;