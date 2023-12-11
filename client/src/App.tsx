import {Routes, Route} from 'react-router-dom';

import Layout from './pages/Layout/Layout';
import Main from './pages/Main/Main';
import News from './pages/News/News';

import './App.sass';


function App() {
  return (
    <Routes>
        <Route path = '/' element = {<Layout/>} >
            <Route index element= {<Main/>}></Route>
            <Route path = '/news' element = {<News/>}></Route>
        </Route>
    </Routes>
  );
}

export default App;
