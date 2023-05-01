import styles from "@/styles/Contact.module.css";

export default function Contact() {

    return (

        <>
            <div className={styles["master-detail"]}>
                <div className={styles["form-container-accent"]}>
                    <p>Powered by {" "}<a href="https://unsplash.com/">Unsplash</a></p>
                </div>
                <div className={styles["form-container"]}>
                    <h1>Let's Chat</h1>
                    <form
                        className={styles["form"]}
                        method="POST" action={`https://formsubmit.co/${process.env.FORM_KEY}`}>
                        <div className={styles["form-item"]}>
                            <label>Name</label>
                            <input
                                className={styles["form-input"]}
                                type="text"
                                name="name" />
                        </div>

                        <div className={styles["form-item"]}>
                            <label>Email</label>
                            <input
                                className={styles["form-input"]}
                                type="text"
                                name="email" />
                        </div>

                        <div className={styles["form-item"]}>
                            <label>Message</label>
                            <textarea
                                className={`${styles["form-input"]} ${styles["text-area"]}`}
                                name="message"></textarea>
                        </div>

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