import { NavLink } from "react-router";
import './Nav.css';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';

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
            <SignedOut>
                <span>
                    <SignInButton mode="modal">
                        <button className="nav-btn">SIGN IN</button>
                    </SignInButton>
                </span>
            </SignedOut>
                <span>
                    <SignUpButton mode="modal">
                        <button className="nav-btn">CREATE AN ACCOUNT</button>
                    </SignUpButton>
                </span>
            <SignedIn>
                <UserButton/>
            </SignedIn>
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