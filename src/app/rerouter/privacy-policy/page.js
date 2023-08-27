// src/app/qrpop/privacy-policy/page.js

import styles from './page.module.css'
import Link from 'next/link'

export const metadata = {
    title: "Rerouter Privacy Policy",
    robots: {
        index: false,
        follow: true,
    }

}

export default function PrivacyPolicy() {
    return (
        <div className={styles.policy}>
            <div className={styles.breadcrumb}>
                <Link href="/rerouter">Rerouter</Link> / Privacy Policy
            </div>
            <h1>Rerouter Privacy Policy</h1>
            <p className={styles.date}>Last Updated August 27, 2023</p>
            <p>
                Rerouter ("the app") performs all processing locally, on your device. Any data collected or created by the app is never shared with the developer or any third parties.
                <br /><br />
                If you have enabled "Share With App Developers" in the "Analytics & Improvements" section of your device's settings then anonymous data may be collected by Apple, Inc. ("Apple") and shared with me. You're welcome to disable this at any time. Please review Apple's <Link href="https://www.apple.com/legal/privacy/data/en/app-analytics/" rel="nofollow">App Analytics Privacy Policy</Link> for more information.
                <br /><br />
                Additionally, I have included links on this app for your use and reference, including the "Submit Feedback" feature. I am not responsible for the privacy policies on these websites. You should be aware that the privacy policies of these websites may differ from my own.
                <br /><br />
                Any data you willfully and knowingly share, such as submitted data via the aforementioned feedback form or direct email correspondence with the developer, may be retained.
                <br /><br />
                This policy is effective as of the date posted above and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
                <br /><br />
                I reserve the right to update or change this Privacy Policy at any time. You should check this Privacy Policy periodically. If any material changes are made a prominent notice will be temporarily placed on this app.
                <br /><br />
                For any questions, comments, or concerns regarding this policy, please send me an email at <a href="mailto:contact@fromshawn.dev" rel="nofollow">contact@fromshawn.dev</a>.
            </p>
        </div>
    )
}