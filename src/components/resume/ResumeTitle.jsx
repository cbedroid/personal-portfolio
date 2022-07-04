import { PropTypes } from 'prop-types'
import React from 'react'

const ResumeTitle = ({ color }) => {
  return (
    <div
      className={`header flex items-center justify-between  bg-white  border-t-4 border-${color}-700 rounded-md my-4 p-4 mb-4 mx-auto`}
    >
      <h2 className='text-3xl text-gray-600 text-center font-bold '>Resume</h2>
      <p className='text-gray-600  font-semibold'>
        {' '}
        last modified: <span className='text-gray-400'>July, 2022</span>
      </p>
    </div>
  )
}

export default ResumeTitle

ResumeTitle.defaultProps = {
  color: 'blue',
}

ResumeTitle.propTypes = {
  color: PropTypes.string,
}
