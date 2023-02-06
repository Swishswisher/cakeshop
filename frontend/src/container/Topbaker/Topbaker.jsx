import React from 'react'
import { images } from '../../constants'
import './Topbaker.css'
import {motion} from 'framer-motion'

const Topbaker = () => {
  return (
    <div className="app__Topbaker" id="topbaker">
      <h1 className="app__Topbaker-h">TOP BAKER</h1>

      <div className="app__Topbaker-chefs">
        <motion.div 
          className="app__Topbaker-chef-item"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          < img className="app__Topbaker-img" src={images.anaValentina} alt="anna valentina" />
          <p className="app__Topbaker-p">Anna Valentina</p>
        </motion.div>

        <motion.div 
          className="app__Topbaker-chef-item"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          < img className="app__Topbaker-img" src={images.eddKimber} alt="Edd Kimber" />
          <p className="app__Topbaker-p">Edd Kimber</p>
        </motion.div>

        <motion.div 
          className="app__Topbaker-chef-item"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          < img className="app__Topbaker-img" src={images.liaVernada} alt="Lia vernada" />
          <p className="app__Topbaker-p">Lia Vernada</p>
        </motion.div>

        <motion.div 
          className="app__Topbaker-chef-item"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          < img className="app__Topbaker-img" src={images.tomasso} alt="tomasso" />
          <p className="app__Topbaker-p">Tomasso</p>
        </motion.div>

        <motion.div 
          className="app__Topbaker-chef-item"
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.5, type: "tween"}}
        >
          < img className="app__Topbaker-img" src={images.chefWan} alt="chef wan" />
          <p className="app__Topbaker-p">Chef Wan</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Topbaker