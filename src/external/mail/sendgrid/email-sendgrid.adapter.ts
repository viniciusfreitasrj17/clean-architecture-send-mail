// @ts-nocheck
import 'dotenv/config'
import sgMail from '@sendgrid/mail'
import { SendEmailProtocol } from '../../../app/usecases/create-email/email.protocol'

export class EmailSendGridAdapter {
  constructor(private SENDGRID_KEY: string) {}

  async sendMail({
    from, 
    to, 
    cc,
    bcc,
    replyTo,
    subject, 
    content, 
    templateId, 
    dynamicTemplateData, 
    attachments,
    sendAt,
    toList,
  }: SendEmailProtocol): Promise<void> {
    try {

      sgMail.setApiKey(this.SENDGRID_KEY)

      let params = {
        from,
        to,
        cc,
        bcc,
        replyTo,
        subject,
        dynamicTemplateData,
        attachments,
        personalizations: toList,
        sendAt,
        content,
      }

      await sgMail.send(params)
    } catch (error: any) {
      const message = {
        message: error.response.body.errors.map((e: any) => `${e.field}: ${e.message}`).join(', ')
      }
      throw message
    }
  }
}
