import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import ServePage from './components/ServePage'
import MenuSlider from './components/MenuSlider'
import WorkPage from './components/WorkPage'
import Plan from './components/Plan'
import Testimonials from './components/Testimonials'
import DownloadInfo from './components/DownloadInfo'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='w-full min-h-screen relative overflow-hidden'>
<div className='w-[50%] h-[15%] bg-orange-200 absolute -right-20 -top-24 opacity-40 rounded-full blur-2xl'></div>
      <Nav/>
      <Home />
      <ServePage />
      <MenuSlider />
      <WorkPage />
      <Plan />
      <Testimonials />
      <DownloadInfo />
      <Footer />
    </div>
  )
}

export default App
