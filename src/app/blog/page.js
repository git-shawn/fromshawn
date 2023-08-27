// src/app/blog/page.js

import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'
import { getAllPosts } from '@/lib/api';

export const metadata = {
    title: "Blog | Shawn Davis",
    description: "I'm writing about swift and web development, volunteerism, copywriting, and much more.",
}

export default function Blog() {
    const posts = getAllPosts(["title", "date", "blurb", "image", "alt", "slug"], "blog");

    return (
        <div className={styles.blog}>

            <header>
                <h1>Blog</h1>
            </header>
            {(posts.length > 0) ?
                <>
                    <section
                        className={styles.latestPost}
                    >
                        <Link
                            className={styles.post}
                            href={`/blog/${posts[0].slug}`}
                        >
                            {posts[0].image &&
                                <div className={styles.image}>
                                    <Image
                                        fill
                                        src={posts[0].image}
                                        alt={posts[0].alt}
                                    />
                                </div>
                            }

                            <div>
                                <h2>
                                    {posts[0].title}
                                </h2>
                                <p className={styles.date}>
                                    {posts[0].date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}
                                </p>
                                <p>
                                    {posts[0].blurb}
                                </p>
                            </div>
                        </Link>
                    </section>
                    <hr />
                </>
                :
                <section className={styles.noPosts}>
                    <p>Nothing's been posted yet.<br />Check back soon!</p>
                </section>
            }

            <section
                className={styles.posts}
            >
                {posts.slice(1).map((post) => (
                    <Link
                        className={styles.post}
                        href={`/blog/${post.slug}`}
                    >
                        <h2>
                            {post.title}
                        </h2>
                        <p className={styles.date}>
                            {post.date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}
                        </p>
                        <p>
                            {post.blurb}
                        </p>
                    </Link>
                ))}

            </section>
        </div>
    )
}