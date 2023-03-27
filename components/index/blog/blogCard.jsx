import styles from "./blogCard.module.css"
import Link from "next/link"

export default function BlogCard() {
    return (
        <li className={styles.blogCardContainer}>
            <Link href="#">
                <div className={styles.imgBox}>
                    <div className={styles.bgImage}
                        style={{ backgroundImage: "url(images/k_blob-2022311-2233846.png)" }}>
                    </div>
                    <div className={styles.cardFeatures}>Seyahat Uzman&#x131;</div>
                </div>
                <div className={styles.textBox}>
                    <div className={styles.features}>
                        <div className={styles.colon}>
                            <i className={styles.person_icon}></i>
                            <span>Seyahat Uzmanı</span>
                        </div>
                        <div className={styles.colon}>
                            <i className={styles.date_icon}></i>
                            <span>11.3.2022 21:02:25</span>
                        </div>
                    </div>
                    <div className={styles.title}>&#xD6;l&#xFC;deniz Nerededir ve Nas&#x131;l Gidilir ?</div>
                    <div className={styles.desc}>
                        T&#xFC;rkiye&#x2019;nin en g&#xFC;zel tatil yerlerinden biri olan
                        &#xD6;l&#xFC;deniz&#x2019;e ula&#x15F;&#x131;m gayet kolayd&#x131;r. Kara
                        yolu, hava yolu ve deniz yolu gibi &#xE7;e&#x15F;itlilik
                        bar&#x131;nd&#x131;ran ula&#x15F;&#x131;m se&#xE7;enekleri ile
                        ula&#x15F;&#x131;m m&#xFC;mk&#xFC;nd&#xFC;r.
                    </div>
                    <div className={styles.detailButton}>DEVAMI...</div>
                </div>
            </Link>
        </li>
    )
}