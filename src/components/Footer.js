import React from 'react'
import { Link } from 'react-router-dom'
import './../css/footer.css' ;
export default function Footer() {
  return (
    <>
    
          <div className="section footer-classNameic context-dark bg-footer text-white" >
              <div className="space" ></div>
              <div className="container">
                  <div className="row row-30">
                      <div className="col-md-4 col-xl-5">
                          <div className="pr-xl-4">
                              <p>And you look beautiful without it,</p><p>but i want you to feel just as beautiful as I see you.</p>
                              {/* <!-- Rights--> */}
                              {/* <p className="rights"><span>©  </span><span className="copyright-year">2018</span><span> </span><span>Waves</span><span>. </span><span>All Rights Reserved.</span></p> */}
                          </div>
                      </div>
                      <div className="col-md-4">
                          <h5>Contacts</h5>
                          <dl className="contact-list ">
                              <dt>Address:</dt>
                              <dd>257,Hi-Link Extension ,Chota Bangarda,Indore(M.P.),452005</dd>
                          </dl>
                          <dl className="contact-list">
                              <dt>E-mail:</dt>
                              <Link className='nav-link'>siasoaps@gmail.com</Link>

                          </dl>
                          <dl className="contact-list ">
                              <dt>Technical support:</dt>
                              <Link className='nav-link'>siacosmatics.tech@gmail.com</Link>
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
                  <div className="col"><a className="social-inner" href="https://www.instagram.com/sia__cosmetics__/?next=%2Fsia_world_2305%2F"><span className="icon mdi mdi-instagram"></span><span>instagram</span></a></div>
                  <div className="col"><a className="social-inner" href="https://forms.gle/d1cQjUqZM5PyYQfR6"><span className="icon mdi mdi-google"></span><span>Google Form For UPI</span></a></div>

              </center>
          </div>
    </>
  )
}
