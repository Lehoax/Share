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
          <Routes>
              <Route  basename={process.env.PUBLIC_URL} path="/" exact element={<LoginOrRegister/>}/>
              <Route  basename={process.env.PUBLIC_URL} path="/login" exact element={<Login/>}/>
              <Route  basename={process.env.PUBLIC_URL} path="/register" exact element={<Register/>}/>
              <Route  basename={process.env.PUBLIC_URL} path="/registertwo" exact element={<RegisterStepTwo/>}/>
              <Route  basename={process.env.PUBLIC_URL} path="/discover" exact element={<Discover/>}/>
              <Route  basename={process.env.PUBLIC_URL} path="/search" exact element={<Search/>}/>
              <Route  basename={process.env.PUBLIC_URL} path="/message" exact element={<Message/>}/>
              <Route  basename={process.env.PUBLIC_URL} path="/profile" exact element={<Profile/>}/>
          </Routes>
        </BrowserRouter>
        {displayTabBar()}
    </div>
  );
}

export default App;
