import './Nav.css';

function Nav() {
    return(<nav>
        <div className="page-links">
            <span>
                <a href="#">HOME</a>
            </span>            
            <span>
                <a href="#">SONGS</a>
            </span>
            <span>
                <a href="#">LISTS</a>
            </span>
        </div>
        <section className="search">
            <form action="#">
                <input type="text" name="search-bar" />
                <input type="submit" value="Search" className="action"/>
            </form>
        </section>
        <div className="user-management-links">
            <span>
                <a href="#">SIGN IN</a>
            </span>
            <span>
                <a href="#">CREATE ACCOUNT</a>
            </span>
        </div>
    </nav>);
}

export default Nav;