const { Router } = require('express');
const Test = require('../models/init');
const router = Router();
const client = require('../getresult/compose');
const cors = require('cors');

router.use(cors());

router.post('/test', async (req, res) => {
  try {
    let lines = req.body;
    let result = client(lines.psonemodel);
    res.status(201).json(result);
  } catch {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

module.exports = router;
