import { Router } from 'express'
import { CreateEmailUseCase } from '../../../../app/usecases/create-email/create-email.usecase'
import { CreateEmailController } from '../../../../infra/controllers/create-email.controller'
import EmailRepository from '../../../database/email.repository'
import { EmailSendGridAdapter } from '../../../mail/sendgrid/email-sendgrid.adapter'

export const emailRouter = Router()

const createEmailController = new CreateEmailController(
  new CreateEmailUseCase(
    new EmailRepository(),
    new EmailSendGridAdapter(process.env.SENDGRID_KEY as string)
  )
)
emailRouter.post('/', async (req, res) =>  
  createEmailController.execute(req, res)
)
