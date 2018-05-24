import mongoose from 'mongoose'
import logger from '../core/logger/app-logger'

// let Test = mongoose.model('Test', {
//   title: String,
// })

const TestSchema = mongoose.Schema({
  title: String
},
{
  collection: 'Test'
}
)

let TestModel = mongoose.model('Test', TestSchema)

TestModel.addTest = (testToAdd) => {
  logger.info('**one**')
  try {
    return testToAdd.save()
  }
  catch (e) {
    logger.error(e)
  }

}

export default TestModel
