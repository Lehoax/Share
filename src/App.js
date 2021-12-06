import React from 'react';
import './App.css';
import {BrowserRouter as BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginOrRegister from './pages/LoginOrRegister';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterStepTwo from './pages/RegisterStepTwo';
import Discover from './pages/Discover';
import TabBar from './components/TabBar';
import Profile from "./pages/Profile"
import Search from "./pages/Search"
import Message from "./pages/Message"
import NewPicture from './pages/NewPicture/NewPicture';

var url = "http://winstagramm.herokuapp.com/"

function DisplayTabBar() {
  if (window.location.href== url || window.location.href== url+"/login" || window.location.href== url+"/register"||window.location.href== url+"/registertwo") {
    return
  }else{
    return <TabBar />
  }
  
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" exact element={<LoginOrRegister/>}/>
              <Route path="/login" exact element={<Login/>}/>
              <Route path="/register" exact element={<Register/>}/>
              <Route path="/registertwo" exact element={<RegisterStepTwo/>}/>
              <Route path="/discover" exact element={<Discover/>}/>
              <Route path="/profile" exact element={<Profile/>}/>
              <Route path="/search" exact element={<Search/>}/>
              <Route path="/message" exact element={<Message/>}/>
              <Route path="/newPicture" exact element={<NewPicture/>}/>
          </Routes>
        </BrowserRouter>
        
        {DisplayTabBar()}
    </div>
  );
}

export default App;
