'use client';
import VillaTab from "./tab/tab"
import styles from "./villa.module.css"
import VillaCard from "./card/villaCard"
import { useEffect, useState } from "react"
import Link from "next/link"
const qs = require('qs');

export default function Villa() {

    const [activeTabIndex, setActiveTabIndex] = useState(5)
    const [villas, setVillas] = useState([])

    const villaTypes = ["balayi-villalari-", "cocuk-havuzlu-villalar-", "3", "ekonomik-villalar-", "populer-villalar-", "korunakli-villalar-", "kis-aylarina-uygun-villalar-"]

    const generateLink = () => {
        return `/villalar/${villaTypes[activeTabIndex - 1] + activeTabIndex}`
    }

    const query = qs.stringify(
        {
            filters: {
                categories: {
                    id: {
                        $eq: activeTabIndex
                    }
                },
                isVilla: {
                    $eq: true
                }
            },
            pagination: {
                page: 1,
                pageSize: 8,
            },
            populate: ["gallery.image", "price_tables.price_type", "region", "localizations"]
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );

    useEffect(() => {
        fetch(`http://3.127.136.179:1337/api/villas?${query}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setVillas(result.data)
                    //console.log(result.data);
                    //console.log(result.data[0].attributes.gallery.data.attributes.image.data);
                },
                (error) => {

                }
            )

        //console.log(`http://3.127.136.179:1337/api/villas?${query}`);
    }, [activeTabIndex])



    return (
        <div className={styles.villas}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.titleBox}>
                        <div className={styles.title}>Villalarımız</div>
                        <div className={styles.subTitle}>Villalarımız arasından en seçkinlerini sizler için derledik.</div>
                    </div>
                    <div className={styles.top}>
                        <ul>
                            <VillaTab activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex} />
                        </ul>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.row}>
                            <ul>

                                {
                                    villas.map((villa, index) => <VillaCard key={index} data={villa} type="villa" />)
                                }
                                <div className={styles.linkBox}>
                                    <Link className={styles.blueButton2} href={generateLink()}>
                                        <span>Tümünü Görüntüle</span>
                                    </Link>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}