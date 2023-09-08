// src/components/footer/footer.js

import styles from './footer.module.css';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import SocialButtons from '../buttons/social';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                © 2023 Shawn Davis. Made in Denver, CO
                <br />
                Browse this site's source code on <Link href="https://github.com/git-shawn/fromshawndev" title="GitHub" rel="nofollow">GitHub</Link>
                <br />
                Hosted on <Link href="https://vercel.com/" rel="nofollow">Vercel</Link> | <Link href="/privacy">Privacy Policy</Link>
            </p>

            <div className={styles.social}>
                <SocialButtons />
            </div>
        </footer>
    )
}