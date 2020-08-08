import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { NavDropdown } from "react-bootstrap";

function Nav() {
    return (
        <nav className="bg-dark">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link
                        to="/"
                        className={window.location.pathname === "/" ? "nav-link" : "nav-link"}
                    >
                        Home <i class="fas fa-home"></i>
                    </Link>
                </li>
                <NavDropdown title="Books" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/books">Books Home <i class="fas fa-book"></i></NavDropdown.Item>
                    <NavDropdown.Item href="/books/search">Search <i class="fas fa-search"></i></NavDropdown.Item>
                    <NavDropdown.Item href="/books/saved">Saved <i class="far fa-save"></i></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Movies" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/movies">Movies Home <i class="fas fa-video"></i></NavDropdown.Item>
                    <NavDropdown.Item href="/movies/search">Search <i class="fas fa-search"></i></NavDropdown.Item>
                    <NavDropdown.Item href="/movies/saved">Saved <i class="far fa-save"></i></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Music" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/music">Music Home <i class="fas fa-music"></i></NavDropdown.Item>
                    <NavDropdown.Item href="/music/search">Search <i class="fas fa-search"></i></NavDropdown.Item>
                    <NavDropdown.Item href="/music/saved">Saved <i class="far fa-save"></i></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Meals" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/meals">Meals Home <i class="fas fa-utensils"></i></NavDropdown.Item>
                    <NavDropdown.Item href="/meals/search">Search <i class="fas fa-search"></i></NavDropdown.Item>
                    <NavDropdown.Item href="/meals/saved">Saved <i class="far fa-save"></i></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Drinks" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/drinks">Drinks Home <i class="fas fa-cocktail"></i></NavDropdown.Item>
                    <NavDropdown.Item href="/drinks/search">Search <i class="fas fa-search"></i></NavDropdown.Item>
                    <NavDropdown.Item href="/drinks/saved">Saved <i class="far fa-save"></i></NavDropdown.Item>
                </NavDropdown>
                <li className="nav-item logout">
                    <Link
                        to="/"
                        className={window.location.pathname === "/" ? "nav-link" : "nav-link"}
                    >
                        Logout <i class="fas fa-sign-out-alt"></i>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;