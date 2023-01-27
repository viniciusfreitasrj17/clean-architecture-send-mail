import { Router } from 'express'
import { CreateEmailUseCase } from '../../../../app/usecases/create-email/create-email.usecase'
import { CreateEmailController } from '../../../../infra/controllers/create-email.controller'
import EmailRepository from '../../../database/email.repository'

export const emailRouter = Router()

const createEmailController = new CreateEmailController(
  new CreateEmailUseCase(
    new EmailRepository()
  )
)

emailRouter.post('/', async (req, res) =>  
  createEmailController.execute(req, res)
)
