import React, { useState, useEffect, Children } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TextLoop = ({ children }: React.PropsWithChildren) => {
    const [index, setIndex] = useState(0);
    const count = Children.count(children);

    let variants = {
        enter: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.5
            }
        },
        placed: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.5
            }
        }
    }

    useEffect(() => {
        setTimeout(() => {
            let next = index + 1;
            if (next === count) {
                next = 0;
            }
            setIndex(next);
        }, 3 * 1000);
    }, [index, setIndex, count]);

    return (
        <>
            <AnimatePresence
                mode="wait"
                initial={false}>
                {Children.map(children, (child, key) =>
                    !React.isValidElement(child) ? (null) : (
                        index == key ? (
                            <>
                                {" "}
                                <div style={{
                                    display: "inline-block"
                                }}
                                >
                                    <motion.span
                                        style={{
                                            zIndex: 1,
                                            position: "absolute",
                                        }}
                                        variants={variants}
                                        initial={"enter"}
                                        animate={"placed"}
                                        exit={"exit"}
                                        key={key}
                                    >
                                        {child}
                                    </motion.span>
                                    <span style={{
                                        zIndex: 0,
                                        opacity: 0
                                    }}>
                                        {child}
                                    </span>
                                </div>
                                {" "}
                            </>
                        ) : (null)
                    )
                )}
            </AnimatePresence>
        </>
    );
};

export default TextLoop;