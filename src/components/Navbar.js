import React from 'react' // just type  "rfc"  to automatically create React function based component
import PropTypes from 'prop-types'  /* proptypes (to check for an error of type of the props)*/
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    console.log(props.title, props.aboutText);
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>  {/* navbar-dark bg-dark           navbar-expand-lg - burger не будет появиться  */}
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>  {/* props */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">{props.aboutText}</Link> {/* props */}
                </li>
                </ul>
                {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>   "btn btn-primary" - is green"
                </form> */}
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggleMode}/>
                    <label className="form-check-label" htmlFor="switchCheckDefault">DarkMode</label>
                </div>
            </div>
            </div>
        </nav>
    </div>

  )
}

Navbar.propTypes = {    /* proptypes */
    title: PropTypes.string.isRequired,  // сделает title обязательным
    aboutText: PropTypes.string
}

Navbar.defaultProps = {  // default props
    title: "Set a title",
    aboutText: "Set a text"
};