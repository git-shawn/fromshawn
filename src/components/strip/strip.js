// src/components/strip/strip.js

import styles from './strip.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function Strip() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.text}>
                <p>Support Colorado Communities</p>
                <p className={styles.detail}>Protect Aurora, CO renters by donating to the East Colfax Community Collective.<br></br><a href="https://eastcolfaxcc.org/what-we-do-1/">Learn more about their mission.</a></p>
                </div>
                <a href="https://secure.everyaction.com/-ztYAO5u6UuSglSlpriZEQ2" rel="nofollow" className={styles.outbound}>
                        DONATE <AiOutlineArrowRight />
                </a>
            </div>
        </>
    )
}