import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
        <div className='flex-1 justify-center flex flex-col'>
            <h2 className='text-2xl'>Want to place your advertising banner on our website?</h2>
            <p className='text-gray-500 my-2'>If you want to place your advertising banner on our website, just write to us!</p>
            <Button className='rounded-tl-xl rounded-bl-none' gradientDuoTone='purpleToPink'><a href="https://www.linkedin.com/in/vladyslav-lypovetskyi-b25185255/" target='_blank' rel='noopener noreferrer'>LinkedIn</a></Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://verseo.pl/wp-content/uploads/2018/07/Kopia-BLOG-GRAFIKI-2022-67.png"/>
        </div>
    </div>
  )
}
