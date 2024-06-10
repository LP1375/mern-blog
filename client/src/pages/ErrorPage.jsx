import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div className="justify-center items-center">
          <h1 className='text-9xl font-semibold text-center my-4 text-slate-700'>Oops!</h1>
          <div className="text-lg text-gray-500 flex flex-col justify-center items-center gap-6">
          <p>404 - PAGE NOT FOUND</p>
          <p>THE PAGE YOU REQUESTED COULD NOT FOUND</p>
          <Link to={'/'}>
                <Button>
                    Home Page
                </Button>      
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
