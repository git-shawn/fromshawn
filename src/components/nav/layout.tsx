import React, { PropsWithChildren } from "react";
import Navbar from "./navbar";
import { FaRegHeart }  from "react-icons/fa";

/**
 * A global layout for the app.
 * @param children The view wrapped in this layout. 
 * @returns The wrapped view.
 */
const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            {children}
            <footer>
                <p>© 2023 Shawn Davis. Made with <FaRegHeart/> in Carbondale, IL.</p>
                <p>Browse this site's source code on <a href="https://github.com/git-shawn/fromshawndev">GitHub</a>!</p>
            </footer>
        </>
    );
};

export default Layout;