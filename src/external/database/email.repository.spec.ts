import { Sequelize } from "sequelize-typescript"
import { Email } from "../../domains/Email"
import EmailModel from "./email.model"
import EmailRepository from "./email.repository"

describe('emails repository integration test', () => {
  let sequelize: Sequelize

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true },
    })

    sequelize.addModels([
      EmailModel,
    ])
    await sequelize.sync()
  })

  afterEach(async () => {
    await sequelize.close()
  })
  
  it('should create a email', async () => {
    const repository = new EmailRepository()
    const email = new Email(
      "email@example.com",
      "email@example.com",
      "Subject Here",
      "Here we put a Content for this mail"
    )
    repository.create(email)

    const result = await EmailModel.findOne({ where: { id: email.id } })

    expect(result).toBeDefined()
    expect(result?.id).toBe(email.id)
    expect(result?.sender).toBe("email@example.com")
    expect(result?.receiver).toBe("email@example.com")
    expect(result?.subject).toBe("Subject Here")
    expect(result?.content).toBe("Here we put a Content for this mail")
  })
})
