const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Helper function to read projects data
const readProjectsData = () => {
  const filePath = path.join(__dirname, '../data/projects.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

// Get all projects
router.get('/projects', (req, res) => {
  try {
    const projects = readProjectsData();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error reading projects data' });
  }
});

// Get featured projects
router.get('/projects/featured', (req, res) => {
  try {
    const projects = readProjectsData().filter(project => project.featured);
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error reading projects data' });
  }
});

// Get single project
router.get('/projects/:id', (req, res) => {
  try {
    const projects = readProjectsData();
    const project = projects.find(p => p.id === req.params.id);
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error reading projects data' });
  }
});

module.exports = router;