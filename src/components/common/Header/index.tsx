import { useEffect, useState } from "react";
import { assets } from "../../../utils/exports/directories/assets";
import { Button } from "../../UI/Button";
import { Link, useLocation } from "react-router-dom";
import { AnimatedBox } from "../Animated/AnimatedBox";

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
        // Закрываем меню при клике на ссылку
        if (isMobileView) {
            setIsMenuOpen(false);
        }
    };

    // Определяем варианты анимации для меню
    const menuVariants = {
        open: {
            opacity: 1,
            height: 'auto',
            transition: { duration: 0.5 },
        },
        closed: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.5 },
        },
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
                        <AnimatedBox
                            initial={isMenuOpen ? { opacity: 0, height: 0 } : { opacity: 1, height: 'auto' }}
                            animate={isMenuOpen ? { opacity: 1, height: 'auto' } :  { opacity: 0, height: 0 }}
                            variants={menuVariants}
                            transition={{ duration: 1 }}
                            className="mobile-menu"
                        >
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
                        </AnimatedBox>
                    </>
                )}
            </div>
        </header>
    );
};
