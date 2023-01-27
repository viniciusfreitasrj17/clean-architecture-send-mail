export class Email {
  private _sender: string;
  private _receiver: string;
  private _subject: string;
  private _content: string;
  private _id: number;

  constructor(
    sender: string,
    receiver: string,
    subject: string,
    content: string,
  ) {
    this._sender = this.isEmailAccountValid(sender, 'sender')
    this._receiver = this.isEmailAccountValid(receiver, 'receiver')
    this._subject = this.isSubjectValid(subject)
    this._content = this.isContentValid(content)
    this._id = Math.ceil(Math.random() * 10 ** 15)
  }

  /**
   * Email rules:
   * 
   * Email Accounts (sender and receiver) must be valid
   * Subject must have a minimum space in middle
   * Content must be at least 30 letters
   */

  get sender() { return this._sender }
  get receiver() { return this._receiver }
  get subject() { return this._subject }
  get content() { return this._content }
  get id() { return this._id }

  private isEmailAccountValid(email: string, type: 'sender'|'receiver') {
    if (!email.toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )) {
      throw new TypeError(`Email invalid, please put correct ${type} account`)
    }
    return email
  }
  
  private isSubjectValid(subject: string) {
    if (!subject
      .toLowerCase()
      .match(
        /^.*\s+.*$/
      )) {
      throw new TypeError(`Subject invalid, subject must have a minimum space in middle`)
    }
    return subject
  }

  private isContentValid(content: string) {
    if (!(content.length > 29)) {
      throw new TypeError(`Content invalid, content must be at least 30 letters`)
    }
    return content
  }
}