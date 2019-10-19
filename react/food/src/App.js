import React from 'react';
import RootRouter from './router/index'
import './App.css';
import routes from './router/routerconfig';
import {Provider} from 'react-redux'
import store from './store/index'
function App() {
  return (
    <Provider 
    store={store}>
       <RootRouter routes={routes}/>
    </Provider>
  );
}

export default App;
