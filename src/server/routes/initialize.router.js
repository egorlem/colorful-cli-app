const { Router } = require('express');
const router = Router();

const colors = require('../models/colors');
const cors = require('cors');

router.use(cors());

router.get('/colors', async (req, res) => {
  try {
    const colorlist = await colors.findOne({ name: 'xterm256' }).exec();
    res.status(201).json(colorlist);
  } catch (e) {
    res.status(500).json({ message: 'Цвета не загрузились' });
  }
});
module.exports = router;
