const { Router } = require('express');
const Test = require('../models/init');
const router = Router();
const cors = require('cors');

router.use(cors());

router.post('/test', async (req, res) => {
  try {
    console.log('yo')
    const text = await Test.find({ initialname: 'initialmag' });
    res.status(201).json(text);
  } catch {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

module.exports = router;
