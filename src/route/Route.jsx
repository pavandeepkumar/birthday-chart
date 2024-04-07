import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponents from '../components/HomeComponets/HomeComponents'

const RouteComponents = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeComponents />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteComponents