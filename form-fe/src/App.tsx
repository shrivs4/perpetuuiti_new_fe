import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PageLayout from './pages/PageLayout'
import CandidateForm from './pages/CandidateForm'
import CandidateDetails from './pages/CandidateDetails'
import LoginPage from './pages/LoginPage'
import { useState } from 'react'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageLayout />}>
        <Route path = '/' element= {<LoginPage />} />
        <Route path = '/candidateDetails' element={<CandidateDetails />} />
        <Route path='/candidateForm/:id' element={<CandidateForm />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
