const { Router } = require('express');
const client = require('../lib/composer/composer');

const router = Router();

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
