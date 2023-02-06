import React from 'react'
import './Popular.css'
import {images} from '../../constants'
import {motion} from 'framer-motion'

// const items = [
//   {
//     img: 'images.neonTopper',
//     title: "Neon Cake Topper",
//     price: "RM340"
//   },
//   {
//     img: 'images.blueBubble',
//     title: "Blue Bubble",
//     price: "RM220"
//   },
//   {
//     img: 'images.cocoFlower',
//     title: "Coco Flower",
//     price: "RM720"
//   },
//   {
//     img: 'images.unicornValley',
//     title: "Unicorn Valley",
//     price: "RM420"
//   },
//   {
//     img: 'images.simba',
//     title: "Simba",
//     price: "RM110"
//   },
//   {
//     img: 'images.hellMountain',
//     title: "Hell Mountain",
//     price: "RM120"
//   },
//   {
//     img: 'images.apricotCloud',
//     title: "Apricot Cloud",
//     price: "RM120"
//   },
//   {
//     img: 'images.greenRainbow',
//     title: "Green Rainbow",
//     price: "RM120"
//   },
//   {
//     img: 'images.unicornCity',
//     title: "Unicorn City",
//     price: "RM120"
//   },
//   {
//     img: 'images.vanillaFunfetti',
//     title: "Hell Mountain",
//     price: "RM340"
//   }
// ]

const Popular = () => {
  return (
    <div className="app__Popular" id="popular">
      <div className="app__Popular-header">
        <div className="app__Popular-header-1">
          <h1 className="app__Popular-h1">POPULAR</h1>
          <a className="app__Popular-link" href="#"><p>View More</p></a>
        </div>

        <div className="app__Popular-header-2">
          <p className="app__Popular-p-1">Sort by: </p>

          <select className="app__Popular-options" name="delivery days" id="delivery-days">
            <option value="1 Day Delivery">1 Day Delivery</option>
            <option value="Specific Day Delivery">Speccific Day Delivery</option>
            <option value="Immediate Delivery">Immediate</option>
          </select>
        </div> 
      </div>

      <div className="app__Popular-items">
        <motion.div 
          className="app__Popular-items-single-cake"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          <img className="app__Popular-items-img" src={images.neonTopper} alt="neon topper" />
          <p className="app__Popular-p-2">Neon Topper</p>
          <p className="app__Popular-p-3">RM340</p>
        </motion.div>

        <motion.div 
          className="app__Popular-items-single-cake"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          <img className="app__Popular-items-img" src={images.blueBubble} alt="Blue Bubble" />
          <p className="app__Popular-p-2">Blue Bubble</p>
          <p className="app__Popular-p-3">RM220</p>
        </motion.div>

        <motion.div 
          className="app__Popular-items-single-cake"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          <img className="app__Popular-items-img" src={images.cocoFlower} alt="coco flower" />
          <p className="app__Popular-p-2">Coco Flower</p>
          <p className="app__Popular-p-3">RM720</p>
        </motion.div>

        <motion.div 
          className="app__Popular-items-single-cake"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          <img className="app__Popular-items-img" src={images.unicornValley} alt="unicorn valley" />
          <p className="app__Popular-p-2">Unicorn Valley</p>
          <p className="app__Popular-p-3">RM340</p>
        </motion.div>

        <motion.div 
          className="app__Popular-items-single-cake"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          <img className="app__Popular-items-img" src={images.simba} alt="simba" />
          <p className="app__Popular-p-2">Simba</p>
          <p className="app__Popular-p-3">RM110</p>
        </motion.div>

        <motion.div 
          className="app__Popular-items-single-cake"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          <img className="app__Popular-items-img" src={images.hellMountain} alt="hell mountain" />
          <p className="app__Popular-p-2">Hell Mountain</p>
          <p className="app__Popular-p-3">RM120</p>
        </motion.div>

        <motion.div 
          className="app__Popular-items-single-cake"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          <img className="app__Popular-items-img" src={images.apricotCloud} alt="apricot cloud" />
          <p className="app__Popular-p-2">Apricot Cloud</p>
          <p className="app__Popular-p-3">RM120</p>
        </motion.div>

        <motion.div 
          className="app__Popular-items-single-cake"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          <img className="app__Popular-items-img" src={images.greenRainbow} alt="green rainbow" />
          <p className="app__Popular-p-2">Green Raibow</p>
          <p className="app__Popular-p-3">RM120</p>
        </motion.div>

        <motion.div 
          className="app__Popular-items-single-cake"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          <img className="app__Popular-items-img" src={images.unicornCity} alt="unicorn city" />
          <p className="app__Popular-p-2">Unicorn City</p>
          <p className="app__Popular-p-3">RM340</p>
        </motion.div>

        <motion.div 
          className="app__Popular-items-single-cake"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          <img className="app__Popular-items-img" src={images.vanillaFunfetti} alt="vanilla funfetti" />
          <p className="app__Popular-p-2">Vanilla Funfetti</p>
          <p className="app__Popular-p-3">RM360</p>
        </motion.div>
      </div>    

    </div>
  )
}

export default Popular