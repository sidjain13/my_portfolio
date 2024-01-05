import React from 'react'

const Contact = () => {
  return (
    <div id="Contact" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black   text-white text-justify' >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8 '>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>

            <p className='py-6'>Submit the form below to get in touch with me </p>

        </div>

        <div >
            <form action="https://getform.io/f/99d33a1d-3109-415c-9a7c-bc7a68d8657e" method='POST' className='flex flex-col w-full md:w-1/2 mx-auto py-6 justify-center px-2 space-y-6' >
                <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <input type="email" name='email' placeholder='Enter your email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                
                <textarea name="message"  rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='Enter your message : '></textarea>


                <button  className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
            </form>
        </div>

        
      </div>
    </div>
  )
}

export default Contact
