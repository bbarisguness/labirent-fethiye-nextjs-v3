import styles from "./blogCard.module.css"
import Link from "next/link"

export default function BlogCard({ data }) {
    console.log(data)

    const generateBlogLink = (title) => {
        let url = title
            .toLowerCase()
            .replaceAll(" ", "-")
            .replaceAll("?", "")
            .replaceAll(":", "")
            .replaceAll("ı", "i")
            .replaceAll("ç", "c")
            .replaceAll("ş", "s")
            .replaceAll("ö", "o")
            .replaceAll("ü", "u")
            .replaceAll("ğ", "g")
            .replaceAll("ı", "i")
        return url
    }

    return (
        <li className={styles.blogCardContainer}>
            <Link href={`bloglar/${data.id}-` + generateBlogLink(data.attributes.title)}>
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