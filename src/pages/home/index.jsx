import React from 'react'
import Hero from '../../components/home/Hero'
import HowItWork from '../../components/home/HowItWork'
import Pricing from '../../components/home/Pricing'
import Form from '../../components/home/Form'
import Features from '../../components/home/Features'
import Testimonial from '../../components/home/Testmonial'
import FAQ from '../../components/common/FAQ'

function Home() {
  return (
   <>
    <Hero/>  
    <HowItWork/>
      <Form/>
      <Features/>
      {/* <Pricing/> */}
      <Testimonial/>
      <FAQ/>
    </>
  )
}

export default Home