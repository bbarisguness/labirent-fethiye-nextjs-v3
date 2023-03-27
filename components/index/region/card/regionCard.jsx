import styles from "./regionCard.module.css"
import Link from "next/link"

export default function RegionCard({ data }) {
    var backgroundImg = {
        backgroundImage: "url(" + data.src + ")"
    };

    return (
        <li className={styles.cardContainer}>
            <Link href="#">
                <div style={backgroundImg} className={`${styles.imgBox}`}></div>
                <div className={styles.textBox}>
                    <div className={styles.title}>{data.title}</div>
                    <div className={styles.desc}>{data.desc}</div>
                </div>
            </Link>

        </li>
    )
}