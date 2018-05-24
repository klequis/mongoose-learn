import express from 'express'
const router = express.Router()
import testController from '../models/test.controller'

router.post('/', (req, res) => {
   testController.addTest(req, res)
})

export default router
