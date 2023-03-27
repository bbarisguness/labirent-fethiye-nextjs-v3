import styles from "./testimonialcard.module.css"

export default function TestimonialCard() {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.ulTop}>
                <div className={styles.imgBox}>
                    <div className={styles.bgImage}
                        style={{ backgroundImage: "url(/images/testimonials-1.png)" }}></div>
                </div>
                <div className={styles.textBox}>
                    <div className={styles.title}>Villa London</div>
                    <div className={styles.location}>Kalkan / Üzümlü</div>
                </div>
            </div>
            <div className={styles.ulCenter}>
                “ Dinlenmek ve keyifli vakit geçirmek için eşsiz bir yer. Bugüne kadar
                keşfetmediğimize pişman
                olduk. “
            </div>
            <div className={styles.ulBottom}>
                <div className={styles.name}>Ali Tufan</div>
                <div className={styles.date}>04.06.2021</div>
            </div>
        </div>
    )
}