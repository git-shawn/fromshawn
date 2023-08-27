// src/app/qrpop/support/page.js

import Link from 'next/link';
import styles from './page.module.css'
import { getAllPosts } from '@/lib/api';
import Button from '@/components/buttons/button';

export const metadata = {
    title: "Rerouter Support",
    robots: {
        index: false,
        follow: true,
    }
}

export default function Support() {
    const posts = getAllPosts(["title", "date", "tag", "image", "slug"], "rerouter");

    return (
        <div className={styles.support}>

            <header>
                <h1>Rerouter Support</h1>
                <p>Have a question that isn't covered here? Email me or use the button below.</p>
                <Button
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfasGyOQ5lhw7S8niZ8PJgYFub-e4lRQJQrRmb2cehzjRC8jA/viewform?usp=sf_link"
                    outbound
                >
                    Submit Feedback
                </Button>
            </header>

            <section
                className={styles.articles}
            >
                {posts.map((post) => (
                    <Link
                        className={styles.article}
                        href={`/rerouter/support/${post.slug}`}
                    >
                        <div>
                            <h2>
                                {post.title}
                            </h2>
                            <p className={styles.date}>
                                {post.date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}
                            </p>
                        </div>
                        <p className={styles.tag}>
                            {post.tag}
                        </p>
                    </Link>
                ))}

            </section>
        </div>
    )
}