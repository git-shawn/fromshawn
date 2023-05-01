import React from "react"
import gridStyle from '@/styles/Docs.module.css'

export default function MDXDisclaimerText({ text }: { text: string }) {
    return (
        <p className={gridStyle["disclaimer-text"]}>
            {text}
        </p>
    )
}