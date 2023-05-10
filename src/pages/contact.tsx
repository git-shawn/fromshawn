import styles from "@/styles/Contact.module.css";
import Head from "next/head";

export default function Contact() {

    return (

        <>
            <Head>
                <title>Shawn Davis - Contact Me</title>
                <meta name="description" content="Just a guy who loves being outside and volunteering. I code sometimes too." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/shared-assets/favicon.ico" />
                <meta property="og:title" content="Shawn Davis - Contact Me" />
                <meta property="og:description" content="Just a guy who loves being outside and volunteering. I code sometimes too." />
                <meta property="og:image" content="/previews/social-box-main.png" />
            </Head>
            <div className={styles["master-detail"]}>
                <div className={styles["form-container-accent"]}>
                    <p>Powered by {" "}<a href="https://unsplash.com/">Unsplash</a></p>
                </div>
                <div className={styles["form-container"]}>
                    <h1>Let's Chat</h1>
                    <form
                        className={styles["form"]}
                        method="POST" action={`https://formsubmit.co/${process.env.FORM_KEY}`}>
                        <label className={styles["form-item"]}>
                            Name
                            <input
                                className={styles["form-input"]}
                                type="text"
                                name="name" />
                        </label>

                        <label className={styles["form-item"]}>
                            Email
                            <input
                                className={styles["form-input"]}
                                type="text"
                                name="email" />
                        </label>

                        <label className={styles["form-item"]}>
                            Message
                            <textarea
                                className={`${styles["form-input"]} ${styles["text-area"]}`}
                                name="message"></textarea>
                        </label>

                        <button
                            className={styles["form-submit-button"]}
                            type="submit">
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}