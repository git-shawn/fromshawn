import { useState } from 'react'
import { motion, Variants } from "framer-motion";

export default function Lightbox({ children }: React.PropsWithChildren) {
    const [presenting, setPresenting] = useState(false);

    const spring = {
        type: "spring",
        damping: 10,
        stiffness: 100
    }

    return (
        <motion.div
            style={{
                position: presenting ? "fixed" : "unset",
                top: 0,
                left: 0,
                zIndex: 999,
                height: "100vh",
                width: "100vw"
            }}
            onClick={() => { setPresenting(!presenting) }}
            animate={{
                backgroundColor: presenting ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.4)",
                backdropFilter: presenting ? "blur(10px)" : ""
            }}>
            <div
                style={{
                    width: presenting ? "80vh" : "inherit",
                    height: presenting ? "80vh" : "inherit",
                    margin: presenting ? "10vh auto" : "inherit",
                    position: presenting ? "relative" : "inherit",
                    overflow: presenting ? "hidden" : "inherit",
                    borderRadius: presenting ? "2em" : "inherit"
                }}
                onClick={() => { setPresenting(!presenting) }}>
                {children}
            </div>
        </motion.div>
    )
}