import { useState } from 'react';
import routes from '../content/routes';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    console.log(menuOpen);
    return (
        <header className="wrapper header">
            <nav>
                <a href="/">
                    <img src="/images/Logo.svg" alt="Logo" />
                </a>
            </nav>
            <nav className='header-right'>
                <ul className={`header-right__ul ${menuOpen ? "visible" : ""}`}>
                    {routes.map(route => {
                        return (
                            <li key={route.title}>
                                <a href={route.route}>{route.title}</a>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile nav bar */}
                <div className='header-right__mobile' onClick={toggleMenu}>
                    <img src="/images/burger-menu-icon.svg" alt="Menu" />
                </div>
            </nav>
        </header>
    );
}

export default Header;