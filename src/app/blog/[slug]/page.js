// /src/app/blog/[slug]/page.js

import styles from './page.module.css'
import Link from 'next/link';
import { getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import Image from 'next/image';

export async function generateMetadata({ params, searchParams }, parent) {
    const post = getPostBySlug(params.slug, ["title", "blurb", "date"], "blog");
    return {
        title: `${post.title} | Blog`,
        description: post.blurb,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.date.toISOString(),
            authors: ['Shawn'],
        },
        alternates: {
            canonical: `/blog/${params.slug}`,
        },
    }
}

export default async function BlogPost({ params }) {
    const post = getPostBySlug(params.slug, ["title", "date", "image", "alt", "content"], "blog");

    const content = await markdownToHtml(post.content || "");

    return (
        <div className={styles.post}>
            <header>
                <div className={styles.breadcrumb}>
                    <Link href="/blog">Blog</Link> / {post.title}
                </div>

                {post.image &&
                    <div className={styles.image}>
                        <Image
                            src={post.image}
                            alt={post.alt}
                            fill
                        />
                    </div>
                }
                <h1>{post.title}</h1>
                <p className={styles.date}>
                    {post.date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}
                </p>
            </header>
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    )
}