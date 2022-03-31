import './App.css'
import './static/css/styles.css'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import ResumePage from './pages/ResumePage'

const theme = createTheme({
  palette: {
    primary: {
      light: '#2196f3',
      main: '#3f51b5',
      dark: '#2c387e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff9100',
      main: '#E25115',
      dark: '#ba000d',
      contrastText: '#b22a00',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Nav />
        <main className='mt-24'>
          <Router>
            <Routes>
              <Route path='/resume' element={<ResumePage />} />
              <Route path='/' exact element={<HomePage />} />
            </Routes>
          </Router>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
