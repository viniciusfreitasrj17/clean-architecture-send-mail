import { Email } from "../../../domains/Email";

export interface CreateEmailRepositoryProtocol {
  create(email: Email): Promise<void>
}

export interface CreateEmailAdapterProtocol {
  sendMail(email: SendEmailProtocol): Promise<void>
}

export interface EmailProtocol {
  name?: string;
  email?: string;
}

export interface AttachmentProtocol {
  filename?: string;
  content?: string;
  type?: string;
}

export interface SendEmailProtocol {
  from?: EmailProtocol;
  to?: EmailProtocol;
  cc?: EmailProtocol;
  bcc?: EmailProtocol;
  replyTo?: EmailProtocol;
  subject?: string;
  content?: { value?: string, type?: string }[];
  templateId?: string;
  dynamicTemplateData?: { [k:string]: string };
  attachments?: AttachmentProtocol[];
  useToList?: boolean;
  toList?: { to: EmailProtocol }[];
  sendAt?: number;
}
