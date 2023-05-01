import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Transition = ({ children }: React.PropsWithChildren) => {
    const { asPath } = useRouter();

    const variants = {
        out: {
            opacity: 0,
            y: 40,
            transition: {
                duration: 0.25
            }
        },
        in: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.25,
                delay: 0.25
            }
        }
    };

    return (
        <div style={{
            minHeight: "100vh"
        }}>
            <AnimatePresence
                initial={false}
                mode="wait"
            >
                <motion.div
                    key={asPath}
                    variants={variants}
                    animate="in"
                    initial="out"
                    exit="out"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
export default Transition;