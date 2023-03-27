import Link from "next/link"
import styles from "./blog.module.css"
import BlogCard from "./blogCard"

export default function Blog() {
    return (
        <div className={styles.blog}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.titleBox}>
                        <div className={styles.title}>Blog</div>
                        <div className={styles.subTitle}>Bölgemizle ilgili bilgiyi bloglarımızdan alabilirsiniz</div>
                    </div>
                    <ul>
                        <BlogCard />
                        <BlogCard />
                    </ul>
                    <div className={styles.linkBox}>
                        <Link href="#" className={styles.greyButton}>
                            <span>Tümü</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}