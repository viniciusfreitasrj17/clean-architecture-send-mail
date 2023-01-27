import request from 'supertest'
import { app } from '../app'
import { setupDb } from '../../../database/setupDb'
import EmailModel from '../../../database/email.model'


describe('E2E email tests', () => {
  it('should create a email', async () => {
    const sequelize = await setupDb()
    await sequelize.sync({ force: true })

    // Arrange
    const input = {
      sender: "email@example.com",
      receiver: "email@example.com",
      subject: "Subject Here",
      content: "Here we put a Content for this mail"
    }

    // Act
    const response = await request(app).post('/emails').send(input)

    // Assert
    expect(response.status).toBe(200)
    expect(response.body.sender).toBe(input.sender)
    expect(response.body.receiver).toBe(input.receiver)
    expect(response.body.subject).toBe(input.subject)
    expect(response.body.content).toBe(input.content)

    await EmailModel.destroy({ where: {}, force: true })
    await sequelize.close()
  })

  it('should generate erro 500 when create a email', async () => {
    // Arrange
    const input = {
      sender: "email@example.com",
      receiver: "email@example.com",
      subject: "Subject Error",
      content: "Content Error"
    }

    // Act
    const response = await request(app).post('/emails').send(input)

    // Assert
    expect(response.status).toBe(500)
  })
})
