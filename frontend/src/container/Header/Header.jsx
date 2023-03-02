import React from 'react'
import './Header.css'
import {images} from '../../constants'
import Blur from 'react-blur'
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'

const Header = () => {

  const cards = [
    {
      id: 1,
      img: images.carousel01,
      alt: "pink cake",
      heading3: "Fresh Baked | Fathers Day",
      cakeName: "MORNING BERRY",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestiae accusamus libero veniam eveniet, iste dignissimos aliquid expedita, voluptates itaque nisi harum doloribus cum, corrupti ut iure rerum ipsa nobis."
    },
    {
      id: 2,
      img: images.redVelvet,
      alt: "red velvet",
      heading3: "Fresh Baked | Fathers Day",
      cakeName: "RED VELVET",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestiae accusamus libero veniam eveniet, iste dignissimos aliquid expedita, voluptates itaque nisi harum doloribus cum, corrupti ut iure rerum ipsa nobis."
    },
    {
      id: 3,
      img: images.carousel03,
      alt: "pink cupcakes",
      heading3: "Fresh Baked | Fathers Day",
      cakeName: "CUP CAKES",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque molestiae accusamus libero veniam eveniet, iste dignissimos aliquid expedita, voluptates itaque nisi harum doloribus cum, corrupti ut iure rerum ipsa nobis."
    }
  ]

  const slideLeft = () => {
    var slider = document.getElementById("slider")
    slider.scrollLeft += 250
  }

  const slideRight = ()=> {
    var slider = document.getElementById("slider")
    slider.scrollLeft -= 250
  }

  return (
    <Blur className="app__header" id="home" img={images.bgcake} blurRadius={35} style={{height: "100vh"}} >
      <div className="app__header-carousel" id="slider">

        {cards.map((cards, index) => (
          <div className="app__header-carousel-1" key={cards.id}>
            <img className="app__header-carousel-img" alt={cards.alt} src={cards.img} />
      
            <div className="app__header-carousel-content">
              <h3 className="app__header-h3">{cards.heading3}</h3>
              <h1 className="app__header-h1">{cards.cakeName}</h1>
              <p className="app__header-p">{cards.text}</p>
              <button type="button" className="app__explore-button">Order</button>
              <button type="button" className="app__order-button">Explore</button>
            </div>
          </div>
        ))}
      </div>
      <div className="app__Header-carousel-arrows">
          <BsArrowLeftShort className="carousel-arrow-icon" onClick={slideLeft} />
          <BsArrowRightShort className="carousel-arrow-icon" onClick={slideRight} />
      </div>    
    </Blur>
  )
}

export default Header