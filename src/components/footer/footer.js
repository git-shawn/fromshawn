// src/components/footer/footer.js

import styles from './footer.module.css';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import SocialButtons from '../buttons/social';
import Button from '../buttons/button';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                © 2023 Shawn Davis. Made in Denver, CO
                <br />
                Browse this site's source code on <Button href="https://github.com/git-shawn/fromshawndev" outbound plain>GitHub</Button>
                <br />
                Hosted on <Button href="https://vercel.com/" outbound plain>Vercel</Button> | <Link href="/privacy">Privacy Policy</Link>
            </p>

            <div className={styles.social}>
                <SocialButtons />
            </div>
        </footer>
    )
}