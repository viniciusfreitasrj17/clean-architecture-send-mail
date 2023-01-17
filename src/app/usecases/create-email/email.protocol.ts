import { Email } from "../../../domains/Email";

export interface CreateEmailRepositoryProtocol {
  create(email: Email): Promise<void>
}