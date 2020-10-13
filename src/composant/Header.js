import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary mb-3 py-0">
                <div className='container'>
                    <a href="/" className='navbar-brand'>
                    App Contact
                    </a>
                    <ul className="navbar-nav d-inline-block">
                        <li className="nav-item ml-auto d-inline-block mr-3">
                            <Link to="/liste" className="nav-link">Accueil</Link>
                        </li>
                        <li className="nav-item ml-auto d-inline-block mr-3">
                            <Link to="/input" className="nav-link">Ajouter</Link>
                        </li>
                        <li className="nav-item ml-auto d-inline-block mr-3">
                            <Link to="/apropos" className="nav-link ">À propos</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
