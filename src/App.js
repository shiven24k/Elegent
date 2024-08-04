import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupSignin from './components/SignupSignin/SignupSignin';
import Home from './components/Home/Home';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupSignin/> } />
          <Route path="/home" element={<Home/> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
