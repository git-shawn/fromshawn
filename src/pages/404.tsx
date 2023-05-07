
import styles from '@/styles/GridLayout.module.css'
import Head from 'next/head'

export default function FourOhFour() {
    return (
        <>
            <Head>
                <title>Shawn Davis — 404</title>
                <meta name="description" content="Uh oh, this doesn't look right." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head >
            <div className={styles["main"]}>
                <div
                    style={{
                        fontSize: "5rem",
                        fontFamily: "var(--syne-font)",
                        fontWeight: "900",
                        display: "flex",
                        flexDirection: "column",
                        alignContent: "center",
                        justifyContent: "center",
                    }}
                >
                    <h1>?</h1>
                </div>
            </div>
        </>
    )
}
