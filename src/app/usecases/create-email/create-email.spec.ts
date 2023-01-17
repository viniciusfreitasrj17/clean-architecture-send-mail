import { Email } from "../../../domains/Email"
import { CreateEmailInputDto, CreateEmailOutputDto } from "./create-email.dto"
import { CreateEmailUseCase } from "./create.email.usecase"

describe('Email UseCase Test Unit', () => {
  it('should create a email', async () => {
    const input: CreateEmailInputDto = {
      sender: "email@example.com",
      receiver: "email@example.com",
      subject: "Subject Here",
      content: "Here we put a Content for this mail"
    }

    const createEmailRepository = () => {
      return { create: jest.fn() }
    }

    const createEmailUseCase = new CreateEmailUseCase(
      createEmailRepository()
    )

    const result = await createEmailUseCase.execute(input)

    const output: CreateEmailOutputDto = {
      email: new Email(
        "email@example.com",
        "email@example.com",
        "Subject Here",
        "Here we put a Content for this mail"
      )
    }

    expect(result).toStrictEqual(output)
  })
})
