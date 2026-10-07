import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default function index() {
  return (

    <nav>
        <ul className="menu">
          <li>
            <Link to='/'>
                Home
            </Link>
          </li>

        </ul>
      </nav> 

  )
}
