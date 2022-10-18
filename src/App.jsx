import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import gsap from 'gsap'

function App() {
  
  useEffect(()=>{
  
    const tl = gsap.timeline({defaults:0});
    const h1Adamo = document.querySelector('#adamo h1');
    tl
    .to('#img', {autoAlpha:1, height:'100%', duration:1.4, delay:0.8})
    .to('#adamo', {autoAlpha:1, height:'80px'},'-=0.6')
    .to(h1Adamo, {y:0}, '<=0.1')
    .to('#img2', {autoAlpha:1, height:'100%', top:0, duration:0.6})
    .to('#img', {autoAlpha:0, duration:0})
    .to('#img3', {autoAlpha:1, duration:0})
    .to('#img2', {autoAlpha:1, height: 0, duration:0.4})

    .to('#overlay', {autoAlpha:1, opacity:1, duration:1, delay:1})
    .to('#video', {autoAlpha:1, opacity:1, duration:1},'<')
    .to('#title', {autoAlpha:1, opacity:1},'<')


  })

  return (
    <div className="App">
      <div id='bgBeige' className='bg-beige w-full h-screen flex flex-col justify-center items-center -z-0'>

        <div className='w-[300px] h-[300px] relative -top-[100px]'>
          <div id='img' className='bg-foodImg3 w-full h-0 absolute bottom-0 bg-center bg-cover -z-5'></div>
          <div id='img2' className='bg-red-800 w-full h-0 absolute bottom-0 -z-0'></div>
          <div id='img3' className='bg-foodImg1 w-full h-full opacity-0 bg-cover bg-center -z-10'></div>

          <div id='adamo' className='bg-white w-[200px] h-0 absolute -bottom-[50px] -left-[50px] -z-0 flex justify-center items-center overflow-hidden'>
              <h1 className='font-lighter text-4xl translate-y-[55px] -z-20'>ADAMO.</h1>
          </div>
          
        </div>

      <div id='overlay' className='opacity-0 bg-black w-full h-screen absolute top-0 z-10 bg-opacity-70'></div>
        <video id='video' className='absolute top-0 w-full h-screen object-cover -z-0 opacity-0' autoPlay={true} muted={true} loop={true}>
            <source src="highendcooking.mp4" type="video/mp4" />
        </video>

        <div id='title' className='absolute top-[100px] flex flex-col items-center p-4 z-20 opacity-0'>
            <div className='flex justify-center items-center w-[500px] h-[150px] '>
                <h1 className='font-semibold text-6xl text-white text-center tracking-widest'>EXPERIENCE ADAMO.</h1>
            </div>
            <div className='bg-white w-[2px] h-[150px] mt-4'></div>
            <button className='border border-[1px] rounded-md border-white px-4 p-2 font-semibold text-white mt-6'> EXPLORER LE MENU</button>
        </div>

      </div>
    </div>
  )
}

export default App
