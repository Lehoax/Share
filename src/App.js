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
          </Routes>
        </BrowserRouter>
        <TabBar />
    </div>
  );
}

export default App;
