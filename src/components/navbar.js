import React, { useContext } from 'react'
import './../css/navbar.css'
import {
    Link, 
} from "react-router-dom";
import phoneContext from '../context/phoneContext';
import profileContext from '../context/userProfileContext';
import cataContext from '../context/catagoryContext';
export default function Navbar() {
    const a = useContext(phoneContext) ;
    const b = useContext(profileContext) ;
    const cata = useContext(cataContext) ;
    // const navigate = useNavigate();
    // const navigate = useNavigate() ;
    function signout(){
        a.func("" , false) ;
        b.func("") ;
        localStorage.clear() ;
    }
    async function sortit(e){
        let catagory= e.target.value ;
        cata.func(catagory) ;
        // if(e.target.value=="catagory"){
        //     navigate("/");

        // }
        // else{
        // navigate("/catagory") ;
        // }
    }
  return (
      <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary bg-nv">
              <div className="container-fluid">
                  <Link className="navbar-brand" to="/">Sia</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                          </li>
                          <select className="form-select bg-nv " defaultValue="catagory" onChange={sortit} aria-label="Default select example">
                              <option value="catagory" >catagory</option>
                              <option value="soap">soap</option>
                              <option value="shampoo">shampoo</option>
                              <option value="conditionar">conditionar</option>
                              <option value="lipbalm">lipbalm</option>
                              <option value="face cleanser">face cleanser</option>
                              <option value="face cream">face cream</option>
                              <option value="body cream">body cream</option>

                          </select>

                          {/* <li className="nav-item dropdown">
                              <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Catagories
                              </Link>
                              <ul className="dropdown-menu">
                                  <li value="soaps">Soaps</li>
                                  <li value="shampoo">Shampoo</li>
                                  <li value="conditionar">conditionar</li>
                                  <li value="lipbalm">Lipbalm</li>
                                  <li value="face cleanser">face cleanser</li>
                                  <li value="face cream">face cream</li>
                                  <li value="body cream">body cream</li>
                              </ul>

                          </li> */}


                      </ul>

                      {/* <form className="d-flex" role="search">
                          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                          <button className="btn btn-outline-primary me-2" type="submit">Search</button>
                      </form> */}
                      <Link type="button" className="btn btn-outline-primary my-2" onClick={signout} to={(a.phone.showDetails) ? "/": "/auth/login"}>{(a.phone.showDetails) ? "sign out" :"login"}</Link>
                      <Link to={(!a.phone.showDetails)?'/auth/login':'/basket'}  ><img src='./assets/add-to-basket.png' className='iconcls' alt='.'></img></Link>
                      <Link to={(!a.phone.showDetails) ? '/auth/login' : '/profile'}  ><img src='./assets/profile.png' className='iconcls' alt='.'></img></Link>
                  </div>
              </div>
          </nav>
          

          {/* new */}

          
      </>
  )
}