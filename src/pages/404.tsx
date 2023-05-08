
import styles from '@/styles/GridLayout.module.css'
import Head from 'next/head'

export default function FourOhFour() {
    return (
        <>
            <Head>
                <title>Shawn Davis — 404</title>
                <meta name="description" content="Uh oh, this doesn't look right." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/shared-assets/favicon.ico" />
            </Head >
            <div className={styles["main"]}>
                <div
                    style={{
                        maxWidth: "25rem",
                        height: "100px",
                        position: "absolute",
                        padding: "0.25rem",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        margin: "auto",
                        fontSize: "1.5rem",
                        textAlign: "center",
                    }}
                >
                    <p>
                        <span
                            style={{
                                fontWeight: "bold"
                            }}
                        >
                            404 &#124;
                        </span>
                        {" "}
                        <span
                            style={{
                                opacity: 0.75
                            }}
                        >
                            This page could not be found
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}
