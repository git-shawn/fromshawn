// src/app/privacy/page.js

import styles from './page.module.css'
import Link from 'next/link'

export const metadata = {
    title: "Privacy Policy",
    robots: {
        index: false,
        follow: true,
    }
}

export default function PrivacyPolicy() {
    return (
        <div className={styles.policy}>
            <h1>Privacy Policy</h1>
            <p className={styles.date}>Last Updated August 27, 2023</p>
            <p>
                Let's start with what you're here for—this website doesn't use any third-party analytic scripts. Feel free to browse the <Link href="https://github.com/git-shawn/fromshawndev" rel="nofollow">source code</Link> yourself. You'll be happy to see that no data is collected whatsoever.
                <br /><br />
                With that in mind, this website is hosted by Vercel Inc. ("Vercel") who may collect some form of usage and/or analytic information. You may refer to their <Link href="https://vercel.com/legal/privacy-policy" rel="nofollow">privacy policy</Link> for more information.
                <br /><br />
                I have included links on this website for your use and reference. I am not responsible for the privacy policies on these websites. You should be aware that the privacy policies of these websites may differ from my own.
                <br /><br />
                This policy is effective as of the date posted above and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
                <br /><br />
                I reserve the right to update or change this Privacy Policy at any time. You should check this Privacy Policy periodically. If any material changes are made a prominent notice will be temporarily placed on this website.
                <br /><br />
                For any questions, comments, or concerns regarding this policy, please send me an email at <a href="mailto:contact@fromshawn.dev" rel="nofollow">contact@fromshawn.dev</a>.
            </p>
        </div>
    )
}