
import styles from '@/styles/GridLayout.module.css'

export default function FourOhFour() {
    return (
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
    )
}
