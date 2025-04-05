import { useEffect, useState } from "react";
import { assets } from "../../utils/exports/directories/assets";
import { Button } from "../Button";

export const Header = () => {
    const [isMobileView, setIsMobileView] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const navItems = [
        'Home',
        'About Us',
        'Properties',
        'Services',
    ];

    useEffect(() => {
        const checkScreenWidth = () => {
            setIsMobileView(window.innerWidth <= 1280);
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

    return (
        <header>
            <div className="header-container">
                <img src={assets["Logo"]} alt="Company Logo" />
                
                {!isMobileView ? (
                    <>
                        <nav>
                            <ul className="header-items">
                                {navItems.map((item, index) => (
                                    <li key={index} className="header-item cursor-p header-items-text">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <Button variant="primary">
                            Contact Us
                        </Button>
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
                                        {navItems.map((item, index) => (
                                            <li key={index} className="mobile-header-item">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                <Button>
                                    Contact Us
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </header>
    );
};