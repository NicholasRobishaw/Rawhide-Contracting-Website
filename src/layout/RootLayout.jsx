import React from 'react'
import NavBar from '../components/NavBar'
import FooterBar from '../components/Footer'
import { Outlet } from 'react-router'

const RootLayout = () => {
    return(
        <div>
            <NavBar />
            <div className="outlet">
                <Outlet />
            </div>
            <FooterBar />
        </div>
    )
}

export default RootLayout