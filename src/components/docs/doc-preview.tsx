import Link from "next/link"
import styles from '@/styles/Docs.module.css'

export type DocPreview = {
    title: string
    description: string
    date: string
    slug: string
    tag: string
}

export default function DocCard({ docPreview }: { docPreview: DocPreview }) {
    return (
        <Link
            href={`support/${docPreview.slug}`}
        >
            <div
                className={styles["doc-card-content"]}>
                <div>
                    <h2
                        className={styles["doc-card-title"]}
                    >
                        {docPreview.title}
                    </h2>
                    <div
                        className={styles["doc-card-date"]}
                    >
                        {docPreview.date}
                    </div>
                </div>
                <div
                    className={styles["doc-card-description"]}
                >
                    <p>
                        {docPreview.description}
                    </p>
                </div>
            </div>
        </Link>
    )
}