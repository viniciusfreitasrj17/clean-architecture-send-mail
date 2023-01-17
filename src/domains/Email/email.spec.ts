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

  it('should generate error when put sender accout invalid', () => {
    try {
      const _ = new Email(
        "emailexample.com",
        "email@example.com",
        "Subject Here",
        "Here we put a Content for this mail"
        )
    } catch (error: any) {
      expect(error.message).toBe('Email invalid, please put correct sender account')
    }
  })

  it('should generate error when put receiver accout invalid', () => {
    try {
      const _ = new Email(
        "email@example.com",
        "emailexample.com",
        "Subject Here",
        "Here we put a Content for this mail"
        )
    } catch (error: any) {
      expect(error.message).toBe('Email invalid, please put correct receiver account')
    }
  })

  it('should generate error when subject not have a minimum space in middle', () => {
    try {
      const _ = new Email(
        "email@example.com",
        "email@example.com",
        "Subject",
        "Here we put a Content for this mail"
      )
    } catch (error: any) {
      expect(error.message).toBe('Subject invalid, subject must have a minimum space in middle') 
    }
  })

  it('should generate error when content not be at least 30 letters', () => {
    try {
      const _ = new Email(
        "email@example.com",
        "email@example.com",
        "Subject Here",
        "Content"
      )
    } catch (error: any) {
      expect(error.message).toBe('Content invalid, content must be at least 30 letters') 
    }
  })
  
})
