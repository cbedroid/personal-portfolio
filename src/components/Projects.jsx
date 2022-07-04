import ProjectCard from './subcomponents/ProjectCard'
import React from 'react'

const Projects = () => {
  const dataArr = [
    {
      id: 1,
      name: 'E-Commerce Landing Page',
      src: '/assets/videos/landing-page-video.webm',
      tech: ['HTML', 'CSS', 'Javascript'],
      description:
        'This is a landing page for a fictional e-commerce website. It is a single page application that allows users to view products, add items to their cart, and checkout.',
      link: 'https://cbedroid.github.io/LandingPage/',
    },
    {
      id: 2,
      name: 'Software Engineer Survey',
      src: '/assets/videos/surveypage-video.webm',
      tech: ['HTML', 'CSS', 'Javascript'],
      description:
        'This is a single-page survey page that allows users to take a survey about software engineering roles and experiences as a software engineer.',
      link: 'https://cbedroid.github.io/Survey-Page/',
    },
    {
      id: 3,
      name: 'TedText - Texting Educational Data ',
      tech: ['Python', 'Django', 'React', 'Postgres', 'Docker'],
      description:
        'A fully functional web application and Restful API with a Django backend and React frontend. This application allow educators to measure learning effectiveness and monitor the progress of their students by create educational assessments for students to take via text messaging.',
      src: '/assets/videos/tedtext-web-video.webm',
      link: null,
    },
    {
      id: 4,
      name: 'NoworNever Music Website',
      src: '/assets/videos/nowornever-web-video.webm',
      tech: ['Python', 'Django', 'Docker'],
      description:
        'A music website designed for musicians to share their music and showcase their work. It allows users to create an account and upload songs, as well as search for songs by artist, genre, and title. This website was built using the latest technologies such as Django, Python, and Docker.',
      link: 'https://countrycuzzins.herokuapp.com/',
    },
    {
      id: 5,
      name: 'Uber Passenger App',
      tech: ['Expo', 'ReactNative', 'Redux', 'Firebase', 'Tailwind'],
      description:
        'An Uber Passenger App clone built using latest version of React Native, Redux, and Firebase. Compatible with both iOS and Android devices, this application consist of a fully functional authentication system that allow users the ability to create an account, login, and logout. This app uses Google API service such as Google Maps,Google Place and Directional Api that allows user the ability to safely request a ride and pick spot to their pin-point location. User allow can view the status of their ride, and save ride history.',
      src: '/assets/videos/uber-mobile-video.webm',
      link: 'https://github.com/cbedroid/Uber-Clone',
    },
    {
      id: 6,
      name: 'Vue Weather App',
      tech: ['Vue', 'Javascript'],
      src: '/assets/videos/vue-weather-video.webm',
      description:
        'A weather application built using modern es6 Javascript and VueJs that fetches real-time weather forecast and weather alerts from OpenWeatherMap API services. This application allow users to search for weekly, daily, and hourly weather forecast by city name, state, or zip code.',
      link: 'https://cbedroid.github.io/vue-weather-app/',
    },
  ]

  return (
    <section id='projects' className='bg-gray-800 text-white min-h-screen'>
      <div className='container mx-auto'>
        <div className='content-wrapper sm:w-2/3 mx-auto px-4 md:px-0'>
          <div className='header text-gray-400 border-b-2 border-orange-500 w-64 pb-2 mb-8'>
            <h2 className='text-3xl text-gray-400 font-bold mb-2'>My Work</h2>
            <h4>Some of my projects</h4>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto'>
            {dataArr.map((data, index) => (
              <ProjectCard key={index} src={data.src} {...data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
