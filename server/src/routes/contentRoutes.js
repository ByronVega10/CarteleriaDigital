const express = require('express');
const { createContent, getAllContents } = require('../repositories/contentRepository');
const router = express.Router();

router.get('/', async (req, res) => {
  const contents = await getAllContents();
  res.json(contents);
});

router.post('/', async (req, res) => {
  try {
    const newContent = await createContent(req.body);
    res.status(201).json(newContent);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear contenido', error });
  }
});

module.exports = router;