import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import c from '../assets/c++.png'
import python from '../assets/python-icon.svg'
import nodejs from '../assets/nodejs.svg'
import mongodb from '../assets/mongodb.svg'
import sql from '../assets/sql.webp'
import express from '../assets/express.webp'
import php from '../assets/php.webp'
import numpy from '../assets/numpy.webp'
import pandas from '../assets/Pandas.png'
import pandas1 from '../assets/pandas1.jpg'
import seaborn from '../assets/seaborn.webp'
import powerBi from '../assets/powerBi.png'
import flask from '../assets/flask (2).svg'


const Experience = () => {
    const portfolios=[
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
            id:8,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-blue-300',
        },
        {
            id:3,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500',
        },
        {
            id:7,
            src:nodejs,
            title:'NodeJS',
            style:'shadow-green-700',
        },
        {
            id:12,
            src:express,
            title:'Express',
            style:'shadow-yellow-400',
        },
        {
            id:4,
            src:reactImage,
            title:'React',
            style:'shadow-cyan-500',
        },
        
        
       
        
        {
            id:9,
            src:mongodb,
            title:'MongoDB',
            style:'shadow-green-300',
        },
        
        {
            id:11,
            src:sql,
            title:'Sql',
            style:'shadow-blue-300',
        },
       
        {
            id:13,
            src:php,
            title:'PHP',
            style:'shadow-blue-800',
        },
        {
            id:10,
            src:github,
            title:'Github',
            style:'shadow-white',
        },
        
        {
            id:17,
            src:powerBi,
            title:'Power Bi',
            style:'shadow-yellow-500',
        },
        {
            id:18,
            src:flask,
            title:'Flask',
            style:'shadow-gray-300',
        },

        {
            id:14,
            src:numpy,
            title:'Numpy',
            style:'shadow-blue-500',
        },
        {
            id:15,
            src:pandas,
            title:'Pandas',
            style:'shadow-yellow-600',
        },
        {
            id:16,
            src:seaborn,
            title:'Seaborn',
            style:'shadow-blue-300',
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
    <div id="Experience" className='w-full bg-gradient-to-b from-gray-800 to-black text-white' >

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8 md:mt-28'>
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
// sadf 