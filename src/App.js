import Navbar from './components/navbar';
import HomeScreen from './pages/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Loginpg from './pages/loginpg';
import SignupScreen from './pages/SignupScreen';
import './custom.css';


function App() {
  return (
    
      
      <Router>
        <Navbar />
        <Routes>
        <Route  path='/' element={<HomeScreen/>}/>
        <Route path='/auth/login' element={<Loginpg/>} />
        <Route path='/auth/signup' element={<SignupScreen/>} />
        </Routes>
      </Router>
    
  );
}

export default App;
