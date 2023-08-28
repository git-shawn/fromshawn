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

            <div className={styles.content}>
                <p>Rerouter does not embed any third-party tracking or logging technologies nor does it retain or transmit any data.</p>

                <h2>Analytics</h2>

                <p>Rerouter does not perform any first-party data collection, including the collection of analytic data. If you previously agreed to share analytic data with developers then some anonymized data may be collected by Apple, Inc (&quot;Apple&quot;) and shared with me. Please refer to Apple's <a href="https://www.apple.com/legal/privacy/data/en/app-analytics/" rel="nofollow">App Analytics Privacy Policy</a> for more information.</p>

                <h2>External Links</h2>

                <p>For your use and reference, various third-party links may have been embedded into this application. I am not responsible for the privacy policies of these external services. Their privacy policies may differ from my own.</p>

                <h2>Direct Communications</h2>

                <p>If you choose to communicate with me directly, such as via email, then any information you share may be retained.</p>

                <h2>Future Changes</h2>

                <p>I reserve the right to review and update this privacy policy in the future as needed. You are encouraged to occasionally revisit this page to stay aware of modifications to this agreement.</p>

                <p>Rest assured, this document will never allow for the collection of any data for, or concerning, advertising. </p>

                <h2>Contact</h2>

                <p>For any questions, feel free to contact me via email at <a href="mailto:contact@fromshawn.dev" rel="nofollow">contact@fromshawn.dev</a>. I look forward to hearing from you.</p>
            </div>
        </div>
    )
}