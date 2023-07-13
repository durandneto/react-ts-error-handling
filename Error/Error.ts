import { ErrorInterface } from '../Types/Error';
export default class GenericErrorType extends Error {
  data: ErrorInterface;
  constructor(error: ErrorInterface) {
    super(error.message);
    this.data = error;

    Object.setPrototypeOf(this, GenericErrorType.prototype);
  }

  getMessage() {
    return this.data.message;
  }

  getCode() {
    return this.data.code;
  }
}
