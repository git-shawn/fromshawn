// src/components/navbar/navbar.js

'use client';

import styles from './navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineArrowRight, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Burger } from './burger';

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);
    const toggleBurger = () => {
        setOpen(!isOpen);
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.title}>
                <Link href="/">
                    shawn
                </Link>
                <motion.div
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                >
                    <Burger toggle={() => toggleBurger()} />
                </motion.div>
            </div>

            <ul
                className={isOpen ? styles.open : ""}
            >
                <li>
                    <Link href="/">
                        HOME
                    </Link>
                </li>
                <li>
                    <Link href="/#apps" rel="nofollow">
                        APPS
                    </Link>
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
    )
}