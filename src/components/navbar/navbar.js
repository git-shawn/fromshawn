// src/components/navbar/navbar.js

'use client';

import styles from './navbar.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Burger } from './burger';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';

export default function Navbar() {
    const [isBurgerOpen, setBurgerOpen] = useState(false);
    const { buttonProps, itemProps, isOpen } = useDropdownMenu(3);
    const path = usePathname();
    
    const toggleBurger = () => {
        setBurgerOpen(!isBurgerOpen);
    }

    useEffect(() => {
        setBurgerOpen(false);
    }, [path]);

    return (
        <>
        <nav className={styles.nav}>
            <div className={styles.title}>
                <Link href="/">
                    shawn
                </Link>
                <motion.div
                    initial={false}
                    animate={isBurgerOpen ? "open" : "closed"}
                >
                    <Burger toggle={() => toggleBurger()} />
                </motion.div>
            </div>

            <ul
                className={isBurgerOpen ? styles.open : ""}
            >
                <li>
                    <Link href="/">
                        HOME
                    </Link>
                </li>
                <li>
                    <button {...buttonProps} type='button'>
                        APPS
                    </button>
                </li>
                <li>
                    <Link href="/blog">
                        BLOG
                    </Link>
                </li>
                <li className={styles.outbound}>
                    <a href="mailto:contact@fromshawn.dev" rel="nofollow">
                        EMAIL ME <AiOutlineArrowRight />
                    </a>
                </li>
            </ul>
        </nav>
        <div className={`${styles.dropMenu} ${isOpen ? styles.visible : ""}`} role='menu'>
            <Link {...itemProps[0]} href="/qrpop">QR Pop</Link>
            <Link {...itemProps[1]} href="/rerouter">Rerouter</Link>
            <Link {...itemProps[2]} href="https://www.salukiadlab.com/post/the-daily-egyptian" rel="nofollow" className={styles.outbound}>Daily Egyptian <AiOutlineArrowRight /></Link>
        </div>
        </>
    )
}