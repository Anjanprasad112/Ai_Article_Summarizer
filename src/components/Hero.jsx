import React from 'react';
import {logo} from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col mb-10 pt-3">
       <nav className='flex justify-between items-center w-full '>
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
       type='button' onClick={()=> window.open('https://github.com/anjanprasad112')} 
       className='black_btn'>
            GitHub
        </button>
       </nav>
       <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden"/>
        <span className="orange_gradient"> Open AI GPT-4</span>
       </h1>
       <h2 className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illum, voluptatibus iure unde est doloremque odit velit exercitationem repudiandae nobis natus odio ut corporis magnam repellendus voluptas vitae deleniti sunt!

       </h2>
    </header>
  )
}

export default Hero