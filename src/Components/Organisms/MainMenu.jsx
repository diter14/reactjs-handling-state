import React from 'react'
import { NavLink } from 'react-router-dom'

const MainMenu = (props) => {
    return (
        <header className="main-header">
            <div className="ed-grid s-grid-5 lg-grid-4">
                <div className="s-cols-4 lg-cols-1 s-cross-center">
                    <a href="/">
                        <img className="main-logo" src="https://ux.ed.team/img/edteam-ux-logo.svg" alt="Main Logo"/>
                    </a>
                </div>
                <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
                    <nav className="main-menu" id="main-menu">
                        <ul>
                            <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
                            <li><NavLink to="/cursos" activeClassName="active">Courses</NavLink></li>
                            <li><NavLink to="/formulario" activeClassName="active">Form</NavLink></li>
                            <li><NavLink to="/historial" activeClassName="active">History</NavLink></li>
                            <li><NavLink to="/usuarios" activeClassName="active">Users</NavLink></li>
                        </ul>
                    </nav>
                    <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
                </div>
            </div>
        </header>        
    )
}

export default MainMenu