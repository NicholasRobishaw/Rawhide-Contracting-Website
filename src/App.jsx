import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/about.jsx'
import ServicesPage from './pages/services.jsx'
import ContactPage from './pages/contact.jsx'
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout.jsx'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='services' element={<ServicesPage />} />
      </Route>
    )
  )
  
  return (
    <RouterProvider router={router}/>
    )
}

export default App
