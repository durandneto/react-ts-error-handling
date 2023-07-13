import * as React from 'react';
const ImageComponent = React.lazy(() => import('./Components/Image/Index'));
const UserComponent = React.lazy(() => import('./Components/User/Index'));
import UserLoadingComponent from './Components/User/UserLoadingComponent';
import { AppErrorType } from './Error/AppError';
import ErrorBoundaries from './Components/ErrorBoundaries';
import './style.css';
import UseComponent from './Hooks/UseComponent';

const textA = 'aab';
const textB = 'abb';
const textC = 'acc';

const obj = [
  {
    id: 1,
    name: 'Jose',
  },
  {
    id: 2,
    name: 'Hari',
  },
];

export default function App() {
  return (
    <div>
      <h1>Playground!</h1>
      <p>React, Typescript, Error Handling</p>
      <ErrorBoundaries>
        <React.Suspense fallback={UserLoadingComponent({ code: 12 })}>
          <UserComponent />
        </React.Suspense>
      </ErrorBoundaries>
      <UserComponent error />
    </div>
  );
}
