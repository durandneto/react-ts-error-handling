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
  return (
    <div>
      <h1>Playground!</h1>
      <p>React, Typescript, Error Handling</p>
      <ErrorBoundaries>
        <React.Suspense fallback={UserLoadingComponent({ code: 12 })}>
          <UserComponent />
        </React.Suspense>
      </ErrorBoundaries>

      <Dynamic
        DynamicComponent={DynamicComponent}
        data={{
          src: 'https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-760x400.webp',
        }}
      />
      <Dynamic
        DynamicComponent={DynamicComponent}
        data={{
          src: 'https://media.istockphoto.com/id/183276247/photo/parliament-hill-ottawa-canada.jpg?s=612x612&w=0&k=20&c=oORcwvrlFG_GwvRHELWhaXyREex8ouEl_ZSFNBVQtpk=',
        }}
      />
      <Dynamic
        DynamicComponent={DynamicComponent}
        data={{
          src: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg',
        }}
      />
    </div>
  );
}
