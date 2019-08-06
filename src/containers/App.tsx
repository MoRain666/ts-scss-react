import * as React from 'react';
import { hot } from 'react-hot-loader';
import '../assets/scss/App.scss';

const AppComp = () => {
  return <div className='app'>123</div>;
};

declare let module: object;

export const App = hot(module)(AppComp);
