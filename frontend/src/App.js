import React from 'react'

import { Bytes, FathersDay, Footer, Header, Popular, Recent, Topbaker } from './container'
import { Navbar } from './components'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <FathersDay />
      <Popular />
      <Topbaker />
      <Recent />
      <Bytes />
      <Footer />
    </div>
  )
}

export default App