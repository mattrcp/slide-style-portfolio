import React from 'react'
import Navigation from '../components/Navigation'
import Overview from '../components/upliftt/Overview'
import Discovery from '../components/upliftt/Discovery'
import Define from '../components/upliftt/Define'
import Develop from '../components/upliftt/Develop'
import Delivery from '../components/upliftt/Delivery'
import Learning from '../components/upliftt/Learning'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navigation />
      <main className="flex flex-col items-start justify-center w-full px-2 md:px-4">
      <h1 className='text-2xl text-primaryText'>This is the Upliftt page</h1>
      <Overview />
      <Discovery />
      <Define />
      <Develop />
      <Delivery />
      <Learning />
      </main>
      <Footer />
    </div>
  )
}

export default page
