export class Email {
  private _sender: string;
  private _receiver: string;
  private _subject: string;
  private _content: string;

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
  }

  /**
   * Email rules:
   * 
   * Email Accounts (sender and receiver) must be valid
   * Subject must have a minimum space in middle
   * Content must be at least 30 letters
   */

  isEmailAccountValid(email: string, type: 'sender'|'receiver') {
    if (!email.toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )) {
      throw new Error(`Email invalid, please put correct ${type} account`)
    }
    return email
  }
  
  isSubjectValid(subject: string) {
    if (!subject
      .toLowerCase()
      .match(
        /^.*\s+.*$/
      )) {
      throw new Error(`Subject invalid, subject must have a minimum space in middle`)
    }
    return subject
  }

  isContentValid(content: string) {
    if (!(content.length > 29)) {
      throw new Error(`Content invalid, content must be at least 30 letters`)
    }
    return content
  }
}