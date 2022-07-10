import React from 'react'
import Header from './components/Header/header'
import Nav from './components/Nav/nav'
import About from './components/About/about'
import Videos from './components/Videos/videos'
import Discography from './components/Discography/discography'
import News from './components/News/news'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'


function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Videos />
      <Discography />
      <News />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
