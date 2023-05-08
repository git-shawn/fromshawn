import React from "react"
import docStyle from "@/styles/Docs.module.css";

export default function MDXDisclaimerText({ text }: { text: string }) {
    return (
        <p className={docStyle["disclaimer-text"]}>
            {text}
        </p>
    )
}