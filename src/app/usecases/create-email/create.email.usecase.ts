import { Email } from "../../../domains/Email";
import { CreateEmailInputDto, CreateEmailOutputDto } from "./create-email.dto";
import { CreateEmailRepositoryProtocol } from "./email.protocol";

export class CreateEmailUseCase {
  constructor(
    private _createEmailRepository: CreateEmailRepositoryProtocol
  ) {}

  async execute(input: CreateEmailInputDto): Promise<CreateEmailOutputDto> {
    const { sender, receiver, subject, content } = input
    const email = new Email(sender, receiver, subject, content)

    await this._createEmailRepository.create(email)

    return { email }
  }
}