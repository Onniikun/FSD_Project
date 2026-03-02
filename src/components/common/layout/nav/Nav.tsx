import './Nav.css';
// documentation for useNavigate: https://reactrouter.com/api/hooks/useNavigate
// documentation for useLocation: https://reactrouter.com/api/hooks/useLocation
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useFormField } from "../../../../hooks/useFormField";
// file will be impl. after, messed up and been working on 1 branch for too long
import * as DiscoveryService from "../../../../services/discoveryService";
import { useEffect } from "react";

export function Nav() {
    const navigate = useNavigate();
    const location = useLocation();

    const searchField = useFormField("", DiscoveryService.validateSearchQuery);

    useEffect(() => {
        searchField.reset();
    }, [location.pathname]);

    return(
    <nav>
        
        <div className="page-links">
            <NavLink to="/" end>
                HOME
            </NavLink>
            <NavLink to="/songs" end>
                SONGS
            </NavLink>
            <NavLink to="/lists" end>
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
            <form 
                onSubmit={(e) => {
                e.preventDefault();

                const ok = searchField.validateNow();
                if (!ok) return;

                // route to /songs with query param
                navigate(`/songs?query=${encodeURIComponent(searchField.value)}`);
                }}
            >
                <input
                type="text"
                aria-label="search-bar"
                value={searchField.value}
                onChange={(e) => searchField.onChange(e.target.value)}
                onBlur={searchField.onBlur}
                />

                <button type="submit" aria-label="search-button">
                <i className="fa fa-search"></i>
                </button>
            </form>
                {searchField.touched && searchField.errors[0] && (
                    <div className="error">{searchField.errors[0]}</div>
                )}
        </section>
    </nav>);
}