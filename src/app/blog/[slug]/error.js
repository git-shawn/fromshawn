// src/app/blog/[slug]/error.js

"use client";

import Button from '@/components/buttons/button'

// The most likely error from this route is that a non-existant slug was entered as the URL.
// We can catch that and treat it like a 404.
export default function Error({ error, reset }) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                fontSize: "18pt",
                maxWidth: "800px",
                margin: "2rem auto",
                padding: "1rem",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    fontSize: "32pt",
                }}
            >
                <h1>Not Found</h1>
                <p>The page you’re looking for can’t be found.</p>
            </div>
            <Button href="/">Return Home</Button>
        </div>
    )
}