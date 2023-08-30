// src/app/qrpop/page.js

import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/buttons/button'
import { IoPhonePortraitOutline, IoTabletPortraitOutline, IoLaptopOutline, IoWatchOutline, IoTvOutline } from 'react-icons/io5'

export const metadata = {
    title: "QR Pop",
    description: "QR Pop is a QR code generator designed to feel right at home on Apple devices. Design beautiful codes then save them to iCloud or share as SVGs, PDFs, and more.",
    itunes: {
        appId: "1587360435",
    },
    openGraph: {
        title: "QR Pop",
        description: "A privacy-focused QR code generator designed exclusively for Apple devices.",
        url: "https://www.fromshawn.dev/qrpop",
        siteName: "Shawn Davis",
        locale: "en_US",
        type: "website",
    },
    alternates: {
        canonical: "/qrpop",
    },
}

export default function QRPop() {
    return (
        <>
            <header className={styles.hero}>
                <div className={styles.content}>
                    <div>
                        <h1>Meet QR Pop</h1>
                        <p>Create beautiful QR codes anywhere, anytime—without sacrificing your privacy or drowning in ads. QR Pop is a thoughtfully designed QR code generator crafted to feel right at home across all of your Apple devices.</p>
                    </div>
                    <div>
                        <Button
                            href="https://apps.apple.com/app/apple-store/id1587360435?pt=123541881&ct=website-cta&mt=8"
                            outbound
                        >
                            Download Now
                        </Button>
                        <div className={styles.plain}>
                            <Button
                                href="https://github.com/git-shawn/QR-Pop"
                                outbound
                            >
                                View on GitHub
                            </Button>
                        </div>
                    </div>
                </div>

                <div className={styles.image}>
                    <Image
                        src="/qrpop/header.webp"
                        fill={true}
                        priority={true}
                        alt="A rendering of two iPhones floating, layered above each other, running QR Pop. The top phone is showing QR Pop's generator with a National Park Service themed code being built. The lower phone shows the app's main menu."
                        sizes="(max-width: 600px) 50vw, 100vw"
                    />
                </div>
            </header>

            <section
                id="features"
                className={styles.features}
            >
                <div className={`${styles.featureBlock} ${styles.reverse}`}>
                    <div className={styles.info}>
                        <h2>Endlessly Customizable</h2>
                        <p>Take advantage of dozens of unique QR code formats, like WiFi and Contacts, and countless unique design combinations. Then, once you’ve crafted your masterpiece, export your code or save the design as a reusable, sharable template.</p>
                    </div>

                    <div className={styles.image}>
                        <Image
                            src="/qrpop/feature1.webp"
                            fill={true}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8n2f8HwAGtQKhPIj2xQAAAABJRU5ErkJggg=="
                            alt="A rendering of an iPad displaying QR Pop's generator page. The image is zoomed into the design portion of the editor."
                            sizes="(max-width: 600px) 50vw, 100vw"
                        />
                    </div>
                </div>

                <div className={`${styles.featureBlock}`}>
                    <div className={styles.info}>
                        <h2>Always in Sync</h2>
                        <p>Save your codes to the Archive and access them across all of your devices via iCloud. View archived codes right when you need them with Siri, Shortcuts, and Widgets. Then, share them to the big screen with AirPlay or QR Pop for Apple TV.</p>
                    </div>

                    <div className={styles.image}>
                        <Image
                            src="/qrpop/feature2.webp"
                            fill={true}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8n2f8HwAGtQKhPIj2xQAAAABJRU5ErkJggg=="
                            alt="A screenshot of QR Pop for the Mac overlayed by a rendering of an iPhone displaying QR Pop. Both instances of QR Pop are presenting the Archive page with the same codes present on both to demonstrate the application's ability to sync data via iCloud."
                            sizes="(max-width: 600px) 50vw, 100vw"
                        />
                    </div>
                </div>

                <div className={`${styles.featureBlock} ${styles.reverse}`}>
                    <div className={styles.info}>
                        <h2>Fully Integrated</h2>
                        <p>Turn websites into QR codes in an instant with the Safari Extension, or everywhere else via the Share Sheet. Hands tied? Create codes with your voice via Siri or let your imagination run wild with robust Shortcuts support.</p>
                    </div>

                    <div className={styles.image}>
                        <Image
                            src="/qrpop/feature3.webp"
                            fill={true}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8n2f8HwAGtQKhPIj2xQAAAABJRU5ErkJggg=="
                            alt="Two renderings of iPhones layered slightly above each other. The top iPhone is demonstrating QR Pop's Safari Extension and features a QR Code for the Zion National Park website. The lower iPhone is demonstrating QR Pop's Shortcuts app support and features a screenshot of the Shortcuts app editing a shortcut using QR Pop."
                            sizes="(max-width: 600px) 50vw, 100vw"
                        />
                    </div>
                </div>

            </section>

            <section
                id="privacy"
                className={styles.privacy}
            >
                <div className={styles.roundedBreak} />
                <div className={styles.privacyBlock}>
                    <div className={styles.content}>
                        <div>
                            <h2>Built for Privacy</h2>
                            <p>QR Pop uses the best method possible to protect your data—not collecting it at all. The app does not track you in any way and never communicates with a server. Your archived codes are securely stored in your private iCloud account. I couldn’t see them if I wanted to.</p>
                        </div>

                        <Button href="/qrpop/privacy-policy" outbound>Privacy Policy</Button>
                    </div>
                    <div className={styles.image}>
                        <Image
                            src="/illustrations/privacy.webp"
                            fill={true}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcO+nZfwAG/wMWtvSwpAAAAABJRU5ErkJggg=="
                            alt="A man looking through binoculars sitting in a field of large grass. There's a bird perched on top of his head."
                            sizes="(max-width: 600px) 50vw, 100vw"
                        />
                    </div>
                </div>
                <div className={styles.roundedBreakFlipped} />
            </section>

            <section
                id="appendix"
                className={styles.appendix}
            >
                <div className={styles.systemContainer}>
                    <h2>
                        Available On
                    </h2>

                    <div className={styles.system}>
                        <div>
                            <IoPhonePortraitOutline />
                            <p>iOS 16.1+</p>
                        </div>
                        <div>
                            <IoTabletPortraitOutline />
                            <p>iPadOS 16.1+</p>
                        </div>
                        <div>
                            <IoLaptopOutline />
                            <p>macOS 13.1+</p>
                        </div>
                        <div>
                            <IoWatchOutline />
                            <p>watchOS 9.1+</p>
                        </div>
                        <div>
                            <IoTvOutline />
                            <p>tvOS 16.1+</p>
                        </div>
                    </div>

                    <Button
                        href="/qrpop/support"
                    >
                        Visit Support
                    </Button>
                </div>

                <div className={styles.disclaimers}>
                    <p>
                        "QR Code" is a registered trademark of <Link href="https://www.denso-wave.com/en/system/qr/fundamental/qrcode/qrc/index.html" rel="nofollow">DENSO WAVE</Link>.
                        <br /><br />
                        QR Pop is an open-source project available under the <Link href="https://github.com/git-shawn/QR-Pop/blob/main/LICENSE" rel="nofollow">MIT license</Link>. No purchase is necessary to use. This software is provided via Apple's App Store "as-is." Use is goverened by Apple's <Link href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" rel="nofollow">Standard End User License Agreement</Link>. Any and all published information is subject to change.
                    </p>
                </div>
            </section>
        </>
    )
}