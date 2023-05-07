import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/Lightbox.module.css";

export default function Lightbox({ children }: React.PropsWithChildren) {
    const [presenting, setPresenting] = useState(false);

    return (
        <>
            <span
                onClick={() => { setPresenting(true) }}
            >
                {children}
            </span>
            <AnimatePresence>
                {presenting && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0, filter: "blur(2rem)" }}
                        animate={{ scale: 1, opacity: 1, filter: "blur(0)" }}
                        exit={{ scale: 0, opacity: 0, filter: "blur(2rem)" }}
                        className={styles["lightbox"]}
                        onClick={() => { setPresenting(false) }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}