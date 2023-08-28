// src/app/qrpop/privacy-policy/page.js

import styles from './page.module.css'
import Link from 'next/link'

export const metadata = {
    title: "QR Pop Privacy Policy",
    robots: {
        index: false,
        follow: true,
    }
}

export default function PrivacyPolicy() {
    return (
        <div className={styles.policy}>
            <div className={styles.breadcrumb}>
                <Link href="/qrpop">QR Pop</Link> / Privacy Policy
            </div>
            <h1>QR Pop Privacy Policy</h1>
            <p className={styles.date}>Last Updated August 27, 2023</p>
            <div className={styles.content}>
                <p>QR Pop does not embed any third-party tracking or logging technologies nor does it share any data with third parties.</p>

                <h2>Your Data</h2>

                <p>QR Pop offers the ability to save data, in the form of &quot;archived QR codes&quot; and &quot;templates,&quot; both locally and to &quot;iCloud,&quot; a cloud-based database service provided by Apple, Inc (&quot;Apple&quot;). None of this data is ever available to me or any third parties.</p>

                <p>All server-side data is stored within your &quot;private iCloud database,&quot; an encrypted store entirely inaccessible to the developer. Please refer to Apple's <a href="https://www.apple.com/legal/privacy/en-ww/" rel="nofollow">Privacy Policy</a> for more information.</p>

                <h2>Analytics</h2>

                <p>QR Pop does not perform any first-party data collection, including the collection of analytic data. If you previously agreed to share analytic data with developers then some anonymized data may be collected by Apple and shared with me. Please refer to Apple's <a href="https://www.apple.com/legal/privacy/data/en/app-analytics/" rel="nofollow">App Analytics Privacy Policy</a> for more information.</p>

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