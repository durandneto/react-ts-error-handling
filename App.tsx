import * as React from 'react';
const ImageComponent = React.lazy(() => import('./Components/Image/Index'));
const UserComponent = React.lazy(() => import('./Components/User/Index'));
import UserLoadingComponent from './Components/User/UserLoadingComponent';
import { AppErrorType } from './Error/AppError';
import ErrorBoundaries from './Components/ErrorBoundaries';
import './style.css';
import UseComponent from './Hooks/UseComponent';
import DynamicComponentText from './Components/Dynamic/DynamicComponentText';
// import { Dynamic } from './Components/Dynamic';
const DynamicComponent = React.lazy(() =>
  import('./Components/Dynamic/DynamicComponent')
);
const Dynamic = React.lazy(() => import('./Components/Dynamic'));

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
  const [counter, setCounter] = React.useState<number>(0);

  return (
    <div>
      <h1>Playground!</h1>
      <p>React, Typescript, Error Handling</p>

      <button onClick={() => setCounter(counter + 1)}>
        increment {counter}
      </button>
      <ErrorBoundaries>
        <React.Suspense fallback={UserLoadingComponent({ code: 12 })}>
          <UserComponent />
        </React.Suspense>
      </ErrorBoundaries>

      {/* <Dynamic
        DynamicComponent={DynamicComponent}
        data={{
          src: 'https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-760x400.webp',
        }}
      /> */}
      <UseComponent
        textProps={counter === 0 ? textA : counter === 1 ? textB : textC}
      />
    </div>
  );
}
