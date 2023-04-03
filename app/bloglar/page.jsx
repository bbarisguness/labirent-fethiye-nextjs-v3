'use client';
import styles from "./page.module.css"
import Link from "next/link"
import { useEffect, useState } from "react";
import BlogCard from "@/components/index/blog/blogCard";
const qs = require('qs');

export default function Blog() {


    const [ready, setReady] = useState(false)
    const [blogs, setBlogs] = useState([])


    const query = qs.stringify(
        {
            populate: ["image"],
            pagination: {
                page: 1,
                pageSize: 200,
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

  /*  const data = [
        {
            "id": 1,
            "photoName": "k_blob-2022311-2233846.png",
            "title": "Ölüdeniz Nerededir ve Nasıl Gidilir ?",
            "desc": "Türkiye’nin en güzel tatil yerlerinden biri olan Ölüdeniz’e ulaşım gayet kolaydır.Kara yolu, hava yolu ve deniz yolu gibi çeşitlilik barındıran ulaşım seçenekleri ile ulaşım mümkündür."
        },
        {
            "id": 2,
            "photoName": "k_blob-2022311-2235903.png",
            "title": "Fethiyede Terkedilmiş Bir Cennet: Kayaköy",
            "desc": "Kayaköy gün geçtikçe fark edilen ve daha fazla ziyaretçi çeken mekanların başında geliyor. Bölgenin kendine has güzelliği içinde yarı yıkılmış tarihi evler bir tepenin yamaçlarını tamamen kaplıyor."
        },
        {
            "id": 3,
            "photoName": "k_blob-2022414-1328732.png",
            "title": "Fethiye At Turu",
            "desc": "Fethiye at turu haftanın her günü yapılmaktadır. Hava şartlarının müsaade ettiği zamanlarda günlük iki, üç seans yapılabilmekte, böylece en uygun zamanda gezmelere katılma imkanınız olmaktadır."
        },
        {
            "id": 4,
            "photoName": "k_blob-2022414-1325688.png",
            "title": "Fethiye Kiralık Villa",
            "desc": "Hem ülkemizin çeşitli bölgelerinden hem de yurtdışından gelen on binlerce kişiye ev sahipliği yapmakta olan bölge için kiralık villa ve apart hizmeti sunmakta olan birçok farklı firma da mevcuttur."
        }
    ]*/
    const handleImageButton = (e) => {
        e.preventDefault();
        console.log("butona basıldı")
    }

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
        <>
            <section className={`${styles["contentDetail"]} ${styles["villasDetail"]} ${styles["blogList"]}`}>
                <div className={styles.villas}>
                    <div className={styles.container}>
                        <div className={styles.box}>
                            <div className={styles.top}>
                                <div className={styles.titleBox}>
                                    <div className={styles.title}>Tüm Bloglar</div>
                                    <div className={styles.subTitle}>Toplam 4 adet blog listelendi.</div>
                                </div>
                            </div>
                            <div className={styles.bottom}>
                                <div className={styles.row}>
                                    <ul>
                                        {
                                             blogs.map(item => (
                                                 <li key={item.id}>
                                                     <div className={styles.column}>
                                                         <Link href={`bloglar/${item.id}-` + generateBlogLink(item.attributes.title)}>
                                                             <div className={styles.imgBox}>
                                                                 <div className={styles.carouselBox}>
                                                                     <div className={styles.bgImage} style={{ backgroundImage: `url(http://3.127.136.179:1337${item.attributes.image?.data?.attributes?.url})` }}></div>
                                                                     {/* <div className={styles.navButtons}>
                                                                         <button onClick={(e) => handleImageButton(e)}></button>
                                                                         <button onClick={(e) => handleImageButton(e)} className={styles.next}></button>
                                                                     </div> */}
                                                                 </div>
                                                             </div>
                                                             <div className={styles.textBox}>
                                                                 <div className={styles.title}>{item.attributes.title}</div>
                                                                 <div className={styles.desc}>{item.attributes.shortDesc}</div>
                                                             </div>
                                                         </Link>
                                                     </div>
                                                 </li>
                                             ))
                                                                                        
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}