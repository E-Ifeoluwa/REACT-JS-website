import React from 'react'
// import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyles} from './components/GlobalStyles.js'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import {productdataOne, productdataTwo} from './components/Products/Data'
import Feature from './components/Feature/Feature.js'
import Footer from './components/Footer/Footer.js'

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Hero/>
      <Products data={productdataOne}/>
      <Feature/>
      <Products data={productdataTwo}/>
      <Footer/>
      </Router>
  );
}

export default App;
