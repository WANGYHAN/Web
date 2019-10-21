import React from 'react';
import RootRouter from './routes/index';
import routes from './routes/routerConfig';
import './App.css';


function App() {
  return (
   <RootRouter routes={routes}/>
  );
}

export default App;
