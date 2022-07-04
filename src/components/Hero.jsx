import { TypingText } from './styles/TypingText.styled'
import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [typingFinish, setTypingFinish] = useState(false)
  const [textWrap, setTextWrap] = useState(false)

  useEffect(() => {
    window.innerWidth <= 425 ? setTextWrap(true) : setTextWrap(false)
    setTimeout(() => {
      setTypingFinish(true)
    }, 4000)
  }, [])

  return (
    <section
      id='welcome-section'
      className='bg-gray-800 text-white h-screen'
      style={{ backgroundImage: `url(${'/assets/images/canvas.png'})` }}
    >
      <div className='flex flex-col items-center justify-center h-full'>
        <div className='content-wrapper'>
          <div className='content__text text-center text-4xl lg:text-5xl px-2'>
            <TypingText
              color={typingFinish ? 'transparent' : '#A61F5B'}
              textWrap={textWrap}
            >
              <h1 className='font-raleway mb-4'>
                {textWrap ? "Hi I'm" : 'Hello, My name is'}{' '}
                <span className='text-[#A61F5B] font-bold'>Cornelius Brooks</span>.
              </h1>
            </TypingText>
            <h1 className='font-raleway'>I&apos;m a full-stack web developer.</h1>
          </div>
        </div>
        <a
          className='bg-transparent hover:bg-[#04BDC4] font-raleway border-2 border-white text-center p-3 px-6 mt-10 w-64'
          href='#projects'
        >
          View My Work
        </a>
      </div>
    </section>
  )
}

export default Hero
