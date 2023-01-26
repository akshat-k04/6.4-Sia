import React, { useContext } from 'react'
import './../css/navbar.css'
import {
    Link, useNavigate
} from "react-router-dom";
import phoneContext from '../context/phoneContext';
import profileContext from '../context/userProfileContext';
import cataContext from '../context/catagoryContext';
export default function Navbar() {
    const a = useContext(phoneContext) ;
    const b = useContext(profileContext) ;
    const cata = useContext(cataContext) ;
    const navigate = useNavigate();
    function signout(){
        a.func("" , false) ;
        b.func("") ;
        localStorage.clear() ;
    }
    async function sortit(e){
        let catagory= e.target.value ;
        // console.log(e.target.value);
        cata.func(catagory) ;
    }
    function gohome(){
        cata.func('catagory') ;
        document.getElementsByClassName("form-select bg-nv text-white")[0].value = "catagory" ;
        navigate("/") ;
    }
    
  return (
      <>
          <nav className="navbar navbar-expand-lg  bg-body-tertiary bg-nv">
              <div className="container-fluid">
                  <Link className="navbar-brand  text-white" onClick={gohome}>Sia</Link>
                  <button className="navbar-toggler icon-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon "></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      </ul>

                      
                      <ul className="navbar-nav  mb-2 mb-lg-0">
                          <li className="nav-item">
                              <Link className="nav-link active text-white" aria-current="page" to={"/"}>Home</Link>
                          </li>
                          <li className="nav-item dropdown">
                              <Link className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Catagories
                              </Link>
                              <ul className="dropdown-menu">
                                  <option onClick={sortit} value="catagory">All</option>
                                  <option onClick={sortit} value="soap">Soap</option>
                                  <option onClick={sortit} value="shampoo">Shampoo</option>
                                  <option onClick={sortit} value="conditionar">conditionar</option>
                                  <option onClick={sortit} value="lipbalm">Lipbalm</option>
                                  <option onClick={sortit} value="face cleanser">face cleanser</option>
                                  <option onClick={sortit} value="face cream">face cream</option>
                                  <option onClick={sortit} value="body cream">body cream</option>
                              </ul>
                          </li>
                          
                      <li className="nav-item">
                          <Link to={(!a.phone.showDetails) ? '/auth/login' : '/basket'} className="nav-link active  text-white"   >Basket</Link>
                      </li>
                      <li className="nav-item">
                          <Link to={(!a.phone.showDetails) ? '/auth/login' : '/profile'} className="nav-link active  text-white"  >Profile</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link active  text-white" onClick={signout} to={(a.phone.showDetails) ? "/" : "/auth/login"}>{(a.phone.showDetails) ? "sign out" : "login"}</Link>
                      </li>
                      </ul>

                  </div>
              </div>
          </nav>
          

          {/* new */}

          
      </>
  )


}