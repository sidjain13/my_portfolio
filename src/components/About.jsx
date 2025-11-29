import React from 'react'

const About = () => {
  return (
    <div id="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white ' >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

    
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500  '>About</p>

        </div>

        <p className='text-xl mt-20'>Hello everyone , I am Siddhant Jain .
Completed my B.Tech from Madhav Institute of Technology and Science 
( Gwalior ) .  </p>

        <br />

        <p className='text-xl'>I specialize in Software Testing with strong experience in both Manual and Automation Testing. My automation skills include working with Selenium (Java) and Playwright (TypeScript), along with frameworks such as TestNG, Cucumber, and the Page Object Model (POM). I also work with CI/CD pipelines using Jenkins, follow industry-standard testing practices, and enjoy ensuring product quality through detailed test planning, execution, and reporting.
        </p>
        <br />

        {/* <p className='text-xl'> 
        I am also know various programming languages including C, C++, Python with
experience in developing web applications with the help of MERN , designing
databases using MongoDB , SQL . Also I will able to extract meaningfull information
from data for business . Collaborative team player with a proven track record of
delivering high-quality work and achieving exceptional results.</p> */}
      </div>
    </div>
  )
}

export default About
// sadfj