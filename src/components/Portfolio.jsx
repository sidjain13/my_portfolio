import React from 'react'
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg"
import installNode from "../assets/portfolio/installNode.jpg"
import navbar from "../assets/portfolio/navbar.jpg"
import reactParallax from "../assets/portfolio/reactParallax.jpg"
import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
import reactWeather from "../assets/portfolio/reactWeather.jpg"
import ecommerce1 from "../assets/portfolio/ecommerce1.jpg"
import amazon from "../assets/portfolio/amazon.jpg"
import heart from "../assets/portfolio/heart.jpg"
import sales from "../assets/portfolio/sales.jpg"
import movie from "../assets/portfolio/movie.jpg"
import bloodBank from "../assets/portfolio/bloodBank.jpg"
import doorLock from "../assets/portfolio/doorLock.jpg"

const Portfolio = () => {

    const portfolios=[

        {
            id:6,
            src:ecommerce1,
            title:'Online Shopping Website (MERN)',
            demo:'https://github.com/sidjain13/Coding-Raja-Technologies-Internship---ecommerce-website'
        },
        {
            id:1,
            src:movie,
            title:'Movie Recommendation System' ,
            demo:'https://github.com/sidjain13/movie-recommendation-system1'
            
        },
        {
            id:2,
            src:heart,
            title:'Heart Failure Prediction',
            demo:'https://github.com/sidjain13/heart-failure-prediction'
        },
        {
            id:3,
            src:sales,
            title:'Sales Dashboard',
            demo:'https://github.com/sidjain13/sales-dashboard'
        },
        {
            id:4,
            src:amazon,
            title:'Amazon Website (PHP)' ,
            demo:'https://github.com/sidjain13/ecommerce-using-php./tree/main'
            
        },
        {
            id:5,
            src:bloodBank,
            title:'Blood Bank Management System' ,
            demo:'https://github.com/sidjain13/Blood-Bank-Management-System-Using-MERN/tree/main'
            
        },
        // {
        //     id:7,
        //     src:doorLock,
        //     title:'Door Lock System' ,
        //     demo:'https://wokwi.com/projects/394794961813568513'
            
        // },
        // {
        //     id:8,
        //     src:doorLock,
        //     title:'Door Lock System' ,
        //     demo:'https://wokwi.com/projects/394794961813568513'
            
        // },
        // {
        //     id:9,
        //     src:doorLock,
        //     title:'Door Lock System' ,
        //     demo:'https://wokwi.com/projects/394794961813568513'
            
        // },
       
       
    
    ]
  return (
    <div id="Projects" className='w-full bg-gradient-to-b from-black to-gray-800 text-white h-screen' >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Projects</p>
            <p className='py-6'>Check out some of my work right here</p>

        </div>

        

        <div className='grid grid-cols-2 md:grid-cols-3 gap-7 md:gap-10 md:px-12 px-3 sm:px-0'>

        {
            portfolios.map(l=>(
                <div key={l.id} className='shadow-md shadow-gray-600 rounded-lg '>
                    <img src={l.src} alt="" className='rounded-md hover:scale-105 duration-200 md:h-2/3 h-2/4 w-full '/>
                    <div className='flex flex-col items-center justify-center '>
                        <div className='flex flex-col justify-center items-center '>
                            <p className='py-2 font-bold text-center text-xs md:text-sm'>{l.title}</p>
                            {/* <button className='w-1/2  md:m-4 duration-200 hover:scale-105'><a href="https://sidjain13.github.io/amazon_small/">Demo</a></button> */}
                            {/* <button  className='w-1/2 md:m-4 duration-200 hover:scale-105'><a target='_blank' href={l.demo}>Code</a></button> */}
                            <div>
                                <button  className='text-white font-bold bg-gradient-to-b from-cyan-500 to-blue-500 px-3 my-2 mx-auto rounded-md hover:scale-110 duration-300'><a target='_blank' href={l.demo}>Code</a></button>

                            </div>
                        </div>
                    </div>
            </div>
            ))
        }
            
        </div>

       
      </div>
    </div>
  )
}

export default Portfolio
// jsadlfk