// /src/app/qrpop/support/[slug]/page.js

import styles from './page.module.css'
import Link from 'next/link';
import { getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';

export const metadata = {
    title: "QR Pop Support Article",
    robots: {
        index: false,
        follow: true,
    }
}

export default async function BlogPost({ params }) {
    const post = getPostBySlug(params.slug, ["title", "date", "tag", "content"], "qrpop");

    const content = await markdownToHtml(post.content || "");

    return (
        <div className={styles.post}>
            <header>
                <div className={styles.breadcrumb}>
                    <Link href="/qrpop/support">QR Pop Support</Link> / {post.title}
                </div>
                <h1>{post.title}</h1>
                <p className={styles.date}>
                    {post.date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}
                </p>
            </header>
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: content }}
            />
            <p className={styles.tag}>
                {post.tag}
            </p>
        </div>
    )
}