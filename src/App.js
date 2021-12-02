import React from 'react';
import './App.css';
import {BrowserRouter as BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginOrRegister from './pages/LoginOrRegister';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterStepTwo from './pages/RegisterStepTwo';
import Discover from './pages/Discover';
import TabBar from './components/TabBar';
import Search from './pages/Search';
import Message from './pages/Message';
import Profile from './pages/Profile';

function displayTabBar() {
    if (document.location.href == "http://localhost:3000/" || document.location.href == "http://localhost:3000/login" || document.location.href == "http://localhost:3000/register" || document.location.href == "http://localhost:3000/registertwo") {
      return
    }else{
      return <TabBar />
    }
}

function App() {
  console.log(document.location.href);
  return (
    <div className="App">
      <BrowserRouter>
          <Routes basename={process.env.PUBLIC_URL}>
              <Route path="/" exact element={<LoginOrRegister/>}/>
              <Route path="/login" exact element={<Login/>}/>
              <Route path="/register" exact element={<Register/>}/>
              <Route path="/registertwo" exact element={<RegisterStepTwo/>}/>
              <Route path="/discover" exact element={<Discover/>}/>
              <Route path="/search" exact element={<Search/>}/>
              <Route path="/message" exact element={<Message/>}/>
              <Route path="/profile" exact element={<Profile/>}/>
          </Routes>
        </BrowserRouter>
        {displayTabBar()}
    </div>
  );
}

export default App;
