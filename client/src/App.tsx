import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Layout from './pages/Layout/Layout';

import './App.sass';


function App() {
  return (
    <Routes>
        <Route path = '/' element = {<Layout/>} >
            <Route index></Route>
        </Route>
    </Routes>
  );
}

export default App;
