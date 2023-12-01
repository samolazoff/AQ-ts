import {Routes, Route} from 'react-router-dom';

import Layout from './pages/Layout/Layout';
import Main from './pages/Main/Main';

import './App.sass';


function App() {
  return (
    <Routes>
        <Route path = '/' element = {<Layout/>} >
            <Route index element= {<Main/>}></Route>
        </Route>
    </Routes>
  );
}

export default App;
