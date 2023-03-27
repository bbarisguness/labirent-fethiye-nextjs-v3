import styles from "./priceTable.module.css"
import { useState } from "react"
import Link from "next/link"

export default function PriceTable({ data }) {

    //console.log(data.data);

    const [priceTableActiveIndex, setPriceTableActiveIndex] = useState(0)

    const handlePriceTable = (index) => {
        setPriceTableActiveIndex(index)
    }

    const priceType = () => {
        if (priceTableActiveIndex == 0) return "₺"
        else if (priceTableActiveIndex == 1) return "$"
        else if (priceTableActiveIndex == 2) return "€"
        else return "£"
    }

    return (
        <div className={styles.priceTable}>
            <div className={styles.top}>
                <div className={styles.title}>Fiyat Tablosu</div>
                <div className={styles.exchangeRateMenu}>
                    <ul>
                        <li onClick={() => handlePriceTable(0)} className={`${priceTableActiveIndex == 0 ? styles["active"] : ""}`}><Link onClick={(e) => e.preventDefault()} href="#">TL</Link></li>
                        <li onClick={() => handlePriceTable(1)} className={`${priceTableActiveIndex == 1 ? styles["active"] : ""}`}><Link onClick={(e) => e.preventDefault()} href="#">DOLAR</Link></li>
                        <li onClick={() => handlePriceTable(2)} className={`${priceTableActiveIndex == 2 ? styles["active"] : ""}`}><Link onClick={(e) => e.preventDefault()} href="#">EURO</Link></li>
                        <li onClick={() => handlePriceTable(3)} className={`${priceTableActiveIndex == 3 ? styles["active"] : ""}`}><Link onClick={(e) => e.preventDefault()} href="#">POUND</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottom}>
                <ul>

                    {
                        data.data.map((data, index) => (
                            <li key={index}>
                                <div className={styles.box}>
                                    <div className={styles.leftBox}>
                                        <div className={styles.imageBox}><i className={styles.cloud_icon}></i></div>
                                    </div>
                                    <div className={styles.rightBox}>
                                        <div className={styles.name}>
                                        {data.attributes.title}
                                        </div>
                                        <div className={styles.desc}>{data.attributes.description}</div>
                                        <div className={styles.price}>{data.attributes.price} {priceType()}</div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }


                </ul>
                <p className={styles.notice}>Özel günlerde (Bayram, Yılbaşı, vb..) fiyat değişiklik göstermektedir.</p>
            </div>
        </div>
    )
}