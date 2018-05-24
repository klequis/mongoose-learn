import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import logger from './core/logger/app-logger'
import morgan from 'morgan'
import test from './routes/test.route'
import Mongoose from './db/mongoose'

logger.stream = {
  write: function(message, encoding) {
    logger.info(message)
  }
}


const port = process.env.PORT
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev', {'stream': logger.stream}))

// Setup Routes
app.use('/test', test)


// worked
// app.post('/test', (req, res) => {
//    let test = new Test({ title: req.body.title })
//    test.save().then((result) => {
//       res.send(result)
//    }), (e) => {
//       res.status(400).send(e)
//    }
// })

app.get('/', (req, res) => {
   res.send('Welcome to the Rotary API')
})
app.listen(port, () => {
   logger.info(`server started on port ${port}`)
})
