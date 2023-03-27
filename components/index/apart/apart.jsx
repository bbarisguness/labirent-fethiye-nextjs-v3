'use client';
import styles from "./apart.module.css"
import Link from "next/link"
import { stockData } from "@/data/data";
import VillaCard from "../villa/card/villaCard";

export default function Apart() {
    return (
        <div className={styles.apartments}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.titleBox}>
                        <div className={styles.title}>Apartlarımız</div>
                        <div className={styles.subTitle}>Apartlarımız arasından en seçkinlerini sizler için derledik.</div>
                    </div>
                    <ul>
                        {
                            stockData.map((data, index) =>
                                <VillaCard key={index} data={data} type="apart" />
                            )}
                    </ul>
                    <div className={styles.linkBox}>
                        <Link className={styles.greyButton} href="#">
                            <span>Tümü</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}