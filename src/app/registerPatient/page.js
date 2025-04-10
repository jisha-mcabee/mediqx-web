import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Section1 from '@/components/registerPatient/Section1'
import Section2 from '@/components/registerPatient/Section2'
import React from 'react'

const page = () => {
  return (
    <div className="w-full">
    <div className="relative">
    <Navbar/>
      <Section1/>
      </div>  
        <Section2/>
        <Footer/>
    </div>
  )
}

export default page