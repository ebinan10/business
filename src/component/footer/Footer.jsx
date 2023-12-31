import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Twitter from './twitter (1).svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import instagram from './instagram-icon.svg'
// import { Link } from 'react-router-dom'
import  { useState } from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='w-full  flex flex-col justify-center items-center '>
      <div className="w-full md:max-h-[70vh] max-h-[120vh]  bg-[#ccc] w-full flex md:flex-row flex-col justify-center items-center">
        <div className="md:w-3/5 w-[92%] mb-4 h-[80%] md:ml-0 ml-[5vw] text-[black] flex justify-evenly item-center">
          <div className='mt-[10px] h-full md:text-xl gap-2 text-md flex flex-col'>
            <h3 className='md:m-[10px] text-lg h-[10vh] flex justify-center items-center font-bold'>Quick Links</h3>
            <Link  to="/contact" className=' md:m-[10px]  bg-transparent'> Contact</Link>
            <Link to="/about" className=' md:m-[10px] m-2 bg-transparent'>About</Link>
            <Link to="/product" className=' md:m-[10px] m-2 bg-transparent'>Our Product</Link>
            <Link to="/service" className=' md:m-[10px] m-2 bg-transparent'>Our Services</Link>
            <Link to="/gallary" className=' md:m-[10px] m-2 bg-transparent'>Gallary</Link>
        </div> 
        
        <div className='mt-[10px] h-full md:text-xl gap-2 text-md flex flex-col'>
          <h3 className='md:m-[10px] text-lg h-[10vh] flex justify-center items-center font-bold'>Product Category</h3>
          <li className='md:m-[10px] m-2 list-none'>Bond</li>
          <li className='md:m-[10px] m-2 list-none'>Screws</li>
          <li className='md:m-[10px] m-2 list-none'>Frames</li>
          <li className='md:m-[10px] m-2 list-none'>Boards</li>
        </div>
        <div className='mt-[10px] md:text-xl h-full md:mr-0 mr-3 gap-2 text-md flex flex-col'>
        <h3 className='md:m-[10px] text-lg h-[10vh] flex justify-center items-center font-bold'>Content</h3>
          <li className='md:m-[10px] m-2 list-none'>Email Address</li>
          <li className='md:m-[10px] m-2 list-none'>Phone Number</li>
          <li className='md:m-[10px] m-2 list-none'>Physical Address</li>
          <li className='md:m-[10px] m-2 list-none'>Information</li>
          <li className='md:m-[10px] m-2 list-none'>Nuvie Wall Details</li>
          <li className='md:m-[10px] m-2 list-none'>Location Details</li>
        </div>
        </div>
        <div className="md:w-1/4 w-4/5 h-[90px] my-[20px] flex flex-col gap-5 justify-center items-center bg-transparent">
        <div className="w-full flex justify-center items-center ">
       <Link className='bg-transparent' to="https://www.instagram.com/nuvie_drywall_enterprise/"><img className='ml-6 md:h-[4vh] w-[6vw] md:w-[4vw] h-[7vh]' src={instagram} alt=""></img></Link>
         </div>   <div><span className='text-xl mr-[7px]  font-black'>&copy;</span>2023 Nuvie Dry Walls. All rights reserved.</div> 
        </div>
        </div>
        <div className="md:w-1/2 w-3/5 h-[10vh] items-center flex m-auto justify-center md:gap-5 gap-2">
          <img className='md:h-[8vh] md:w-[7vw]' src="https://static.wixstatic.com/media/80b77e_f1aa6cb82957404aa2ca5b96ca9753f3~mv2.jpg/v1/fill/w_69,h_41,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/80b77e_f1aa6cb82957404aa2ca5b96ca9753f3~mv2.jpg" alt="" />
          <img className='md:h-[8vh] md:w-[7vw]' src="https://static.wixstatic.com/media/80b77e_db545c5db7544ebfa0090999e4efd590~mv2.png/v1/fill/w_93,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/80b77e_db545c5db7544ebfa0090999e4efd590~mv2.png" alt="" />
          <img className='md:h-[8vh] md:w-[7vw]' src="https://static.wixstatic.com/media/80b77e_5092a0e36230457ab8b112b4f3b43826~mv2.jpg/v1/fill/w_96,h_41,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/80b77e_5092a0e36230457ab8b112b4f3b43826~mv2.jpg" alt="" />
          <img className='md:h-[8vh] md:w-[7vw]' src="https://static.wixstatic.com/media/80b77e_33d64fdf194d4d8b8f7b42d0acf53c65~mv2.png/v1/fill/w_98,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/80b77e_33d64fdf194d4d8b8f7b42d0acf53c65~mv2.png" alt="" />
          <img className='md:h-[8vh] md:w-[7vw]' src="https://static.wixstatic.com/media/80b77e_1c70260bb61b419fb772cf1ec1fac78c~mv2.png/v1/fill/w_99,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/80b77e_1c70260bb61b419fb772cf1ec1fac78c~mv2.png" alt="" />
          <img className='md:h-[8vh] md:w-[7vw]' src="https://static.wixstatic.com/media/80b77e_1f2b299d46444a348665c6912a2382b8~mv2.jpg/v1/fill/w_99,h_49,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/80b77e_1f2b299d46444a348665c6912a2382b8~mv2.jpg" alt="" />
        </div>
        </div>
  )
}

export default Footer