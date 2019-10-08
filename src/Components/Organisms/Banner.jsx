import React from 'react'

const Banner = () => {
    return (
        <div className="main-banner img-container l-section" id="main-banner">
            <div className="ed-grid lg-grid-6">
                <div className="lg-cols-4 lg-x-2">
                    <img className="main-banner__img" alt="Banner" src="https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
                    <div className="main-banner__data s-center">
                        <p className="t2 s-mb-0">Learning React</p>
                        <p> You can do it! </p>
                        <a href="/" className="button second-color">Dream</a>
                    </div>
                    <ul>
                        <li>Router</li>
                        <li>APIs</li>
                        <li>Hooks</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Banner