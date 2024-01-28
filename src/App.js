import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Notfoundpage from './components/Notfoundpage/Notfoundpage';
import { Routes, Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';


function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/' element={<Profile />} /> 
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/users/*' element={<UsersContainer />} />
            {/* <Route path='*' element={<Notfoundpage />} /> */}
          </Routes>
        </div>
      </div>
  );
}
  
export default App;
