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
import ProfileState from './context/userProfileState';
import ProductInfo from './pages/ProductInfo';
import Itemstate from './context/itemState';
import OrderSummery from './pages/OrderSummery';
import SuccessPage from './pages/successPage';
import AwaitPage from './pages/AwaitPage';
import Catastate from './context/catagoryState';
// import Catagory from './pages/catagory';


function App() {

  
  return (
    <Catastate>
    <Phonestate>
      <Itemstate>
      <ProfileState>
      <Router>
        <Navbar />
        <Routes>
        <Route  path='/' element={<HomeScreen/>}/>
        <Route path='/auth/login' element={<Loginpg/>} />
        <Route path='/auth/signup' element={<SignupScreen/>} />
        <Route path='/auth/forgetpassword' element={<Forgetpassword />} />
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/basket' element={<CartPage/>}/>
        <Route path='/orderSummery' element={<OrderSummery />} />
        <Route path='/productInfo' element={<ProductInfo />} />
        <Route path='/successPage' element={<SuccessPage />} />
        <Route path='/await' element={<AwaitPage />} />
        {/* <Route path='/catagory' element={<Catagory />} /> */}

        </Routes>
      </Router>
      </ProfileState>
      </Itemstate>
    </Phonestate>
    </Catastate>
  );
}
export default App;
