import Image from "next/image";
import appStyle from '@/styles/AppPage.module.css'
import Link from "next/link";
import grid from "@/styles/GridLayout.module.css";
import { motion, Variants } from "framer-motion";
import { BsPersonLinesFill } from "react-icons/bs";
import FooterBox from "@/components/shared/contact-footer"

import imageQuote from "public/rerouter/rerouter-text.svg";
import imageMaps from "public/rerouter/rerouter-grid1.png";
import imageSetup from "public/rerouter/rerouter-grid2.png";
import Head from "next/head";

export default function Rerouter() {
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
    <>
      <Head>
        <title>Rerouter</title>
        <meta name="description" content="A super simple Safari Extension that intercepts all Google Maps links redirects them to Apple Maps." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Rerouter" />
        <meta property="og:description" content="A super simple Safari Extension that intercepts all Google Maps links redirects them to Apple Maps." />
        <meta property="og:image" content="/previews/social-box-rerouter.png" />
      </Head>
      <div className={grid["main"]}>
        <div className={grid["row"]}>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={squircleVariants}
            style={{
              justifyContent: "space-between"
            }}
            className={`${grid["item"]} ${grid["one"]} ${grid["padded"]} ${grid["default-background"]}`}>
            <div>
              <h1 className="blackSyne">Rerouter!</h1>
              <p
                style={{
                  opacity: 0.7
                }}>iOS, iPadOS, macOS</p>
            </div>
            <p>Rerouter is a super simple Safari Extension that intercepts all Google Maps links redirects them to Apple Maps.</p>
            <div className={grid["button-row"]}>
              <a
                href="https://apps.apple.com/us/app/rerouter-open-links-in-maps/id1589151155"
                className={`${grid["pill-button"]} ${grid["blue"]}`}>
                Download Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={squircleVariants}
            style={{
              justifyContent: "space-around",
              fontWeight: 900,
              fontSize: "2.5rem",
              background: "linear-gradient(145deg, #3A93FF, #006bed)",
              color: "white",
            }}
            className={`${grid["item"]} ${grid["one"]} ${grid["padded"]} ${grid["default-background"]} ${appStyle["image"]}`}>
            <Image
              alt={"REROUTER OPENS GOOGLE MAPS LINKS IN APPLE MAPS. EASY."}
              src={imageQuote} />
          </motion.div>
        </div>

        <div className={`${grid["row"]} ${grid["reverse"]}`}>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={squircleVariants}
            style={{
              backgroundColor: "#3A93FF",
              padding: "2rem"
            }}
            className={`${grid["item"]} ${grid["two"]} ${grid["default-background"]} ${appStyle["image"]} ${appStyle["tilt"]}`}>
            <Image
              className={grid["clamped"]}
              alt={"Two phones with an arrow pointing from Google Maps on one phone to Apple Maps on the other."}
              src={imageMaps} />
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={squircleVariants}
            className={`${grid["item"]} ${grid["padded"]} ${grid["one"]} ${grid["default-background"]}`}>
            <h2>Gets you where you need to go.</h2>

            <p>
              It's easy to find recommendations online for tasty restaurants or scenic trails, but sometimes it isn't as easy to actually navigate to those places. Rerouter helps ease that pain by opening Google Maps Links in Apple Maps automatically. Just set it and forget it.
            </p>
            <div />
          </motion.div>
        </div>
        <div className={grid["row"]}>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={squircleVariants}
            style={{
              backgroundColor: "#2828AD",
              color: "white"
            }}
            className={`${grid["item"]} ${grid["one"]} ${grid["padded"]} ${grid["default-background"]}`}>
            <div className={appStyle["privacy-header"]}>
              <h2 className={grid["button-row"]}>Your privacy comes first.</h2>
              <BsPersonLinesFill className={appStyle["privacy-icon"]} />
            </div>
            <p>
              Rerouter keeps your data safe the best way possible; by not collecting it in the first place. Links are redirected locally. That means your browsing history isn't recorded and never leaves your device.
            </p>
            <div className={grid["button-row"]}>
              <Link
                className={`${grid["pill-button"]} ${grid["invert"]}`}
                href="/support/rerouter-privacy">
                Privacy Policy
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={squircleVariants}
            style={{
              backgroundColor: "#3A93FF",
              padding: "2rem",
            }}
            className={`${grid["item"]} ${grid["one"]} ${grid["default-background"]} ${appStyle["image"]} ${appStyle["rise"]} ${appStyle["reverse"]}`}>
            <Image
              alt={"Screenshot of Rerouter's setup screen."}
              className={grid["clamped"]}
              src={imageSetup} />
          </motion.div>
        </div>
        <FooterBox />
      </div>
    </>
  )
}