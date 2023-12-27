import {Routes, Route} from 'react-router-dom';

import Layout from './pages/Layout/Layout';
import Main from './pages/Main/Main';
import News from './pages/News/News';
import ContactsPage from './pages/Contacts/ContactsPage';
import Services from './pages/Services/Services';
import Permissions from './pages/Permissions/Permissions';
import Reviews from './pages/Reviews/Reviews';

import './App.sass';


function App() {
  return (
    <Routes>
        <Route path = '/' element = {<Layout/>} >
            <Route index element= {<Main/>}></Route>
            <Route path = '/news' element = {<News/>}></Route>
            <Route path = '/contacts' element = {<ContactsPage/>}></Route>
            <Route path = '/services' element = {<Services/>}></Route>
            <Route path = '/permissions' element = {<Permissions/>}></Route>
            <Route path='/reviews' element= {<Reviews/>}></Route>
        </Route>
    </Routes>
  );
}

export default App;
