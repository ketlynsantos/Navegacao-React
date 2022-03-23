import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

export default (props) => {
    return (
        <aside className="menu">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Sobre</Link></li>
                    <li><Link to="/param/01">Param #01</Link></li>
                    <li><Link to="/param/02">Param #02</Link></li>
                    <li><Link to="/nãoexiste">Não Existe</Link></li>
                </ul>
            </nav>
        </aside>
    )
}