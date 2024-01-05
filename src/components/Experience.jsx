import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import graphql from '../assets/graphql.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import c from '../assets/c++.png'
import python from '../assets/python-icon.svg'
import nodejs from '../assets/nodejs.svg'
import mongodb from '../assets/mongodb.svg'

const Experience = () => {
    const portfolios=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500',
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500',
        },
        {
            id:3,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500',
        },
        {
            id:4,
            src:reactImage,
            title:'React',
            style:'shadow-cyan-500',
        },
        {
            id:5,
            src:c,
            title:'C++',
            style:'shadow-blue-700',
        },
        {
            id:6,
            src:python,
            title:'Python',
            style:'shadow-pink-500',
        },
        {
            id:7,
            src:nodejs,
            title:'NodeJS',
            style:'shadow-green-700',
        },
        {
            id:8,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-blue-300',
        },
        {
            id:9,
            src:mongodb,
            title:'MongoDB',
            style:'shadow-green-300',
        },
    ]
  return (
    // <div id="Experience" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white md:h-screen' >

    //   <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

    //     <div className='pb-8'>
    //         <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
    //         <p className='py-6'>These are the technologies I've worked with</p>

    //     </div>

        

    //     <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 py-8 text-center sm:px-0 '>

    //         {
    //             portfolios.map(l=>(
    //             <div key={l.id} className={`rounded-md hover:scale-105 duration-500 py-2 shadow ${l.style}`}>
    //                 <img src={l.src} alt="error" className='w-20 mx-auto'/>
    //                 <p className='mt-4'>{l.title}</p>
    //             </div>
    //             ))
    //         }
            
    //     </div>

       
    //   </div>
    // </div>
    <div id="Experience" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white md:h-screen' >

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
            <p className='py-6'>These are the technologies I've worked with</p>

        </div>

        

        <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-8 px-12 py-8 text-center sm:px-0 '>

            {
                portfolios.map(l=>(
                <div key={l.id} className={`rounded-md hover:scale-105 duration-500 py-2 shadow ${l.style}`}>
                    <img src={l.src} alt="error" className='w-20 mx-auto'/>
                    <p className='mt-4'>{l.title}</p>
                </div>
                ))
            }
            
        </div>

       
      </div>
    </div>
  )
}

export default Experience
