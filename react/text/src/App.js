import React from 'react';
import './App.css';
import RootRouter from './router/index';
import routes from './router/routerConfig';
function App() {
  return (
 
    <RootRouter routes={routes} />
 
  );
}

export default App;
