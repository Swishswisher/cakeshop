import React from 'react'
import './Recent.css'
import {images} from '../../constants'
import {motion} from 'framer-motion'

const Recent = () => {
  return (
    <div className="app__Recent">
      <div className="app__Recent-header">
        <h1 className="app__Recent-h1">RECENT</h1>
        <a href="#" className="app__Recent-link">View More</a>
      </div>

      <div className="app__Recent-items">
        <motion.div 
          className="app__Recent-cake"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          < img className="app__Recent-img" src={images.flowerPower} alt ="flower power" />
          <p className="app__Recent-p1">Flower Power</p>
          <h3 className="app__Recent-h3">RM340</h3>
        </motion.div>

        <motion.div 
          className="app__Recent-cake"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          < img className="app__Recent-img" src={images.blueBubble} alt ="blue bubble" />
          <p className="app__Recent-p1">Blue Bubble</p>
          <h3 className="app__Recent-h3">RM320</h3>
        </motion.div>

        <motion.div 
          className="app__Recent-cake"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          < img className="app__Recent-img" src={images.cocoFlower} alt ="coco flower" />
          <p className="app__Recent-p1">Coco Flower</p>
          <h3 className="app__Recent-h3">RM720</h3>
        </motion.div>

        <motion.div 
          className="app__Recent-cake"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          < img className="app__Recent-img" src={images.sparklyPatsel} alt ="sparkly patsel" />
          <p className="app__Recent-p1">Sparkly Patsel</p>
          <h3 className="app__Recent-h3">RM420</h3>
        </motion.div>

        <motion.div 
          className="app__Recent-cake"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          < img className="app__Recent-img" src={images.neonTopper} alt ="neon topper" />
          <p className="app__Recent-p1">Neon Topper</p>
          <h3 className="app__Recent-h3">RM110</h3>
        </motion.div>
      </div>
    </div>
  )
}

export default Recent