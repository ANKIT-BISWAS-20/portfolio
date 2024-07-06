import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function NavbarMy({ darkMode, setDarkMode }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activeLink, setActiveLink] = React.useState(localStorage.getItem("activeLink") || "Home");

    const changeMode = () => {
        localStorage.setItem("darkMode", !darkMode);
        setDarkMode(!darkMode);
    };

    const menuItems = [
        "Home",
        "About",
        "Achievements",
        "Projects",
    ];

    const smoothScrollTo = (targetPosition) => {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let start = null;

        window.requestAnimationFrame(function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const progressRatio = Math.min(progress / duration, 1);
            const ease = progressRatio * (2 - progressRatio);
            window.scrollTo(0, startPosition + distance * ease);
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        });
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
        localStorage.setItem("activeLink", link);
        setIsMenuOpen(false);

        const section = document.getElementById(link);
        console.log('Section:', section, 'Link:', link); // Debugging statement
        if (section) {
            const targetPosition = section.offsetTop;
            smoothScrollTo(targetPosition);
        } else {
            console.error(`No section found with ID: ${link}`);
        }
    };

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className={`border-b-1 ${darkMode ? "border-gray-500" : "border-violet-400"}`}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="start">
                <NavbarBrand>
                    <h1 className="text-xl font-bold">Ankit Biswas</h1>
                </NavbarBrand>
                <NavbarItem>
                    <Button as={Link} color="foreground" href="#" variant="flat">
                        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="xl" onClick={changeMode} />
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-6">
                <NavbarBrand className="mr-auto">
                    <h1 className="text-xl font-mono">Ankit Biswas</h1>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end" className="hidden sm:flex ml-auto sm:gap-8">
                {menuItems.map((item) => (
                    <NavbarItem key={item} isActive={activeLink === item}>
                        <Link href="#" onClick={() => handleLinkClick(item)} aria-current={activeLink === item ? "page" : undefined} color={activeLink !== item ? "foreground" : undefined}>
                            {item}
                        </Link>
                    </NavbarItem>
                ))}
                <NavbarItem>
                    <Button as={Link} color="foreground" href="#" variant="flat" onClick={changeMode}>
                        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="xl" />
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className={`w-full ${activeLink === item ? "active" : ""}`}
                            color={"foreground"}
                            href="#"
                            size="lg"
                            onClick={() => handleLinkClick(item)}
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
