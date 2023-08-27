// src/components/buttons/social.js

import Link from 'next/link';
import styles from './buttons.module.css';
import { BsGithub, BsLinkedin, BsStackOverflow } from 'react-icons/bs';

export default function SocialButtons() {
    return (
        <div className={styles.flexRow}>
            <Link
                href="https://github.com/git-shawn"
                rel="nofollow"
                title="GitHub"
            >
                <BsGithub />
            </Link>

            <Link
                href="https://www.linkedin.com/in/shawnfdavis/"
                rel="nofollow"
                title="LinkedIn"
            >
                <BsLinkedin />
            </Link>

            <Link
                href="https://stackoverflow.com/users/20422552/shawn"
                rel="nofollow"
                title="StackOverflow"
            >
                <BsStackOverflow />
            </Link>
        </div>
    )
}