import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
       <nav className="nav">
            <a className="nav_link nav_link-home active" href="#">Home</a>
            
            <a className="nav_link" href="#">Contact</a>
            <a className="nav_link" href="#">Products</a>
            <a className="nav_link" href="#">News</a>

            <button 
                className="nav_link nav_link-menu" 
                aria-label="Menu"
                aria-expanded={menuOpen}
                onClick={toggleMobileMenu}
            >
                <svg className="svg-inline--fa fa-bars" data-prefix="fas" data-icon="bars" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"></path></svg>
            </button>

            {menuOpen && (
                <div className="nav-mobile">
                    <a className="nav-mobile_link" href="#">Contact</a>
                    <a className="nav-mobile_link" href="#">Products</a>
                    <a className="nav-mobile_link" href="#">News</a>
                </div>
            )}
            
        </nav>
    );
};

export default Header;