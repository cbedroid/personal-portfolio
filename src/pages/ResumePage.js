import React from 'react'
import PDFViewer from '../components/PDFViewer'
const ResumePage = () => {
  return (
    <div className='bg-gray-400 min-h-screen'>
      <div className='container mx-auto pt-8'>
        <div className='pdf-wrapper mx-auto'>
          <div className='header flex items-center justify-between  bg-white  border-t-4 border-blue-700 rounded-md my-4 p-4 mb-4 mx-auto w-3/5'>
            <h2 className='text-3xl text-gray-600 text-center font-bold '>Resume</h2>
            <p className='text-gray-600  font-semibold'>
              {' '}
              last modified: <span className='text-gray-400'>March, 2022</span>
            </p>
          </div>
          <PDFViewer className={'flex flex-col items-center content-center'} file={require('../assets/resume.pdf')} scale={2} />
        </div>
      </div>
    </div>
  )
}

export default ResumePage
