import { EmailSendGridAdapter } from './email-sendgrid.adapter'

describe('Email Adapter Sendgrid Test Unit', () => {
  it('should send a email', async () => {
    jest.spyOn(EmailSendGridAdapter.prototype, 'sendMail').mockImplementation(async () => { null });
    const emailSendGridAdapter = new EmailSendGridAdapter(process.env.SENDGRID_KEY as string)
    jest.spyOn(emailSendGridAdapter, 'sendMail')

    const sender = "viniciusfreitasrj17@gmail.com"
    const receiver = "viniciusfreitasrj17@gmail.com"
    const subject = "Subject Here"
    const content = "Here we put a Content for this mail"

    const input = {
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
    }

    expect(await emailSendGridAdapter.sendMail(input)).toBe(undefined)
    expect(emailSendGridAdapter.sendMail).toHaveBeenCalledTimes(1);
    jest.restoreAllMocks();
  })

  it('should generate erro using email wrong when send a mail', async () => {
    try {
      const emailSendGridAdapter = new EmailSendGridAdapter(process.env.SENDGRID_KEY as string)
        
      const sender = "email@email.com"
      const receiver = "email@email.com"
      const subject = "Subject Here"
      const content = "Here we put a Content for this mail"
  
      const input = {
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
      }

      await emailSendGridAdapter.sendMail(input)
    } catch (e: any) {
      expect(e.message)
        .toBe("from: The from address does not match a verified Sender Identity. Mail cannot be sent until this error is resolved. Visit https://sendgrid.com/docs/for-developers/sending-email/sender-identity/ to see the Sender Identity requirements");
    }
  })
})
