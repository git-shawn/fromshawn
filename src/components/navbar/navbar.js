// src/components/navbar/navbar.js

'use client';

import styles from './navbar.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Burger } from './burger';
import DropDown from 'react-a11y-dropdown'

export default function Navbar() {
    const [isBurgerOpen, setBurgerOpen] = useState(false);
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
                <DropDown 
                label="APPS"
                useStyles={false}
                activeDropdownClassName={`${styles.dropMenu} ${isBurgerOpen ? "" : styles.hidden}`}
                >
                        <ul>
                            <li>
                                <Link href="/qrpop">QR Pop</Link>
                            </li>
                            <li>
                                <Link href="/rerouter">Rerouter</Link>
                            </li>
                            <li>
                                <Link href="https://www.salukiadlab.com/post/the-daily-egyptian" className={styles.outbound}>Daily Egyptian <AiOutlineArrowRight /></Link>
                            </li>
                        </ul>
                    </DropDown>
                </li>
                <li>
                    <Link href="https://medium.com/@shwndvs">
                        MEDIUM
                    </Link>
                </li>
                <li className={styles.outbound}>
                    <a href="mailto:contact@fromshawn.dev" rel="nofollow">
                        EMAIL ME <AiOutlineArrowRight />
                    </a>
                </li>
            </ul>
        </nav>
        </>
    )
}