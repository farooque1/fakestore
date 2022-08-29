import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
                <div className="container">
                    <Link to="/" className="navbar-brand fw-bold fs-4" >EStore</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" > About </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" > Product </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-dark me-1">
                                <i className='fa fa-shopping-cart fa-1x'></i> Cart (10)
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
