import './App.css';


function Header() {
    return (
        <header className="top">
            <div className="top-sub">
                <div className="top-sub-item">
                    <p>Phone: +01 256 25 235</p>
                </div>
                <div className="top-sub-item">
                    <p>Email: info@eiser.com</p>
                </div>
            </div>
            <div className="top-links">
                <a href="cart.html" className="top-link">Gift Card</a>
                <a href="tracking.html" className="top-link">Track Order</a>
                <a href="contact.html" className="top-link">Contact Us</a>
            </div>
            <nav className="nav">
                <div className="nav-logo">
                    <img 
                        src="https://themewagon.github.io/eiser/img/logo.png" 
                        alt="Eiser Logo" 
                    />
                </div>
                <ul className="nav-menu">
                    <li className="nav-item"><a href="#">Home</a></li>
                    <li className="nav-item"><a href="#">Shop</a></li>
                    <li className="nav-item"><a href="#">Blog</a></li>
                    <li className="nav-item"><a href="#">Pages</a></li>
                    <li className="nav-item"><a href="#">Contact</a></li>
                </ul>
                <div className="nav-icons">
                    <i className="fa-solid fa-magnifying-glass" aria-label="Search"></i>
                    <i className="fa-solid fa-cart-shopping" aria-label="Cart"></i>
                    <i className="fa-solid fa-person" aria-label="Profile"></i>
                    <i className="fa-regular fa-heart" aria-label="Favorites"></i>
                </div>
                <div className="nav-toggle">
                    <i className="fa-solid fa-bars" aria-label="Menu"></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;
