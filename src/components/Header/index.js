import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation();
  console.log(location.pathname)
  const navLinkItem = [
    {
      path: '/products',
      text: 'Products'
    },
    {
      path: '/cart',
      text: 'Cart'
    },
  ]

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Foodyoow</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
              navLinkItem.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link className={`nav-link ${location.pathname === item.path && 'active'}`}  to={item.path}>{item.text}</Link>
                </li>
              ))
            }
          </ul>
          <a className={`nav-link ${location.pathname === '/login'}`}aria-current="page" href="/login">Login</a>
        </div>
      </div>
    </nav>
  )
}

export default Header