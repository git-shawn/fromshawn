import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "@/styles/Nav.module.css";
import { HiOutlineMenuAlt2, HiX } from "react-icons/hi";


const MENU_ITEMS = [
    { text: "Home", href: "/" },
    { text: "Resume", href: "/resume" },
    { text: "Contact Me", href: "/contact" },
];

/**
 * A navigation bar with links to primary pages.
 * @returns The navigation bar view.
 */
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter()

    return (
        <header>
            <nav className={styles["nav"]}>
                <Link href={"/"}>
                    <h1 className={styles["nav-logo"]}>Shawn Davis</h1>
                </Link>
                {menuOpen ?
                    <HiX
                        className={` ${styles["nav-list-item"]} ${styles["hamburger"]}`}
                        onClick={() => { setMenuOpen(false) }}
                    /> :
                    <HiOutlineMenuAlt2
                        className={` ${styles["nav-list-item"]} ${styles["hamburger"]}`}
                        onClick={() => { setMenuOpen(true) }}
                    />
                }
                <div className={`${styles["nav-list"]} ${menuOpen ? styles["sidebar"] : ""}`}>
                    {MENU_ITEMS.map((menu, id) => (
                        <Link
                            key={menu.text}
                            href={menu.href}
                            className={`${styles["nav-list-item"]} ${router.pathname == menu.href ? `${styles["active"]}` : ""}`}
                        >
                            {menu.text}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;