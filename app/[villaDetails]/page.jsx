'use client';
import VillaCard from "@/components/index/villa/card/villaCard";
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import styles from "./page.module.css"
import { stockData } from "@/data/data";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import FoodPackage from "@/components/villaDetail/rightBar/foodPackage/foodPackage";
import Reservation from "@/components/villaDetail/rightBar/reservation/reservation";
import Calendar from "@/components/villaDetail/leftBar/calendar/calendar";
import DistanceRuler from "@/components/villaDetail/leftBar/distanceRuler/distanceRuler";
import Gallery from "@/components/villaDetail/leftBar/gallery/gallery";
import PriceTable from "@/components/villaDetail/leftBar/priceTable/priceTable";
var qs = require('qs');


export default function VillaDetail({ params }) {

    let villaId = params.villaDetails.split('-')[0]

    const [villa, setVilla] = useState(false)
    const [nearVillas, setNearVillas] = useState([])

    const [ready, setReady] = useState(false)

    useEffect(() => {
        if (villaId > 0) {
            //console.log(villaId);

            const query = qs.stringify(
                {
                    //populate: ["gallery.image", "categories", "distance_rulers", "price_tables.price_type", "region", "localizations"]
                    populate: {
                        distance_rulers: {
                            fields: ['name', 'value'],
                        },
                        gallery: {
                            populate: {
                                image: {
                                    //populate: "*"
                                    //fields: ["url"],
                                    populate: {
                                        formats: {
                                            populate: ["small","thumbnail","medium"]
                                        }
                                    },
                                    sort:["name:asc"]
                                }
                            }
                        },
                        categories: {
                            fields: ["name"]
                        },
                        region: {
                            fields: ["name"]
                        },
                        price_tables: {
                            sort: ['line:asc'],
                            fields: ["title", "description", "price", "firstTime", "lastTime", "line"],
                            populate: {
                                price_type: {
                                    fields: ["slug"]
                                }
                            }

                        }
                    },
                },
                {
                    encodeValuesOnly: true, // prettify URL
                }
            );

            fetch(`http://3.127.136.179:1337/api/villas/${villaId}?${query}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        setReady(true)
                        setVilla(result.data)
                        console.log(result.data);
                        //console.log(result.data.attributes.distance_rulers.data)                            
                        //console.log(result.data[0].attributes.gallery.data.attributes.image.data);
                    },
                    (error) => {

                    }
                )


            const query2 = qs.stringify(
                {
                    // filters: {
                    //     region: {
                    //         id: '2'
                    //     }
                    // },
                    populate: {
                        distance_rulers: {
                            fields: ['name', 'value'],
                        },
                        gallery: {
                            populate: {
                                image: {
                                    //populate: "*"
                                    //fields: ["url"],
                                    populate: {
                                        formats: {
                                            populate: "small"
                                        }
                                    }
                                }
                            }
                        },
                        categories: {
                            fields: ["name"]
                        },
                        region: {
                            fields: ["name"]
                        },
                        price_tables: {
                            sort: ['line:asc'],
                            fields: ["title", "description", "price", "firstTime", "lastTime", "line"],
                            populate: {
                                price_type: {
                                    fields: ["slug"]
                                }
                            }

                        }
                    },
                    pagination: {
                        page: 1,
                        pageSize: 4,
                    }
                },
                {
                    encodeValuesOnly: true, // prettify URL
                }
            );


            fetch(`http://3.127.136.179:1337/api/villas?${query2}`)
                .then(res => res.json())
                .then(
                    (result) => {

                        setNearVillas(result.data)
                        //console.log(result.data);
                        //console.log(result.data.attributes.distance_rulers.data)                            
                        //console.log(result.data[0].attributes.gallery.data.attributes.image.data);
                    },
                    (error) => {

                    }
                )
        }

        //setReady(true)

    }, [villaId])

   

    const [isDescOpen, setisDescOpen] = useState(false)
    if (villa) {
        return (
            <>
                <section className={styles.breadCrumb}>
                    <div className={styles.container}>
                        <div className={styles.breadCrumbBox}>
                            <ul className={styles.breadCrumbList}>
                                <li className={styles.breadCrumbItem}>
                                    <Link href="/">Anasayfa</Link>
                                </li>
                                <li className={styles.breadCrumbItem}>
                                    <Link href="#">Popüler Villalar</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className={`${styles["contentDetail"]} ${styles["villaDetail"]}`}>
                    <div className={styles.detailTitleBox}>
                        <div className={styles.container}>
                            <div className={styles.box}>
                                <div className={styles.left}>
                                    <div className={styles.detailTitle}>Villa Almina</div>
                                    <div className={styles.villaInformation}>
                                        <div className={styles.features}>
                                            <div className={styles.colon}>
                                                <i className={styles.pin_icon}></i>
                                                <span>Fethiye / Ölüdeniz</span>
                                            </div>
                                            <div className={styles.colon}>
                                                <i className={styles.person_icon}></i>
                                                <span>6 Kişi</span>
                                            </div>
                                            <div className={styles.colon}>
                                                <i className={styles.room_icon}></i>
                                                <span>3 Oda</span>
                                            </div>
                                            <div className={styles.colon}>
                                                <i className={styles.bath_icon}></i>
                                                <span>3 Banyo</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.right}>
                                    <div className={styles.priceType}>Gecelik En Düşük</div>
                                    <div className={styles.price}>1.900 - 5.900 TL</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.productImagesBox}>
                        <div className={styles.container}>
                            <div className={styles.productImages}>
                                <div className={styles.row}>
                                    <Gallery data={villa.attributes.gallery.data.attributes.image} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.villaDetailContentBox}>
                        <div className={styles.container}>
                            <div className={styles.villaDetailContent}>
                                <div className={styles.left}>
                                    <div className={styles.villaDetailTitle}>Villa Açıklama</div>
                                    <div className={styles.villaDetailDesc}>
                                        <div className={`${styles["desc"]} ${isDescOpen && styles["active"]}`} >
                                            <p>
                                                {villa.attributes.description}
                                            </p>
                                        </div>
                                        <div className={`${styles["readMore"]} ${isDescOpen && styles["active"]}`}>
                                            <div className={styles.allButton}>
                                                <span onClick={() => setisDescOpen(true)} className={styles.first}>Devamı...</span>
                                                <span onClick={() => setisDescOpen(false)} className={styles.last}>Kapat...</span>
                                            </div>
                                        </div>
                                    </div>
                                    <DistanceRuler data={villa.attributes.distance_rulers} />
                                    <PriceTable data={villa.attributes.price_tables} />
                                    {/* <Calendar ready={ready} /> */}
                                </div>
                                <div className={styles.right}>
                                    <div className={styles.general}>
                                        <Reservation />
                                        <FoodPackage />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.dualBoxes}>
                        <div className={styles.container}>
                            <div className={styles.row}>
                                <ul>
                                    <li>
                                        <div className={styles.title}>Konum</div>
                                        <div className={styles.box} style={{ backgroundImage: `url(https://labirentfethiye.com/image/b_villa-kose-2022322-1041451.jpg)`, backgroundPosition: "center", backgroundSize: "100% 100%" }}>
                                            {/* Harita Gelecek */}
                                            <div className={styles.linkBox} style={{ position: "relative", width: "50px", height: "50px", left: "15px", top: "15px" }}>
                                                <Link className={styles.blueButton} href="#">
                                                    <span>Konum</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={styles.popupImage}>
                                        <div className={styles.title}>Tanıtım Videosu</div>
                                        <div className={styles.box}>
                                            <Link href="#">
                                                <div className={styles.imageBox}>
                                                    <div className={styles.img} style={{ backgroundImage: `url(https://labirentfethiye.com/image/b_villa-kose-2022322-1041451.jpg)` }}></div>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.apartments}>
                        <div className={styles.container}>
                            <div className={styles.box}>
                                <div className={styles.titleBox}>
                                    <div className={styles.title}>Yakınındaki Villalar</div>
                                    <div className={styles.subTitle}>Villalarımız arasından en seçkinlerini sizler için derledik.</div>
                                </div>
                                <ul>
                                    {
                                        nearVillas.map((data, index) => (
                                            <VillaCard key={index} data={data} />
                                        ))
                                    }
                                    {/* <VillaCard data={stockData[0]} />
                                    <VillaCard data={stockData[1]} />
                                    <VillaCard data={stockData[2]} />
                                    <VillaCard data={stockData[3]} /> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
    else {
        return (<>loading</>)
    }

}