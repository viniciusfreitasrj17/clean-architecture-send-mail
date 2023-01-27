import { Email } from "../../../domains/Email"
import { CreateEmailInputDto, CreateEmailOutputDto } from "./create-email.dto"
import { CreateEmailUseCase } from "./create-email.usecase"

describe('Email UseCase Test Unit', () => {
  it('should create a email', async () => {
    const input: CreateEmailInputDto = {
      sender: "viniciusfreitasrj17@gmail.com",
      receiver: "viniciusfreitasrj17@gmail.com",
      subject: "Subject Here",
      content: "Here we put a Content for this mail"
    }

    const createEmailRepository = () => {
      return { create: jest.fn() }
    }

    const emailSendGridAdapter = () => {
      return { sendMail: jest.fn() }
    }

    const createEmailUseCase = new CreateEmailUseCase(
      createEmailRepository(),
      emailSendGridAdapter()
    )

    const result = await createEmailUseCase.execute(input)

    const output: CreateEmailOutputDto = {
      email: new Email(
        "viniciusfreitasrj17@gmail.com",
        "viniciusfreitasrj17@gmail.com",
        "Subject Here",
        "Here we put a Content for this mail"
      )
    }

    expect(result.email.sender).toBe(output.email.sender)
    expect(result.email.receiver).toBe(output.email.receiver)
    expect(result.email.subject).toBe(output.email.subject)
    expect(result.email.content).toBe(output.email.content)
  })
})
