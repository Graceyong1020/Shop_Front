import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Admin from './pages/admin/Admin';
import Profile from './pages/profile/Profile';
import NotFound from './pages/not-found/NotFound';
import UnAuthorized from './pages/unauthorized/Unauthorized';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/admin' element={<Admin />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/404' element={<NotFound />}></Route>
            <Route path='/401' element={<UnAuthorized />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;