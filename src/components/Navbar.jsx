import React from 'react'
import { formatNumber } from '../assets/utils/formatNumber'
const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <a className="navbar-brand me-3" href="#">Pizzería Mamma Mia!</a> 
                    <ul className="navbar-nav flex-row"> 
                        <li className="nav-item me-1"> 
                            <button className="btn btn-outline-light btn-sm d-flex align-items-center">
                                🍕Home
                            </button>
                        </li>
                        {token ? (
                            <>
                                <li className="nav-item me-1">
                                    <button className="btn btn-outline-light btn-sm d-flex align-items-center">
                                        🔓Profile
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-outline-light btn-sm d-flex align-items-center">
                                        🔒Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item me-1">
                                    <button className="btn btn-outline-light btn-sm d-flex align-items-center">
                                        🔐Login
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-outline-light btn-sm d-flex align-items-center">
                                        🔐Register
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

        
                <div className="navbar-text ms-auto"> 
                    <button className="btn btn-info btn-sm total-btn"> 
                        🛒 Total: ${formatNumber(total)}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar