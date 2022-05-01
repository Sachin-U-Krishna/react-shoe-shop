import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    function Submit(e) {
        e.preventDefault()
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark mt-3">
            <div className="container">
                <Link className="navbar-brand" to="/">LOGO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex offset-1" onSubmit={Submit}>
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" id='search' />
                        <button className="btn btn-light" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item pe-2">
                            <Link className="nav-link" aria-current="page" to="/men">MEN</Link>
                        </li>
                        <li className="nav-item pe-2">
                            <Link className="nav-link" to="/err">WOMEN</Link>
                        </li>
                        <li className="nav-item pe-2">
                            <Link className="nav-link" to="/err">KIDS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/err">COLLECTIONS</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
