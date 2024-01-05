import React from 'react'
import { FaGithub , FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from "react-icons/bs"


const SocialLinks = () => {

    const links=[
        {
            id:1,
            child:{

            },
            href:'https://linkedin.com'
        }
    ]
  return (
    // <div className='flex flex-col top-[35%] left-0 fixed'>
    //     <ul>
    //         <li className='flex justify-between items-center w-40 h-14 px-4 bg-black'>
    //             <a href="" className='flex justify-center items-center w-full text-white'>
    //                 <>
    //                     LinkedIn <FaLinkedin/>
    //                 </>
    //             </a>
    //         </li>
    //     </ul>
      
    // </div>
    

    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300'>
                <a href="https://www.linkedin.com/in/siddhant-jain-170158225/" target='_blank' className='flex justify-between items-center w-full text-white'>
                    <>
                        LinkedIn <FaLinkedin size={30}/>
                    </>
                </a>
            </li>

            <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300'>
                <a href="https://github.com/sidjain13" target='_blank' className='flex justify-between items-center w-full text-white'>
                    <>
                        LinkedIn <FaGithub size={30}/>
                    </>
                </a>
            </li>

            

            <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300'>
                <a href="mailto:bjsiddhu2003@gmail.com" target='_blank' className='flex justify-between items-center w-full text-white'>
                    <>
                        Mail <HiOutlineMail size={30}/>
                    </>
                </a>
            </li>

            <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300'>
                <a href="/resume 1.pdf" target='_blank' download={true} className='flex justify-between items-center w-full text-white'>
                    <>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </>
                </a>
            </li>
        </ul>
      
    </div>
  )
}

export default SocialLinks
