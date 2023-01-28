import React from 'react'
import {BsTwitter, BsInstagram, BsYoutube} from 'react-icons/bs'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import './Footer.css'
import {images} from '../../constants'

const Footer = () => {
  return (
    <div className="app__Footer">
      <div className="app__Footer-header">
        <div className="app__Footer-header-div">
          <h2 className="app__Footer-h2">
            <svg xmlns="http://www.w3.org/2000/svg" width="30.026" height="28.76" viewBox="0 0 30.026 28.76">
              <path id="Path_2" data-name="Path 2" d="M28.761,15.487a3.194,3.194,0,0,0-4.956.524l-.934,1.341V10.247C22.871,4.6,18.925,0,14.075,0s-8.8,4.6-8.8,10.247V23.663a3.979,3.979,0,0,0-2.639-1.051A2.885,2.885,0,0,0,0,25.686,2.885,2.885,0,0,0,2.639,28.76H23.871l5.341-7.5A4.585,4.585,0,0,0,28.761,15.487ZM2.639,26.711a1.037,1.037,0,0,1,0-2.049,2.705,2.705,0,0,1,2.489,2.049Z" fill="#fdffd5"/>
            </svg>
            Zeecraft.
          </h2>
          <p className="app__Footer-p">Renault Building, Lot 1A, <br />Jalan Kemajuan, Seksyen 13, <br />46200, Petaling Jaya,<br />Malaysia.</p>
        </div>

        <div className="app__Footer-header-div">
          <h2 className="app__Footer-h3">Zeecraft</h2>

          <div className="app__Footer-links-div">
            <div className="app__Footer-links-div-1">
              <ul className="app__Footer-ul">
                <a href='#' className="app__Footer-a" ><li className="app__Footer-li">About</li></a>
                <a href='#' className="app__Footer-a"><li className="app__Footer-li">Blog</li></a>
                <a href='#' className="app__Footer-a"><li className="app__Footer-li">FAQ</li></a>
                <a href='#' className="app__Footer-a"><li className="app__Footer-li">Contact</li></a>
              </ul>
            </div>

            <div className="app__Footer-links-div-2">
              <ul className="app__Footer-ul">
                <a href='#' className="app__Footer-a"><li className="app__Footer-li">Shop</li></a>
                <a href='#' className="app__Footer-a"><li className="app__Footer-li">Merchandising</li></a>
                <a href='#' className="app__Footer-a"><li className="app__Footer-li">Delivery Information</li></a>
                <a href='#' className="app__Footer-a"><li className="app__Footer-li">Bakers Center</li></a>
              </ul>
            </div>
          </div>
        </div>

        <div className="app__Footer-header-div">
          <h1 className="app__Footer-h1">STAY TUNED.</h1>
          <p className="app__Footer-p">Do you want to get Promo Codes & New updates directly to your email?</p>
          
          <div className="app__Footer-stay-tuned-div">
            <input type="text" className="app__Footer-input" placeholder='Name' id="input-1"></input>
            <input type="text" className="app__Footer-input" placeholder='Email' ></input>
          </div>
          
          <div className="app__Footer-stay-tuned-div">
            <button type="button" className="app__Footer-btn">SUBMIT</button>

            <div className="app__Footer-icons">
              <FaFacebookF className="app__Footer-social" style={{cursor: 'pointer', marginRight: '15px', }} />
              <BsInstagram className="app__Footer-social" style={{cursor: 'pointer', marginRight: '10px', }} />
              <BsTwitter className="app__Footer-social" style={{cursor: 'pointer', marginRight: '10px', }} />
              <FaLinkedinIn className="app__Footer-social" style={{cursor: 'pointer', marginRight: '10px', }} />
              <BsYoutube className="app__Footer-social" style={{cursor: 'pointer', marginRight: '10px', }} />
            </div>
          </div>
        </div>
      </div>

      <div className="app__Footer-footer">
        <p className="app__Footer-footer-p">All rights reserved David Ngima | 2023</p>
        <p className="app__Footer-footer-p">Term of Services   •   Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer