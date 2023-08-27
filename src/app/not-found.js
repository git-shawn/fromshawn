// src/app/not-found.js

import Button from '@/components/buttons/button'

export default function NotFound() {
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