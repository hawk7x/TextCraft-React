import React from 'react' // just type  "rfc"  to automatically create React function based component
import PropTypes from 'prop-types'  /* proptypes (to check for an error of type of the props)*/

export default function Navbar(props) {
    console.log(props.title, props.aboutText);
  return (
    <div>
        <nav className="navbar navbar-dark bg-dark">  {/* navbar-dark bg-dark */}
            <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>  {/* props */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">{props.aboutText}</a> {/* props */}
                </li>
                </ul>
                {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>   "btn btn-primary" - is green"
                </form> */}
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