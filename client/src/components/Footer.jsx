import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble, BsLinkedin} from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Analytic's</span>
                    Blog
                </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-2 sm:gap-6">

                <div>
                        <Footer.Title title='Follow us' />
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href='https://github.com/LP1375'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                GitHub
                            </Footer.Link>

                            <Footer.Link
                                href='https://www.linkedin.com/in/vladyslav-lypovetskyi-b25185255/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                LinkedIn
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>

                    <div>
                        <Footer.Title title='About' />
                        <Footer.LinkGroup col>

                            <Footer.Link
                                href='/about'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Analytic's Blog
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>

                </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href='#' by="Analytic's Blog" year = {new Date().getFullYear()}/>
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                    <Footer.Icon target='_blank' href='https://www.linkedin.com/in/vladyslav-lypovetskyi-b25185255/' icon={BsLinkedin} />
                    <Footer.Icon target='_blank' href='https://github.com/LP1375' icon={BsGithub} />
                </div>
            </div>
        </div>
    </Footer>
  )
}
