import { Email } from "../../../domains/Email";

export interface CreateEmailInputDto {
  sender: string;
  receiver: string;
  subject: string;
  content: string;
}

export interface CreateEmailOutputDto {
  email: Email;
}
