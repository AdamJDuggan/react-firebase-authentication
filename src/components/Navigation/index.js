import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
const Navigation = () => (
    <div>
        <ul className="navbar is-link " role="navigation" aria-label="main navigation">
            <div className="navbar-menu">
                <div id="navbarBasicExample" class="navbar-menu">
                    <li className="navbar-item">
                        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to={ROUTES.LANDING}>Landing</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to={ROUTES.HOME}>Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to={ROUTES.ACCOUNT}>Account</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to={ROUTES.ADMIN}>Admin</Link>
                    </li>
                </div>
            </div>
        </ul>
    </div>
);
export default Navigation;