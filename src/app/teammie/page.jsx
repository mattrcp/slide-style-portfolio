import React from 'react'
import Navigation from '../components/Navigation'
import HeroSingle from '../components/HeroSingle'
import ProjectSlider from '../components/ProjectSlider'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navigation />
      <main className="flex flex-col items-start justify-center w-full px-2 md:px-4">
      <h1 className='text-2xl text-primaryText'>This is the Teammie page</h1>

      </main>
      <Footer />
    </div>
  )
}

export default page
