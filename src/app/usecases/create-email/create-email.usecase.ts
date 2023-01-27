import { Email } from "../../../domains/Email";
import { CreateEmailInputDto, CreateEmailOutputDto } from "./create-email.dto";
import { CreateEmailAdapterProtocol, CreateEmailRepositoryProtocol } from "./email.protocol";

export class CreateEmailUseCase {
  constructor(
    private _createEmailRepository: CreateEmailRepositoryProtocol,
    private _createEmailAdapterProtocol: CreateEmailAdapterProtocol,
  ) {}

  async execute(input: CreateEmailInputDto): Promise<CreateEmailOutputDto> {
    const { sender, receiver, subject, content } = input
    const email = new Email(sender, receiver, subject, content)

    await this._createEmailRepository.create(email)

    await this._createEmailAdapterProtocol.sendMail({
      from: {
        email: sender,
        name: "Sender Name"
      },
      to: {
        email: receiver,
        name: "Receiver Name"
      },
      subject,
      content: [{
        type: 'text/plain',
        value: content
      }]
    })

    return { email }
  }
}