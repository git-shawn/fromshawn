import React from "react"
import gridStyle from '@/styles/GridLayout.module.css'

export default function MDXPillButton({ href, title }: { href: string; title: string }) {
    return (
        <div className={gridStyle["button-row"]}>
            <a
                className={gridStyle["pill-button"]}
                href={href}>
                {title}
            </a>
        </div>
    )
}