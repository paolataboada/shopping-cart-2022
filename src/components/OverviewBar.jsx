import React from 'react';
import { NavLink } from 'react-router-dom';

const OverviewBar = ({ cartProducts, showCart }) => {
    return (
        <div className='overview-bar'>
            <div className='responsive-menu'>
                <input type="checkbox" id="btn-hide-menu" />
                <label htmlFor="btn-hide-menu" type="button" className="btn btn-light px-2 py-1">
                    <i className="bi bi-list"></i>
                </label>
                <ul className="responsive-menu-list">
                    <li className="menu-options">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="menu-options">
                        <NavLink to="/history">History</NavLink>
                    </li>
                </ul>
            </div>

            <h4 className='mb-0 welcome-desktop'>Welcome</h4>
            <div className='welcome-mobile'>
                <p className='mb-0'>Welcome</p>
                <strong>User Guest</strong>
            </div>
            {
                showCart ?
                    <NavLink to="/cart" state={{ cartProducts }}>
                        <button type="button" className="btn btn-light btn-lg px-2 py-1 position-relative">
                            <i className="bi bi-cart3"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cartProducts.length}
                                <span className="visually-hidden">products in cart</span>
                            </span>
                        </button>
                    </NavLink> : ''
            }
        </div>
    )
}

export default OverviewBar;