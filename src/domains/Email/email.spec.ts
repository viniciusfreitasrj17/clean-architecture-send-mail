import { Email } from "."

describe('Email Domain Test Unit', () => {
  it('should created a email', () => {
    const email = new Email(
      "email@example.com",
      "email@example.com",
      "Subject Here",
      "Here we put a Content for this mail"
    )

    expect(email).toBeDefined()
    expect(email).toBeInstanceOf(Email)
  })
})
