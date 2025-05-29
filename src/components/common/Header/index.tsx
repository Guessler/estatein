import { useEffect, useState } from "react";
import { assets } from "../../../utils/exports/directories/assets";
import { Button } from "../../UI/Button";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
    const [isMobileView, setIsMobileView] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const location = useLocation();

    const navItems = [
        { name: 'Home', id: '/' },
        { name: 'About Us', id: '/about-us' },
        { name: 'Properties', id: '/properties' },
        { name: 'Services', id: '/services' },
    ];

    useEffect(() => {
        const checkScreenWidth = () => {
            setIsMobileView(window.innerWidth <= 1596);
        };
        checkScreenWidth();

        window.addEventListener('resize', checkScreenWidth);
        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        if (location.pathname === path) {
            event.preventDefault();
        }
    };

    return (
        <header>
            <div className="header-container" style={{ position: "relative" }}>
                <img src={assets["Logo"]} alt="Company Logo" />

                {!isMobileView ? (
                    <>
                        <nav>
                            <ul className="header-items">
                                {navItems.map((item) => (
                                    <Link to={item.id} key={item.id} onClick={(event) => handleLinkClick(event, item.id)}>
                                        <li className="header-item cursor-p header-items-text">
                                            {item.name}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </nav>
                        <Link to={'/contacts'}>
                        <Button variant="primary">
                            Contact Us
                        </Button>
                        </Link>
                    </>
                ) : (
                    <>
                        <img
                            src={assets["burger"]}
                            alt="Menu"
                            className="burger-menu"
                            onClick={toggleMenu}
                        />
                        {isMenuOpen && (
                            <div className="mobile-menu">
                                <nav>
                                    <ul className="mobile-header-items">
                                        {navItems.map((item) => (
                                            <Link to={item.id} key={item.id} onClick={(event) => handleLinkClick(event, item.id)}>
                                                <li className="mobile-header-item header-items-text">
                                                    {item.name}
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        )}
                    </>
                )}
            </div>
        </header>
    );
};
