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
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';
import Forgetpassword from './pages/Forgetpassword';
import Phonestate from './context/phoneState';


function App() {

  return (
    
    <Phonestate>
      <Router>
        <Navbar />
        <Routes>
        <Route  path='/' element={<HomeScreen/>}/>
        <Route path='/auth/login' element={<Loginpg/>} />
        <Route path='/auth/signup' element={<SignupScreen/>} />
        <Route path='/auth/forgetpassword' element={<Forgetpassword />} />
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/basket' element={<CartPage/>}/>
        </Routes>
      </Router>
    </Phonestate>
    
  );
}
export default App;
