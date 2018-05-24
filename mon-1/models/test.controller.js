import Test from './test.model'
import logger from '../core/logger/app-logger'

const controller = {}

controller.addTest = async (req, res) => {
  let testToAdd = Test({ title: req.body.title })
  try {

    const savedTest = await Test.addTest(testToAdd)

    logger.info('Adding test')
    req.send(savedTest)
  }
  catch (e) {
    logger.error('Error adding Test', e)
    res.send('Cannot add Test')
  }
}

export default controller
