'use client';
import Link from "next/link"
import styles from "./blog.module.css"
import BlogCard from "./blogCard"
import { useEffect, useState } from "react";
const qs = require('qs');

export default function Blog() {

    const [ready, setReady] = useState(false)
    const [blogs, setBlogs] = useState([])


    const query = qs.stringify(
        {
            populate: ["image"],
            pagination: {
                page: 1,
                pageSize: 2,
            }
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );

    useEffect(() => {
        fetch(`http://3.127.136.179:1337/api/blogs?${query}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setBlogs(result.data)
                    //console.log(result.data);
                },
                (error) => {

                }
            )
    }, [ready])

    return (
        <div className={styles.blog}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.titleBox}>
                        <div className={styles.title}>Blog</div>
                        <div className={styles.subTitle}>Bölgemizle ilgili bilgiyi bloglarımızdan alabilirsiniz</div>
                    </div>
                    <ul>
                        {
                            blogs.map((blog, index) => <BlogCard key={index} data={blog} />)
                        }
                    </ul>
                    <div className={styles.linkBox}>
                        <Link href="/bloglar" className={styles.greyButton}>
                            <span>Tümü</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}