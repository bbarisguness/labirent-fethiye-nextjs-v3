'use client';
import styles from "./page.module.css"
import Link from "next/link"

export default function Blog() {
    const handleImageButton = (e) => {
        e.preventDefault();
        console.log("butona basıldı")
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
                                        <li>
                                            <div className={styles.column}>
                                                <Link href="#">
                                                    <div className={styles.imgBox}>
                                                        <div className={styles.carouselBox}>
                                                            <div className={styles.bgImage} style={{ backgroundImage: "url(/images/k_blob-2022311-2233846.png)" }}></div>
                                                            <div className={styles.navButtons}>
                                                                <button onClick={(e) => handleImageButton(e)}></button>
                                                                <button onClick={(e) => handleImageButton(e)} className={styles.next}></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.textBox}>
                                                        <div className={styles.title}>Ölüdeniz Nerededir ve Nasıl Gidilir ?</div>
                                                        <div className={styles.desc}>
                                                            Türkiye’nin en güzel tatil yerlerinden biri olan Ölüdeniz’e ulaşım gayet kolaydır.
                                                            Kara yolu, hava yolu ve deniz yolu gibi çeşitlilik barındıran ulaşım seçenekleri ile ulaşım mümkündür.
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={styles.column}>
                                                <Link href="#">
                                                    <div className={styles.imgBox}>
                                                        <div className={styles.carouselBox}>
                                                            <div className={styles.bgImage} style={{ backgroundImage: "url(/images/k_blob-2022311-2235903.png)" }}></div>
                                                            <div className={styles.navButtons}>
                                                                <button onClick={(e) => handleImageButton(e)}></button>
                                                                <button onClick={(e) => handleImageButton(e)} className={styles.next}></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.textBox}>
                                                        <div className={styles.title}>Fethiyede Terkedilmiş Bir Cennet: Kayaköy</div>
                                                        <div className={styles.desc}>
                                                            Kayaköy gün geçtikçe fark edilen ve daha fazla ziyaretçi çeken mekanların başında geliyor.
                                                            Bölgenin kendine has güzelliği içinde yarı yıkılmış tarihi evler bir tepenin yamaçlarını tamamen kaplıyor.
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={styles.column}>
                                                <Link href="#">
                                                    <div className={styles.imgBox}>
                                                        <div className={styles.carouselBox}>
                                                            <div className={styles.bgImage} style={{ backgroundImage: "url(/images/k_blob-2022414-1328732.png)" }}></div>
                                                            <div className={styles.navButtons}>
                                                                <button onClick={(e) => handleImageButton(e)}></button>
                                                                <button onClick={(e) => handleImageButton(e)} className={styles.next}></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.textBox}>
                                                        <div className={styles.title}>Fethiye At Turu</div>
                                                        <div className={styles.desc}>
                                                            Fethiye at turu haftanın her günü yapılmaktadır. Hava şartlarının müsaade ettiği zamanlarda günlük iki, üç seans
                                                            yapılabilmekte, böylece en uygun zamanda gezmelere katılma imkanınız olmaktadır.
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={styles.column}>
                                                <Link href="#">
                                                    <div className={styles.imgBox}>
                                                        <div className={styles.carouselBox}>
                                                            <div className={styles.bgImage} style={{ backgroundImage: "url(/images/k_blob-2022414-1325688.png)" }}></div>
                                                            <div className={styles.navButtons}>
                                                                <button onClick={(e) => handleImageButton(e)}></button>
                                                                <button onClick={(e) => handleImageButton(e)} className={styles.next}></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.textBox}>
                                                        <div className={styles.title}>Fethiye Kiralık Villa</div>
                                                        <div className={styles.desc}>
                                                            Hem ülkemizin çeşitli bölgelerinden hem de yurtdışından gelen on binlerce kişiye ev sahipliği yapmakta olan bölge için
                                                            kiralık villa ve apart hizmeti sunmakta olan birçok farklı firma da mevcuttur.
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
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