// src/components/buttons/button.js

import Link from 'next/link';
import styles from './buttons.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function Button({children, href, outbound = false, plain = false}) {
    return (
        <Link
            className={`${plain ? "" : styles.button} ${outbound ? styles.outbound : ""}`}
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