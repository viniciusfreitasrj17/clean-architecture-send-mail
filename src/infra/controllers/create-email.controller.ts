import { CreateEmailUseCase } from "../../app/usecases/create-email/create-email.usecase"
import { RequestProtocol, ResponseProtocol } from "./controller.protocol"

export class CreateEmailController {
  constructor(
    private _createEmailUseCase: CreateEmailUseCase,
  ) {}

  public async execute(req: RequestProtocol, res: ResponseProtocol) {
    try {
      const input = {
        sender: req.body.sender,
        receiver: req.body.receiver,
        subject: req.body.subject,
        content: req.body.content,
      }

      const { email } = await this._createEmailUseCase.execute(input)

      return res.status(200).send({
        sender: email.sender,
        receiver: email.receiver,
        subject: email.subject,
        content: email.content,
      })
    } catch (error) {
      return res.status(500).send(error)
    }
  }
}