import * as React from 'react';
import UserErrorComponent from '../Components/User/UserErrorComponent';
import { AppErrorType, AppErrorComponent } from '../Error/AppError';

import { ImageErrorType } from '../Error/ImageError';
import { UserErrorType } from '../Error/UsetError';
import { ImageErrorComponent } from './Image/Error';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
  error: AppErrorType | ImageErrorType;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    //   // You can also log the error to an error reporting service
    //   // logErrorToMyService(error, errorInfo);
    // console.log(error, { errorInfo });
  }

  render() {
    console.log(this.state.error);
    if (this.state.hasError) {
      //   // console.log(this.state.error instanceof AppError);
      switch (true) {
        case this.state.error instanceof AppErrorType: {
          return <AppErrorComponent {...this.state.error.data} />;
        }
        case this.state.error instanceof ImageErrorType: {
          return <ImageErrorComponent {...this.state.error.data} />;
        }
        case this.state.error instanceof UserErrorType: {
          return <UserErrorComponent {...this.state.error.data} />;
        }
        default: {
          return <h1>Something went wrong here.</h1>;
        }
      }
      //   // You can render any custom fallback UI
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
