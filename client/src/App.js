import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import CoolPage from './pages/CoolPage';
import Post from './pages/Post';
// import ErrorPage from './pages/ErrorPage';
import OnePost from './components/OnePost';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterUserPage from './pages/RegisterUserPage';
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
  const { user } = useContext(Context)
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/AboutPage" element={<AboutPage/>}/>
        <Route path="/CoolPage" element={<CoolPage/>}/>
        <Route path="/Post" element={user ? <Post/> : <RegisterUserPage/>}/>
        <Route path="/Login" element={user ? <HomePage/> : <LoginPage/>}/>
        <Route path="/Register" element={user ? <HomePage/> : <RegisterUserPage/>}/>
        {/* <Route path="*" element={<ErrorPage/>}/> */}
        <Route path="*" element={<OnePost/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
