import React from 'react'
import HeroImage from "../assets/heroImage.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'
import {useTypewriter , Cursor} from 'react-simple-typewriter'

const Home = () => {

  const [typeEffect]=useTypewriter({
    words:['Automation Tester','Programmer','Web Developer','Data Analyst'],
    loop:{},
    typeSpeed:150, 
    deleteSpeed:60,
    cursorStyle:'|',

  })
  return (
//     <div id="Home" className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 '>
//       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
//         <div className='flex flex-col justify-center h-full'>
//             <h2 className='text-white font-bold text-4xl sm:text-7xl mt-40 md:mt-0'>I'm a <span>{typeEffect}</span></h2>

//                   <p className='text-gray-500 py-4 max-w-md '>I love to work on web application using technologies like React , Tailwind , MongoDB , ExpressJs , NodeJs . Also Interested in programming using c++ and python as well .
// </p>

//             <div>
//             <Link to='Experience' smooth duration={500} className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group'>
//             Experience
//             <span className='group-hover:rotate-90 duration-300 '>
//                 <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
//             </span>
//             </Link>
//         </div>

//         </div>

        

//         <div>
//             <img src={HeroImage} alt="error" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
//         </div>

        
//       </div>

//     </div>
<div id="Home" className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg  mx-auto flex flex-col items-center justify-between h-full md:flex-row px-4 md:px-0 '>
        <div className='flex flex-col justify-center h-full'>
            {/* <h2 className='text-white font-bold text-4xl sm:text-6xl '>I'm a Full Stack Developer</h2> */}
            {/* <h2 className='text-white font-bold text-4xl sm:text-7xl '>I'm a <br/>Full Stack Developer</h2> */}
            <h2 className='text-white font-bold text-4xl sm:text-6xl '>I'm a </h2>
            <h2 className='text-white font-bold text-4xl sm:text-6xl '>{typeEffect}</h2>

                  <p className='text-gray-500 py-4 max-w-md '>I am a QA Engineer specializing in manual and automation testing. Experienced with Selenium, Playwright, TestNG, Cucumber, POM, and Jenkins, I ensure software is thoroughly tested and delivered with high quality.
</p>

            <div>
            <Link to='Experience' smooth duration={500} className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group'>
            Experience
            <span className='group-hover:rotate-90 duration-300 '>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
            </span>
            </Link>
        </div>

        </div>

        

        <div>
            {/* <img src={HeroImage} alt="error" className='rounded-2xl mx-auto w-2/3 md:w-full'/> */}
            <img src={HeroImage} alt="error" className='rounded-2xl mx-auto w-2/3'/>
        </div>

        
      </div>

    </div>
  )
}

export default Home
// alksdf