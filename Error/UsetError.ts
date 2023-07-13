import GenericErrorType from './Error';
import { ErrorInterface } from '../Types/Error';
export class UserErrorType extends GenericErrorType {
  constructor(error: ErrorInterface) {
    super(error);
    Object.setPrototypeOf(this, UserErrorType.prototype);
  }
}
