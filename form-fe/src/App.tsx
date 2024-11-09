import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PageLayout from './pages/PageLayout'
import CandidateForm from './pages/CandidateForm'
import CandidateDetails from './pages/CandidateDetails'
import LoginPage from './pages/LoginPage'
import { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material'

function App() {

  const theme = createTheme();
  
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageLayout />}>
        <Route path = '/' element= {<LoginPage />} />
        <Route path = '/candidateDetails' element={<CandidateDetails />} />
        <Route path='/candidateForm/:id' element={<CandidateForm />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
