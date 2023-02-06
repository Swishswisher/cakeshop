import React from 'react'
import {images} from '../../constants'
import {motion} from 'framer-motion'
import './FathersDay.css'

const FathersDay = () => {
  return (
    <div className="app__FathersDay" id="fathersday">
      <div className="app__FathersDay-find-location">
        <input type="text" className="app__FathersDay-input"></input>
        <button type="button" className="app__FathersDay-button">Find Location</button>
      </div>

      <div className="app__FathersDay-items">
        <h1 className="app__FathersDay-h1">FATHERS DAY SPECIAL</h1>

        <div className="app__FathersDay-cakes">
          <motion.div 
            className="app__FathersDay-single-cake"
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: "tween"}}
          >
            <img className="app__FathersDay-img" src={images.carousel01} alt="morning cake" />
            <p className="app__FathersDay-main-p">Morning Berry</p> 
            <p className="app__FathersDay-sub-p">Was: RM120</p>              
            <p className="app__FathersDay-h2">RM6</p>
          </motion.div>
          <motion.div 
            className="app__FathersDay-single-cake"
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: "tween"}}
          >
            <img className="app__FathersDay-img" src={images.caramelSplash} alt="caramel splash cake" />
            <p className="app__FathersDay-main-p">Caramel Splash</p>
            <p className="app__FathersDay-sub-p">Was: RM240</p>
            <p className="app__FathersDay-h2">RM1</p>
          </motion.div>
          <motion.div
            className="app__FathersDay-single-cake"
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: "tween"}}
          >
            <img className="app__FathersDay-img" src={images.dolphinBiscuit} alt="dolphin biscuit cake" />
            <p className="app__FathersDay-main-p">Dolphin Biscuit</p>
            <p className="app__FathersDay-sub-p">Was: RM120</p>
            <p className="app__FathersDay-h2">RM1</p>
          </motion.div>  
          <motion.div 
            className="app__FathersDay-single-cake"
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: "tween"}}
          >
            <img className="app__FathersDay-img" src={images.pinkVelvet} alt="pink velvet cake" />
            <p className="app__FathersDay-main-p">Pink Velvet</p>
            <p className="app__FathersDay-sub-p">Was: RM120</p>
            <p className="app__FathersDay-h2">RM1</p>
          </motion.div>
          <motion.div 
            className="app__FathersDay-single-cake"
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: "tween"}}
          >
            <img className="app__FathersDay-img" src={images.whiteOcean} alt="white ocean cake" />
            <p className="app__FathersDay-main-p">White Ocean</p>
            <p className="app__FathersDay-sub-p">Was: RM120</p>
            <p className="app__FathersDay-h2">RM1</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FathersDay