import React from 'react';

import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'

import type { RootState, AppDispatch } from './store/store'

import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers/Routes';

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
  
}

export default App;
