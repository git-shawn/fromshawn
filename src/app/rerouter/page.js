// src/app/rerouter/page.js

import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/buttons/button'
import { IoPhonePortraitOutline, IoTabletPortraitOutline, IoLaptopOutline } from 'react-icons/io5'

export const metadata = {
    title: "Rerouter",
    description: "Rerouter is an unobtrusive Safari Extension that automatically opens Google Maps links in Apple Maps from any website.",
    itunes: {
        appId: "1589151155",
    },
    openGraph: {
        title: "Rerouter",
        description: "A Safari Extension that automatically opens Google Maps links in Apple Maps.",
        url: "https://www.fromshawn.dev/rerouter",
        siteName: "Shawn Davis",
        locale: "en_US",
        type: "website",
    },
    alternates: {
        canonical: "/rerouter",
    },
}

export default function Rerouter() {
    return (
        <>
            <header className={styles.hero}>
                <div className={styles.content}>
                    <div>
                        <h1>Meet Rerouter</h1>
                        <p>Rerouter is an unobtrusive Safari Extension made to do just one thing—open Google Maps links in Apple Maps. Setup is easy and rerouting happens privately and automatically. Next time you search for "hikes near me" you can get to the trail quicker than ever before.</p>
                    </div>
                    <div>
                        <Button
                            href="https://apps.apple.com/app/apple-store/id1589151155?pt=123541881&ct=website-cta&mt=8"
                            outbound
                        >
                            Download Now
                        </Button>
                        <div className={styles.plain}>
                            <Button
                                href="https://github.com/git-shawn/Rerouter"
                                outbound
                            >
                                View on GitHub
                            </Button>
                        </div>
                    </div>
                </div>

                <div className={styles.image}>
                    <Image
                        src="/rerouter/header.webp"
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
                        <h2>Here When You Need It</h2>
                        <p>Rerouter’s Safari Extension is constantly searching for opportunities to reroute Google Maps links. When the app spots one, it goes to work silently to convert and replace the URL—all hands free. When you need a break, that process can be paused with the tap of a toggle.</p>
                    </div>

                    <div className={styles.image}>
                        <Image
                            src="/rerouter/feature1.webp"
                            fill={true}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0mvz/PwAFqALN/ZPxbAAAAABJRU5ErkJggg=="
                            alt="A rendering of an iPad displaying QR Pop's generator page. The image is zoomed into the design portion of the editor."
                            sizes="(max-width: 600px) 50vw, 100vw"
                        />
                    </div>
                </div>

                <div className={`${styles.featureBlock}`}>
                    <div className={styles.info}>
                        <h2>Setup Made Easy</h2>
                        <p>The first time you use Rerouter, you may need to get your hands a little dirty setting it all up. Thankfully, an immersive onboarding experience has been embedded directly into the main app designed to make setup a breeze.</p>
                    </div>

                    <div className={styles.image}>
                        <Image
                            src="/rerouter/feature2.webp"
                            fill={true}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0mvz/PwAFqALN/ZPxbAAAAABJRU5ErkJggg=="
                            alt="A screenshot of QR Pop for the Mac overlayed by a rendering of an iPhone displaying QR Pop. Both instances of QR Pop are presenting the Archive page with the same codes present on both to demonstrate the application's ability to sync data via iCloud."
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
                            <p>Rerouter is an app on a mission—to get you where you need to go as quickly as possible. That means there’s just no time left over to spy on your browsing habits. The URLs you visit aren’t recorded, your usage isn’t tracked, and all processing happens locally.</p>
                        </div>

                        <Button href="/rerouter/privacy-policy" outbound>Privacy Policy</Button>
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
                            <p>iOS 16.0+</p>
                        </div>
                        <div>
                            <IoTabletPortraitOutline />
                            <p>iPadOS 16.0+</p>
                        </div>
                        <div>
                            <IoLaptopOutline />
                            <p>macOS 13.0+</p>
                        </div>
                    </div>

                    <Button
                        href="/rerouter/support"
                    >
                        Visit Support
                    </Button>
                </div>

                <div className={styles.disclaimers}>
                    <p>
                        This application is not affiliated with Google or Google Maps.
                        <br /><br />
                        Rerouter is an open-source project available under the <Link href="https://github.com/git-shawn/Rerouter/blob/main/LICENSE" rel="nofollow">GPL 3.0 license</Link>. No purchase is necessary to use. This software is provided via Apple's App Store "as-is." Use is goverened by Apple's <Link href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" rel="nofollow">Standard End User License Agreement</Link>. Any and all published information is subject to change.
                    </p>
                </div>
            </section>
        </>
    )
}