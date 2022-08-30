import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import CoolPage from './pages/CoolPage';
import Post from './pages/Post';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterUserPage from './pages/RegisterUserPage';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/AboutPage" element={<AboutPage/>}/>
        <Route path="/CoolPage" element={<CoolPage/>}/>
        <Route path="/Post" element={<Post/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Register" element={<RegisterUserPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;