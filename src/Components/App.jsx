import React from 'react'
import '../styles/app.scss'
import CoursesProvider from './../Context/CoursesProvider'
import CartProvider from './../Context/Cart/CartProvider'
import AppRoutes from './AppRoutes'

const App = () => (
    <CoursesProvider>
        <CartProvider>
            <AppRoutes></AppRoutes>
        </CartProvider>
    </CoursesProvider>
)

export default App