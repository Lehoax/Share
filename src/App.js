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
              <Route path="https://lehoax.github.io/Share/" exact element={<LoginOrRegister/>}/>
              <Route path="https://lehoax.github.io/Share/login" exact element={<Login/>}/>
              <Route path="https://lehoax.github.io/Share/register" exact element={<Register/>}/>
              <Route path="https://lehoax.github.io/Share/registertwo" exact element={<RegisterStepTwo/>}/>
              <Route path="https://lehoax.github.io/Share/discover" exact element={<Discover/>}/>
              <Route path="https://lehoax.github.io/Share/search" exact element={<Search/>}/>
              <Route path="https://lehoax.github.io/Share/message" exact element={<Message/>}/>
              <Route path="https://lehoax.github.io/Share/profile" exact element={<Profile/>}/>
          </Routes>
        </BrowserRouter>
        {displayTabBar()}
    </div>
  );
}

export default App;
