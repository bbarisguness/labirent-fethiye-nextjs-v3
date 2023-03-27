import styles from "./villaCard.module.css"
import Link from "next/link"
import React, { useEffect, useState } from "react"

export default function VillaCard({ data, type, from }) {
    
    //console.log(data);

    const [imageIndex, setImageIndex] = useState(0)
    const [image, setImage] = useState()

    useEffect(() => {
        setImage(data?.attributes?.gallery?.data?.attributes?.image?.data[0]?.attributes.url)
    }, [data])

    useEffect(() => {
        //console.log(imageIndex);
        setImage(data?.attributes?.gallery?.data?.attributes?.image?.data[imageIndex]?.attributes?.url)
    }, [imageIndex])

    const imageHandler = (e, operation) => {
        e.preventDefault();
        if (operation == "next") {


            if (imageIndex == 2) { setImageIndex(0) }
            else { setImageIndex(imageIndex + 1) }


            // console.log(imageIndex);

            //setImage(data.attributes.gallery?.data?.attributes.image.data[imageIndex-1])
            //if (imageIndex == 3) { setImageIndex(1) } else { setImageIndex(imageIndex + 1) }
        }
        else {
            if (imageIndex == 0) { setImageIndex(2) }
            else { setImageIndex(imageIndex - 1) }

            //console.log(imageIndex);

        }
    }

    if (from == "newest") {
        return (
            <div className={styles.testimonialItemContainer}>
                <div className={styles.column}>
                    <Link href="#">
                        <div className={styles.imgBox}>
                            <div className={styles.carouselBox}>
                                <div className={styles.bgImage}>
                                    <div className={styles.imgNav}>
                                        <button onClick={(e) => imageHandler(e, "prev")}></button>
                                        <button style={{ transform: "rotate(180deg)" }} onClick={(e) => imageHandler(e, "next")}></button>
                                    </div>
                                </div>
                            </div>
                            {data.feature1 && <div className={styles.cardFeatures}>{data.feature1}</div>}
                            {data.feature3 && <div className={styles.cardFeatures2}>{data.feature3}</div>}
                            {data.feature2 && <div className={styles.cardFeatures3}>{data.feature2}</div>}
                        </div>
                        <div className={styles.textBox}>
                            <div className={styles.title}>{data.name}</div>
                            <div className={styles.location}>{data.location}</div>
                            <div className={styles.priceTitle}>{type == "villa" ? "Günlük Fiyat Aralığı" : "Haftalık Fiyat Aralığı"}</div>
                            <div className={styles.price}>{data.price} TL</div>
                            <div className={styles.features}>
                                <div className={styles.colon}>
                                    <i className={styles.person_icon}></i>
                                    <span>{data.numberOfPeople} Kişi</span>
                                </div>
                                <div className={styles.colon}>
                                    <i className={styles.room_icon}></i>
                                    <span>{data.numberOfRoom} Oda</span>
                                </div>
                                <div className={styles.colon}>
                                    <i className={styles.bath_icon}></i>
                                    <span>{data.numberOfBath} Banyo</span>
                                </div>
                            </div>

                        </div>
                    </Link>
                </div>
            </div>
        )
    }
    else {

        if (data.attributes) {

            //console.log(data.attributes.gallery?.data?.attributes.image.data.length);

            return (
                <li id={styles.cardContainer}>
                    <div className={styles.column}>

                        <Link href={`/${data.id}-${data.attributes.name.replace(' ', '-')}`}>


                            <div className={styles.imgBox}>
                                <div className={styles.carouselBox}>
                                    <div className={styles.bgImage} style={{ backgroundImage: `url(http://3.127.136.179:1337${image})` }}>
                                        <div className={styles.imgNav}>
                                            <button onClick={(e) => imageHandler(e, "prev")}></button>
                                            <button style={{ transform: "rotate(180deg)" }} onClick={(e) => imageHandler(e, "next")}></button>
                                        </div>
                                    </div>
                                </div>
                                {data.attributes.ticketLeftTop && <div className={styles.cardFeatures}>{data.attributes.ticketLeftTop}</div>}
                                {data.attributes.ticketBottomRight && <div className={styles.cardFeatures2}>{data.attributes.ticketBottomRight}</div>}
                                {data.attributes.ticketLeftBottom && <div className={styles.cardFeatures3}>{data.attributes.ticketLeftBottom}</div>}
                            </div>
                            <div className={styles.textBox}>
                                <div className={styles.title}>{data.attributes.name}</div>
                                {data.attributes.region.data ? <div className={styles.location}>Fethiye / {data.attributes.region.data.attributes?.name}</div> : <></>}
                                <div className={styles.priceTitle}>{type == "villa" ? "Günlük Fiyat Aralığı" : "Haftalık Fiyat Aralığı"}</div>
                                {data.attributes.price_tables.data ? <div className={styles.price}>{data.attributes.price_tables?.data[1]?.attributes?.price} TL - {data.attributes.price_tables?.data[0]?.attributes?.price} TL</div> : <></>}
                                <div className={styles.features}>
                                    <div className={styles.colon}>
                                        <i className={styles.person_icon}></i>
                                        <span>{data.attributes.person} Kişi</span>
                                    </div>
                                    <div className={styles.colon}>
                                        <i className={styles.room_icon}></i>
                                        <span>{data.attributes.room} Oda</span>
                                    </div>
                                    <div className={styles.colon}>
                                        <i className={styles.bath_icon}></i>
                                        <span>{data.attributes.bath} Banyo</span>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    </div>
                </li>
            )
        }
        else {
            return (<div>loading</div>)
        }
    }
}