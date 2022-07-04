import DeveloperSideBar from './DeveloperSideBar'
import Slide from '@mui/material/Slide'
import Zoom from '@mui/material/Zoom'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.75,
    rootMargin: '100px',
    triggerOnce: true,
  })

  const iconData = [
    { name: 'github', link: 'https://github.com/cbedroid' },
    { name: 'linkedin', link: 'https://linkedin.com/in/cornelius-brooks' },
    { name: 'twitter', link: 'https://twitter.com/cbedroid' },
  ]

  const text = `Hello, my name is Cornelius Brooks, known as Cbedroid. I am an Innovative, task-driven professional Senior Software Engineer with over 7+ years of experience in Full Stack Web
                      Developer, fundamental front-end languages, and server-side languages. A creative thinker that brings innovative solutions to help solve any arriving problems. Equipped with a
                      record of success in consistently identifying and providing the technological needs of companies through ingenious innovation. Proficient in developing databases such as Postgres
                      SQL, SQL, MySQL, and MongoDB, creating servers and databases for functionality and designing, developing restful APIs, creating user interfaces, writing and testing codes, and
                      troubleshooting simple/complex issues.`

  useEffect(() => {
    console.log('About Page mounted')
  }, [])

  return (
    <section id='about' className='min-h-screen' ref={ref}>
      <div className='2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:px-6 px-4'>
        <div className='flex flex-col lg:flex-row justify-between gap-8 bg-gray-500 p-4'>
          <div className='w-full lg:w-5/12 flex flex-col pt-8'>
            <div className='wrapper'>
              <h1
                className='text-3xl lg:text-4xl font-bold leading-9 text-center text-gray-100 dark:text-gray-800 pb-4'
                style={{ fontFamily: 'Merriweather Sans, sans-serif' }}
              >
                Who Am I ?
              </h1>
              <Slide direction='up' in={inView} mountOnEnter unmountOnExit>
                <div className='wrapper bg-gray-800 dark:bg-gray-200 rounded-md'>
                  <DeveloperSideBar icons={iconData} text={text} />
                </div>
              </Slide>
            </div>
          </div>
          <div className='w-full lg:w-8/12 bg-gray-700 ring ring-offset-4 ring-yellow-400 border-gray-300  rounded-md shadow sm:my-24'>
            <Zoom in={inView} style={{ transitionDelay: inView ? '300ms' : '0ms' }}>
              <img
                className='w-full h-full max-h-fit'
                src={'assets/images/avatar_full.png'}
                alt='Programmer illustration'
              />
            </Zoom>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
