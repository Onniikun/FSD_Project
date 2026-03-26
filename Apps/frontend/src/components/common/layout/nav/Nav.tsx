import { NavLink } from "react-router";
import './Nav.css';

export function Nav() {
    return(
    <nav>
        <div className="page-links">
            <NavLink to="/" end>
                HOME
            </NavLink>
            <NavLink to="/songs" end>
                SONGS
            </NavLink>
            <NavLink to="/songlists" end>
                LISTS
            </NavLink>
            <NavLink to="/reviews" end>
                REVIEWS
            </NavLink>
        </div>
        <div className="user-management-links">
            <span>
                <a href="#">SIGN IN</a>
            </span>
            <span>
                <a href="#">CREATE ACCOUNT</a>
            </span>
        </div>
        <section className="search">
            <form action="#">
                <input type="text" aria-label="search-bar" />
                <button type="submit" aria-label="search-button">
                    <i className="fa fa-search"></i>
                </button>
            </form>
        </section>
    </nav>);
}