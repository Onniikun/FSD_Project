import './Nav.css';

export function Nav() {
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