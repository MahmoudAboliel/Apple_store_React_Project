import React from 'react';
import './Header.css';
import logo from '../../assets/images/apple.svg';
import search from '../../assets/images/search.svg';
import bag from '../../assets/images/bag.svg';
const Header = () => {

    const Page = {
        Store: "/#",
        Mac: "/#",
        iPhone: "/#",
        Support: "/#"
    };
    const Pages = Object.entries(Page);

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <img className='logo-icon' src={logo} alt='logo' />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {
                                Pages.map(([key, value], index) => 
                                        <li className="nav-item" key={key}>
                                            <a className={`nav-link ${index === 0 && "active"}`} href={value}>{key}</a>
                                        </li>
                                    )}
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2 search-field" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn " type="submit"><img className='search-icon' src={search} alt='search' /></button>
                                <button className='btn'><img className='bag-icon' src={bag} alt='bag' /></button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;