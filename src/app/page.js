import React from 'react'
import Navigation from './components/Navigation'
import Herosection from './components/Herosection'
import Cardsection from './components/Cardsection'
import Footersection from './components/Footersection'


export default function Home() {
  return (
    <>
      <Navigation />

      <Herosection />

      <Cardsection/>

      <Footersection />
    </>
  )
}