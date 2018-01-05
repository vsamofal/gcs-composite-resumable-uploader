/** @flow */

export default class AbstractError extends Error {
  message: string;
  constructor(message: string) {
    super();
    this.message = message;
  }

  toString(): string {
    return `${typeof this}: ${this.message}`;
  }
}

export class NoSuchElementException extends AbstractError {
  constructor(message: string) {
    super(message);
  }
}
