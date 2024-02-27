import Navbar from '@/components/Navbar'
import React from 'react'
import Hero from '@/components/ui/Hero'
import Card from '@/components/ui/Card'
import Footer from '@/components/ui/Footer'
export default function index() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='flex justify-center  mt-16 text-2xl font-serif font-bold'>
        Explore SwamiNarayan...
        </div>
      <Card/>
      <h1 className=' flex items-center  mt-16 justify-center text-2xl font-serif font-bold'> Upcoming Events...</h1>

      <Footer/>
    </div>
  )
}
