const { Router } = require("express");
const router = Router();
const cors = require("cors");
router.use(cors());

router.post(`/test`, function (req, res) {
  try {
    console.log(req.body);
    const { titleId } = req.body;
    //const currentGamePad = await Gamepad.findOne({ titleId });
    res.status(201).json("ВСЕ ОК");
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
