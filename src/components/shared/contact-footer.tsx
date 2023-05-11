// Based on this great tutorial by Josh Comeau
// https://www.joshwcomeau.com/react/animated-sparkles-in-react/
// Adapted for TypeScript / Removed `styled-component` dependency.

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import grid from '@/styles/GridLayout.module.css'
import { FaGithub, FaStackOverflow, FaLinkedin } from 'react-icons/fa';
import imageGradient from 'public/shared-assets/gradient-overlay.webp'

export default function FooterBox() {
    const squircleVariants: Variants = {
        offscreen: {
            opacity: 0,
            y: 50,
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1
            }
        }
    }

    return (
    <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}>
        <motion.div
            variants={squircleVariants}
            className={grid["row"]}>
            <div className={`${grid["item"]} ${grid["default-background"]}`}>
                <Image
                    src={imageGradient}
                    alt={""}
                    className={`${grid["cover-photo"]} ${grid["blended"]}`}
                />
                <div
                    style={{ zIndex: 1 }}
                    className={`${grid["spread-between"]} ${grid["padded"]} ${grid["footer-font"]}`}>
                    <h1>Ready to <span className='blackSyne'>connect</span>?</h1>
                    I'd love to hear from you! If you are interested in my work, would like to collaborate, or just want to say hello feel free to reach out.

                    <div className={`${grid["button-row"]}`}>
                        <Link
                            href="/contact"
                            className={`${grid["pill-button"]} hideMobile`}>
                            Contact Me
                        </Link>
                        <a
                            href="https://www.github.com/git-shawn"
                            aria-label="GitHub"
                            className={`${grid["circular-material-button"]} ${grid["black"]}`}>
                            <FaGithub className={`${grid["circular-material-button-icon"]}`} />
                        </a>
                        <a
                            href="https://stackoverflow.com/users/20422552/shawn"
                            aria-label="StackOverflow"
                            className={`${grid["circular-material-button"]} ${grid["orange"]}`}>
                            <FaStackOverflow className={`${grid["circular-material-button-icon"]}`} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/shawnfdavis/"
                            aria-label="LinkedIn"
                            className={`${grid["circular-material-button"]} ${grid["blue"]}`}>
                            <FaLinkedin className={`${grid["circular-material-button-icon"]}`} />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    </motion.div>
    )
}