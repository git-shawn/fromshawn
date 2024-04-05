// src/components/strip/strip.js

import styles from './strip.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function Strip() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.text}>
                <p>Support Colorado Immigrants</p>
                <p className={styles.detail}>Donate to the Rocky Mountain Immigration Advocacy Network</p>
                </div>
                <a href="https://www.rmian.org/donate" rel="nofollow" className={styles.outbound}>
                        DONATE <AiOutlineArrowRight />
                </a>
            </div>
        </>
    )
}