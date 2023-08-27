// src/components/buttons/button.js

import Link from 'next/link';
import styles from './buttons.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function Button({children, href, outbound = false}) {
    return (
        <Link
            className={`${styles.button} ${outbound ? styles.outbound : ""}`}
            href={href}
            rel={outbound ? "nofollow" : null}
        >
            {children}

            {outbound &&
                <AiOutlineArrowRight />
            }
        </Link>
    )
}