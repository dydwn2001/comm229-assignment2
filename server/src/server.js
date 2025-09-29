const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const app = express()
const port = 3000

app.use(express.json());
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.send(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/`)
})