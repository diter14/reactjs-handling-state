import React from 'react'
import '../styles/app.scss'
import Routes from './Routes'
import { Provider } from 'react-redux'
import store from '../store'

const App = () => (
    <Provider store={store}>
        <Routes/>
    </Provider>
)

export default App