import express from 'express'
import path from 'path'

const app = express()

app.get('/', function(req, res) {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`))
})

app.use(express.static('client/build'))

const server = app.listen(5000, function() {
  const host = server.address().address
  const port = server.address().port

  console.log('Quiz app listening at http://%s:%s', host, port)
})

