import React from 'react'
import { Link } from 'react-router-dom'
import './../css/footer.css' ;
export default function Footer() {
  return (
    <>
          <div className="section footer-classNameic context-dark bg-footer text-white" >
              <div className="container">
                  <div className="row row-30">
                      <div className="col-md-4 col-xl-5">
                          <div className="pr-xl-4">
                              <p>We are an award-winning creative agency, dedicated to the best result in web design, promotion, business consulting, and marketing.</p>
                              {/* <!-- Rights--> */}
                              <p className="rights"><span>©  </span><span className="copyright-year">2018</span><span> </span><span>Waves</span><span>. </span><span>All Rights Reserved.</span></p>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <h5>Contacts</h5>
                          <dl className="contact-list ">
                              <dt>Address:</dt>
                              <dd>257,Hi-Link Extension ,Chota Bangarda,Indore(M.P.),452005</dd>
                          </dl>
                          <dl className="contact-list ">
                              <dt>email:</dt>
                              <Link className='nav-link'>kakshat35@gmail.com</Link>
                          </dl>
                          <dl className="contact-list">
                              <dt>phones:</dt>
                              <Link className='nav-link'>kakshat35@gmail.com</Link>
                              
                          </dl>
                          {/* <div className="contact-list">
                              <dt>Instagram:</dt>
                              <Link className=' nav-link text-white'>Sia.Soaps</Link>
                          </div> */}
                      </div>
                      <div className="col-md-4 col-xl-3">
                          <h5>Links</h5>
                          <ul className="nav-list text-white">
                              <li><Link className='nav-link' href="#">About</Link></li>
                              <li><Link className='nav-link' href="#">Projects</Link></li>
                              <li><Link className='nav-link' href="#">Blog</Link></li>
                              <li><Link className='nav-link' href="#">Contacts</Link></li>
                              <li><Link className='nav-link' href="#">Pricing</Link></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <center className="row no-gutters social-container ">
                  <div class="col"><Link class="social-inner" href="#"><span class="icon mdi mdi-instagram"></span><span>instagram</span></Link></div>
                  <div class="col"><Link class="social-inner" href="#"><span class="icon mdi mdi-google"></span><span>Google Form For UPI</span></Link></div>

              </center>
          </div>
    </>
  )
}
