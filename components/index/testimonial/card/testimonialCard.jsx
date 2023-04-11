import styles from "./testimonialcard.module.css"

export default function TestimonialCard({ data }) {
    //console.log(data);
    return (
        <div className={styles.cardContainer}>
            <div className={styles.ulTop}>
                <div className={styles.imgBox}>
                    <div className={styles.bgImage}
                        style={{ backgroundImage: `url(http://3.127.136.179:1337${data?.attributes?.villa?.data?.attributes?.gallery?.data?.attributes?.image?.data[0]?.attributes?.url})` }}></div>
                        
                </div>
                <div className={styles.textBox}>
                    <div className={styles.title}>{data.attributes.villa.data.attributes.name}</div>
                    <div className={styles.location}>Fethiye / {data.attributes.villa?.data?.attributes?.region?.data?.attributes.name}</div>
                </div>
            </div>
            <div className={styles.ulCenter}>
                “ {data.attributes.comment} “
            </div>
            <div className={styles.ulBottom}>
                <div className={styles.name}>{data.attributes.name}</div>
                <div className={styles.date}>{data.attributes.createdAt}</div>
            </div>
        </div>
    )
}