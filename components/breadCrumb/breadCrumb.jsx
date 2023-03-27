import styles from "./breadCrumb.module.css"
import Link from "next/link"

export default function BreadCrumb({ link }) {

    const getName = () => {
        if (link == "sss") { return "Sıkça Sorulan Sorular" }
        else if (link == "contact") { return "İletişim" }
        else if (link == "about") { return "Hakkımızda" }
        else { return null }
    }
    return (
        <section className={styles.breadCrumb}>
            <div className={styles.container}>
                <div className={styles.breadCrumbBox}>
                    <ul className={styles.breadCrumbList}>
                        <li className={styles.breadCrumbItem}>
                            <Link href="/">Anasayfa</Link>
                        </li>
                        {link && <li className={styles.breadCrumbItem}>
                            <Link href="">{getName()}</Link>
                        </li>}
                    </ul>
                    <div className={styles.shareBox}>
                        <div className={styles.shareItem}>
                            <Link href="" className={styles.share}>Paylaş</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}