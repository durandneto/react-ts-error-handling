import GenericErrorType from './Error';
import { ErrorInterface } from '../Types/Error';
export class ImageErrorType extends GenericErrorType {
  constructor(error: ErrorInterface) {
    super(error);
    Object.setPrototypeOf(this, ImageErrorType.prototype);
  }
}
