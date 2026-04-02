import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/about.jsx'
import ServicesPage from './pages/services.jsx'
import ContactPage from './pages/contact.jsx'
import ContainerPage from './pages/container.jsx'
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout.jsx'
import CabinetDocuments from './pages/cabinet-documents.jsx'
import KitchenRemodelChecklist from './pages/kitchen-remodel-checklist.jsx'
import CabinetColorsGuide from './pages/cabinet-color-guide.jsx'
import ShakerVsEuropeanCabinets from './pages/shaker-vs-euro-cabinets.jsx'
import SoftCloseHingesGuide from './pages/soft-close-hinges-explained.jsx'
import CabinetStorageFeatures from './pages/cabinet-storage-features.jsx'
import LandingPage from './pages/landing.jsx'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<LandingPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='services' element={<ServicesPage />} />
        <Route path='container' element={<ContainerPage />} />
        <Route path='homePage' element={<HomePage />} />
        <Route path='cabinet-documents' element={<CabinetDocuments />} />
        <Route path='kitchen-remodel-checklist' element={<KitchenRemodelChecklist />} />
        <Route path='cabinet-color-guide' element={<CabinetColorsGuide />} />
        <Route path='shaker-vs-euro-cabinets' element={<ShakerVsEuropeanCabinets />} />
        <Route path='soft-close-hinges-explained' element={<SoftCloseHingesGuide />} />
        <Route path='cabinet-storage-features' element={<CabinetStorageFeatures/>} />
      </Route>
    )
  )
  
  return (
    <RouterProvider router={router}/>
    )
}

export default App
