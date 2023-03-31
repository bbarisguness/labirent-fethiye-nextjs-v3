'use client'
import styles from "./page.module.css"
import React, { useEffect, useState } from 'react'
import BreadCrumb from '@/components/breadCrumb/breadCrumb'
import TreeStep from '@/components/index/treestep/treestep'

export default function Blog({ params }) {
    const data = [
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
    ]

    const [blogData, setBlogData] = useState([])

    useEffect(() => {
        const blogId = params.blog[0]
        const x = data.filter((item) => { return item.id == blogId })
        window.scrollTo(0, 0)
        setBlogData(x[0])
    }, [])

    return (
        <>
            <BreadCrumb link={blogData.title} />
            <section className={`${styles['contentDetail']} ${styles['corporate']}`}>
                <div className={styles.titleBox}>
                    <div className={styles.container}>
                        <h1 className={styles.title}>{blogData.title}</h1>
                    </div>
                </div>
                <div className={styles.textBox}>
                    <div className={styles.container}>
                        <div className={styles.text}>
                            <img src={`/images/${blogData.photoName}`} />
                            <p>İçerik</p>
                        </div>
                    </div>
                </div>
                <TreeStep from="blogDetail" />
            </section>
        </>
    )
}