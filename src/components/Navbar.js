import React from 'react'
import PropTypes from 'prop-types'
import '../Navbar.css';


export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode.color} bg-${props.mode.color}`}>
      <div className={`container-fluid ${props.mode.color}`}>
        <a className={`navbar-brand ${props.mode.color}`} href="/">{props.Title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">{props.Home}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.About}</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">Disabled</a>
            </li>
          </ul>
          <div className={`form-check form-switch`}>
            <input className="form-check-input" onClick={props.togglemode} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle dark</label>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control mx-3" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Success</strong> You should check in on some of those fields below.
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
      </div>
    </>
  )
}

Navbar.propTypes = {
    Title: PropTypes.string.isRequired,     // This define types of props to be specific
    Home: PropTypes.string,
    About: PropTypes.string
}

Navbar.defaultProps = {
    Title: 'Default title'     // Default value for props, if not sent. The type evaluation is done, only when its actually loaded(i.e. not sent)
}
