import Image from 'next/image'
import appStyle from '@/styles/AppPage.module.css'
import grid from '@/styles/GridLayout.module.css'
import { motion, Variants } from "framer-motion";
import { BsPersonLinesFill } from "react-icons/bs"


import imagePulloutText from 'public/codeText.svg'
import imageSiri from 'public/qrpopSiriExt.png'
import imageMac from 'public/qrpopMac.png'
import FooterBox from '@/components/shared/contact-footer'
import Link from 'next/link';

export default function QRPop() {
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
            <h1 className="blackSyne">QR Pop!</h1>
            <p
              style={{
                opacity: 0.7
              }}>iOS, iPadOS, macOS, & watchOS</p>
          </div>
          <p>QR Pop is a lightning-fast QR code generator built specifically for Apple devices. Experiment with over a dozen generators and countless design combinations to create the perfect code for any occasion.</p>
          <div className={grid["button-row"]}>
            <a
              href="https://apps.apple.com/us/app/qr-pop/id1587360435"
              className={`${grid["pill-button"]} ${grid["orange"]}`}>
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
            backgroundColor: "#FF7033",
            justifyContent: "center",
            padding: "2rem"
          }}
          className={`${grid["item"]} ${grid["one"]} ${grid["padded"]} ${grid["default-background"]} ${appStyle["image"]} ${appStyle["rise"]}`}>
          <Image
            className={grid["clamped"]}
            src={imageSiri}
            alt={"A screenshot of QR Pop's \"Builder\" screen showing a QR code designed after the National Parks foundation."} />
        </motion.div>
      </div>

      <div className={`${grid["row"]} ${grid["reverse"]}`}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={squircleVariants}
          style={{
            backgroundColor: "#FF7033",
            justifyContent: "center",
          }}
          className={`${grid["item"]} ${grid["padded"]} ${grid["one"]} ${grid["default-background"]} ${appStyle["image"]} ${appStyle["zoom"]}`}>
          <Image
            className={grid["clamped"]}
            src={imageMac}
            alt={"Two screenshots of QR Pop on iPhones."} />
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={squircleVariants}
          className={`${grid["item"]} ${grid["padded"]} ${grid["two"]} ${grid["default-background"]}`}>
          <h2>There's so much you can do</h2>

          <p>
            QR Pop is a powerful code generator with a trick—multiple system extensions that reach into every facet of your device. With QR Pop's Share and Safari extensions, you can easily generate codes in most applications. For those edge cases, QR Pop's Shortcuts extension offers limitless possibilities to create beautiful, well-designed QR codes.
          </p>
          <div className={grid["button-row"]}>
            <Link
              className={`${grid["pill-button"]} ${grid["orange"]}`}
              href="/support/qrpop-version-3">
              See What's New
            </Link>
          </div>
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
            QR Pop keeps your data safe the best way possible; by not collecting it in the first place. Codes are generated entirely on your device, and your data synced with your personal iCloud account—something I can't see.
          </p>
          <div className={grid["button-row"]}>
            <Link
              className={`${grid["pill-button"]} ${grid["invert"]}`}
              href="/support/qrpop-privacy">
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
            justifyContent: "space-around",
            fontWeight: 900,
            fontSize: "2.5rem",
            background: "linear-gradient(145deg, #fc4a1a, #f7b733)",
            color: "white",
          }}
          className={`${grid["item"]} ${grid["one"]} ${grid["padded"]} ${grid["default-background"]} ${appStyle["image"]}`}>
          <Image
            src={imagePulloutText}
            alt={"YOU CAN MAKE BEAUTIFUL ENGAGING EXCITING QR CODES WITH QR POP"} />
        </motion.div>
      </div>
      <FooterBox />
      <div>
        <p
          style={{
            opacity: "0.5",
            fontSize: "0.7rem",
            textAlign: "center",
            marginTop: "1rem"
          }}
        >
          "QR Code" is a registered trademark of
          {" "}
          <a
            style={{
              fontWeight: "bold",
              color: "var(--color-primary)"
            }}
            href="https://www.qrcode.com/en/index.html">
            DENSO WAVE
          </a>
          .
        </p>
      </div>
    </div>
  )
}