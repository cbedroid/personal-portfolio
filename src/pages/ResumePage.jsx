import Resume from '../components/resume/Resume'
import React from 'react'

const ResumePage = () => {
  return (
    <div className='bg-gray-400 min-h-screen'>
      <div className='container mx-auto pt-8 px-2'>
        <div className='pdf-wrapper mx-auto'>
          <Resume
            className={'flex flex-col items-center content-center'}
            file={'/assets/resume.pdf'}
            scale={2}
          />
        </div>
      </div>
    </div>
  )
}

export default ResumePage
