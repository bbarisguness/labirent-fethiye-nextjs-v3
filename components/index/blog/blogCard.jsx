import styles from "./blogCard.module.css"
import Link from "next/link"

export default function BlogCard({data}) {
    return (
        <li className={styles.blogCardContainer}>
            <Link href="#">
                <div className={styles.imgBox}>
                    <div className={styles.bgImage}
                        style={{ backgroundImage: `url(http://3.127.136.179:1337${data.attributes.image?.data?.attributes?.url})` }}>
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
                            <span>{data.attributes.createdAt}</span>
                        </div>
                    </div>
                    <div className={styles.title}>{data.attributes.title}</div>
                    <div className={styles.desc}>
                        {data.attributes.shortDesc}
                    </div>
                    <div className={styles.detailButton}>DEVAMI...</div>
                </div>
            </Link>
        </li>
    )
}