const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
//const path = require('path');
//const bodyParser = require('body-parser');

const cors = require('cors')
const Loger = require('./lib/loger')

const port = 5000
const log = new Loger()
const app = express()

app.use(cors())
app.use(express.json({ extended: true }))

app.use('/v1/api', cors(), require('./routes/result.router'))
app.use('/v1/api/initialize', cors(), require('./routes/initialize.router'))

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
    await mongoose
      .connect(config.get('mongoUrl'), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => log.ok(`MongoDB work on ${config.get('mongoUrl')}`))
      .catch((e) => {
        log.err('MondoDB ', e.message)
      })

    app.listen(port, () => {
      log.msg(`Server work on http://localhost:${config.get('port')}`)
    })
  } catch (e) {
    log.err(e.message)
    process.exit(1)
  }
}
start()

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
