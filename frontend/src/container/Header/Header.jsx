import React from 'react'
import './Header.css'
import {images} from '../../constants'
import Blur from 'react-blur'
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'

const Header = () => {
  return (
    <Blur className="app__header" id="home" img={images.bgcake} blurRadius={35} style={{height: "100vh"}} >
      <div className="app__header-carousel">
        <div className="app__header-carousel-1">
          <img className="app__header-carousel-img" alt="pink cake" src={images.carousel01} />
          
          <div className="app__header-carousel-content">
            <h3 className="app__header-h3">Fresh Baked | Fathers Day</h3>
            <h1 className="app__header-h1">MORNING BERRY</h1>
            <p className="app__header-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, omnis odit similique dolor ab maiores quae aliquam beatae ad deleniti porro ducimus eum provident fuga quo doloremque animi impedit unde.</p>
            <button type="button" className="app__explore-button">Order</button>
            <button type="button" className="app__order-button">Explore</button>
          </div>
        </div>

        <div className="app__header-carousel-1">
          <img className="app__header-carousel-img" alt="red velvet" src={images.redVelvet} />
          
          <div className="app__header-carousel-content">
            <h3 className="app__header-h3">Fresh Baked | Fathers Day</h3>
            <h1 className="app__header-h1">RED VELVET</h1>
            <p className="app__header-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, omnis odit similique dolor ab maiores quae aliquam beatae ad deleniti porro ducimus eum provident fuga quo doloremque animi impedit unde.</p>
            <button type="button" className="app__explore-button">Order</button>
            <button type="button" className="app__order-button">Explore</button>
          </div>
        </div>

        <div className="app__header-carousel-1">
          <img className="app__header-carousel-img" alt="pink cupcake" src={images.carousel03} />
          
          <div className="app__header-carousel-content">
            <h3 className="app__header-h3">Fresh Baked | Fathers Day</h3>
            <h1 className="app__header-h1">CUP CAKES</h1>
            <p className="app__header-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, omnis odit similique dolor ab maiores quae aliquam beatae ad deleniti porro ducimus eum provident fuga quo doloremque animi impedit unde.</p>
            <button type="button" className="app__explore-button">Order</button>
            <button type="button" className="app__order-button">Explore</button>
          </div>
        </div>
      </div>

      <div className="app__Header-carousel-arrows">
          <BsArrowLeftShort className="carousel-arrow-icon"  />
          <BsArrowRightShort className="carousel-arrow-icon"  />
      </div>

    </Blur>
  )
}

export default Header