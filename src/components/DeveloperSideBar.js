import React, { useRef } from 'react'
import { PropTypes } from 'prop-types'
import ReadMoreAndLess from 'react-read-more-less'
import AvatarDrawer from './subcomponents/AvatarDrawer'
import BorderLinearProgress from './subcomponents/BorderLinearProgress'
import SocialIcon from './subcomponents/SocialIcon'
const avatarImage = require('../assets/images/avatar_full.png')

const DeveloperSideBar = ({ icons, text }) => {
  const readMoreRef = useRef(null)

  const skills = [
    {
      title: 'Python',
      value: '95',
      experience: '7+ years',
    },

    {
      title: 'Django',
      value: '90',
      experience: '6+ years',
    },
    {
      title: 'JavaScript',
      value: '85',
      experience: '6+ years',
    },
    {
      title: 'Restful API',
      value: '85',
      experience: '5+ years',
    },
    {
      title: 'React',

      value: '80',
      experience: '3+ years',
    },
    {
      title: 'VueJS',
      value: '80',
      experience: '3+ years',
    },
    {
      title: 'DevOps',
      value: '75',
      experience: '4+ years',
    },
  ]
  return (
    <>
      <div className='about__header bg-gray-700 dark:bg-gray-100 mx-auto w-full rounded-t-md p-4'>
        <AvatarDrawer image={avatarImage} style={{ width: 100, height: 100 }} title='Cornelius Brooks' subtitle='Full-Stack Web Developer' />
        <SocialIcon
          data={icons}
          containerClass='flex flex-row space-x-3 justify-center my-4'
          iconStyle='bg-gray-300 rounded-full m-auto p-1'
          iconProps={{ fontSize: 36 }}
        />
      </div>
      <div className='content py-4 px-8'>
        <p className='font-normal text-base leading-relaxed dark:text-gray-600 text-gray-100'>
          <ReadMoreAndLess ref={readMoreRef} readMoreText='Read More' charLimit={520}>
            {text}
          </ReadMoreAndLess>
        </p>

        <div id='skill-level' className='flex flex-col space-y-2 border-t-1 border-gray-400 py-8'>
          {skills.map(({ title, value, experience }, index) => (
            <BorderLinearProgress
              key={index}
              variant='determinate'
              title={title}
              value={value}
              experience={experience}
              style={{ height: 10, backgroundColor: '#000', borderRadius: 10, color: '#fff' }}
              color='secondary'
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default DeveloperSideBar

DeveloperSideBar.propTypes = {
  icons: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
}
