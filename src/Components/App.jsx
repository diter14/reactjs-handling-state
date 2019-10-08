import React from 'react'
import '../styles/app.scss'
import Home from './Pages/Home'
import Courses from './Pages/Courses'
import Course from './Pages/Course'
import Form from './Pages/Form'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainMenu from './Organisms/MainMenu'
import History from './Pages/History'
import User from './Pages/User'
import Public from './Pages/Public'
import Private from './Pages/Private'
import Files from './Pages/Files'
import Placeholder from './Pages/Placeholder'

const App = () => (
    <Router>
        <MainMenu/>
        <Switch>
            <Route path="/" exact component={ Home }/>
            <Route path="/public" exact component={ Public }/>
            <Route path="/private" exact component={ Private }/>
            <Route path="/files" exact component={ Files }/>
            <Route path="/placeholder" exact component={ Placeholder }/>
            <Route path="/cursos/:id" component={Course} />
            <Route path="/cursos" component={ Courses }/>
            <Route path="/historial" component={ History }/>
            <Route path="/usuarios" component={ User }/>
            <Route path="/formulario" component={ () => <Form title="Formulario de Contacto" /> }/>
            <Route component={ () =>{
                return (
                    <div className="ed-grid">
                        <h1 className="t1">ERROR 404</h1>
                        <p>Page not found</p>
                    </div>
                )
            } } />
        </Switch>
    </Router>
)

export default App