import { CreateEmailRepositoryProtocol } from "../../app/usecases/create-email/email.protocol";
import { Email } from "../../domains/Email";
import EmailModel from "./email.model";

export default class EmailRepository implements CreateEmailRepositoryProtocol {
  async create(email: Email): Promise<void> {
    await EmailModel.create({
      id: email.id,
      sender: email.sender,
      receiver: email.receiver,
      subject: email.subject,
      content: email.content,
    })
  }
}