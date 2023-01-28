import React from 'react'
import './Bytes.css'
import {images} from '../../constants'
import {motion} from 'framer-motion'

const Bytes = () => {
  return (
    <div className="app__Bytes">
      <div className="app__Bytes-header">
        <h1 className="app__Bytes-h1">BYTES</h1>
        <a href="#" className="app__Bytes-link">View More</a>
      </div>

      <div className="app__Bytes-items">
        <motion.div 
          className="app__Bytes-cake"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          < img className="app__Bytes-img" src={images.loffelBiscuit} alt ="loffel biscuit" />
          <p className="app__Bytes-p1">Loffel Biscuit</p>
          <h3 className="app__Bytes-h3">RM25</h3>
        </motion.div>

        <motion.div 
          className="app__Bytes-cake"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          < img className="app__Bytes-img" src={images.unicornMeringues} alt ="unicorn meringues" />
          <p className="app__Bytes-p1">Unicorn Meringues</p>
          <h3 className="app__Bytes-h3">RM20</h3>
        </motion.div>

        <motion.div 
          className="app__Bytes-cake"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          < img className="app__Bytes-img" src={images.raspBerryMackerons} alt ="raspberry mackerons" />
          <p className="app__Bytes-p1">RaspBerry Mackerons</p>
          <h3 className="app__Bytes-h3">RM720</h3>
        </motion.div>

        <motion.div 
          className="app__Bytes-cake"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          < img className="app__Bytes-img" src={images.pinkVelvet} alt ="red heaven" />
          <p className="app__Bytes-p1">Red Heaven</p>
          <h3 className="app__Bytes-h3">RM420</h3>
        </motion.div>

        <motion.div 
          className="app__Bytes-cake"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          < img className="app__Bytes-img" src={images.vanillaFunfetti} alt ="vailla" />
          <p className="app__Bytes-p1">Vanilla Funfetti</p>
          <h3 className="app__Bytes-h3">RM10 | 3pcs</h3>
        </motion.div>
      </div>
    </div>
  )
}

export default Bytes