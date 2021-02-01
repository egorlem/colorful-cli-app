const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 5000;
const cors = require('cors');
const app = express();

//app.use(cors());
app.use(express.json({ extended: true }));
//app.use(express.json({ extended: true }));
app.use('/api', cors(), require('./routes/result.router'));

//app.use(bodyParser.urlencoded({ extended: true }));
// вот эта дич запускает шелл скрипты
// const { exec } = require('child_process');
// var yourscript = exec('sh ./scripts/terminfo.sh', (error, stdout, stderr) => {
//   console.log('мы сюда попали?');
//   console.log(stdout);
//   console.log(stderr);
//   if (error !== null) {
//     console.log(`exec error: ${error}`);
//   }
// });

async function start() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/colorful_cli', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    app.listen(port, () => {
      console.log(`App: work on http://localhost:${port}`);
    });
  } catch (e) {
    console.log(e.message, `Опаньки`);
    process.exit(1);
  }
}
start();

// app.listen(5000);

// app.use(express.static(path.join(__dirname, '../', 'dist')));

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../', 'dist', 'index.html'));
// });

// app.get('/testsh', function (req, res) {
//   res.download('./termtest');
// });
// app.use('/cli', require('./routes'));

// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// app.post('/data', function (req, res) {
//   console.log(req.body);
//   res.end();
// });
