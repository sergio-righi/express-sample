import express from 'express'
import { auth, validation } from '@/middlewares'
import { UsersController } from '@/controllers'

const router = express.Router()

router.get('/', auth, (_, res) => UsersController.all(res))
router.get('/:id', validation, (req, res) => UsersController.find(res, req))
router.post('/', auth, (req, res) => UsersController.create(res, req))
router.post('/one', auth, (req, res) => UsersController.findOne(res, req))
router.post('/exists', auth, (req, res) => UsersController.exists(res, req))
router.put('/', auth, (req, res) => UsersController.update(res, req))
router.patch('/soft/:id', validation, (req, res) =>
  UsersController.soft(res, req)
)
router.patch('/restore/:id', validation, (req, res) =>
  UsersController.restore(res, req)
)

export default router
