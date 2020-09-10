import React, {useEffect} from "react";
import {toggleSidenav} from "../js/toggle-sidenav";

function Header() {
    useEffect(() => {

    });

    return (<header id="header-main" className="header fixed-top border-bottom">
        {/*<!-- Nav -->*/}
        <nav id="navbar-main" className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                {/*<!-- Brand logo -->*/}
                <a className="navbar-brand" href="../docs/index.html">
                    <img alt="logo" src="../assets/img/brand/dark.png" id="navbar-logo"
                         style={{width: 120}}/>
                </a>
                {/*<!-- Sidenav toggler -->*/}
                <button className="sidenav-toggler ml-auto mr-3" type="button" data-target="#sidenav-main" data-action={""} onClick={toggleSidenav}>
                    <div className="sidenav-toggler-inner">
                        <i className="sidenav-toggler-line"></i>
                        <i className="sidenav-toggler-line"></i>
                        <i className="sidenav-toggler-line"></i>
                    </div>
                </button>
                {/* <!-- Search form --> */}
                <form className="navbar-search navbar-search-dark form-inline mr-sm-3 d-none" id="navbar-search-main">
                    <div className="form-group mb-0">
                        <div className="input-group input-group-merge">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-search"></i></span>
                            </div>
                            <input className="form-control" placeholder="Search" type="text"/>
                        </div>
                    </div>
                    <button type="button" className="close" data-action="search-close" data-target="#navbar-search-main"
                            aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </form>
                {/* <!-- Navbar --> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="../docs/getting-started/installation.html">Getting started</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="../docs/components/index.html">Components</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="../docs/changelog.html">What's new</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="../docs/support.html">Support</a>
                        </li>
                    </ul>
                    <a href="../index.html" className="btn btn-sm btn-primary btn-icon d-none d-lg-inline-flex">
                        <span className="btn-inner--icon"><i className="fas fa-eye"></i></span>
                        <span className="btn-inner--text">Live preview</span>
                    </a>
                </div>
            </div>
        </nav>
    </header>)
}

export default Header;