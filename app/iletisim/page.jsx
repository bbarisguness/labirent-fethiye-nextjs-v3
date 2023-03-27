import Link from "next/link";
import styles from "./page.module.css"
import Image from "next/image";
import BreadCrumb from "@/components/breadCrumb/breadCrumb";

export default function Iletisim() {
    return (
        <>
            <BreadCrumb link="contact" />
            <section className={`${styles["contentDetail"]} ${styles["contact"]}`}>
                <div className={styles.titleBox}>
                    <div className={styles.container}>
                        <h1 className={styles.title}>İletişim</h1>
                    </div>
                </div>
                <div className={styles.infoBox}>
                    <div className={styles.container}>
                        <ul className={styles.box}>
                            <li className={styles.item}>
                                <div className={styles.imageBox}><i className={styles.address}></i></div>
                                <div className={styles.nameBox}>Adres</div>
                                <div className={styles.descBox}>Açık adress.... Fethiye/Muğla</div>
                                <div className={styles.mapLinkBox}>
                                    <Link href="#">Haritada Görüntüle</Link>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.imageBox}><i className={styles.phone}></i></div>
                                <div className={styles.nameBox}>Bize Ulaşın</div>
                                <div className={styles.descBox}>0531 724 19 14<br />info@labirentfethiye.com</div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.imageBox}><i className={styles.clock}></i></div>
                                <div className={styles.nameBox}>Çalışma Saatlerimiz</div>
                                <div className={styles.descBox}>Pzt - Cum: 09:00 - 18:00<br />Cmt - Pz: 09:00 - 18:00</div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.imageBox}><i className={styles.like}></i></div>
                                <div className={styles.nameBox}>Bizi Takip Edin!</div>
                                <div className={styles.socialMedia}>
                                    <ul>
                                        <li>
                                            {/* <a href="https://www.facebook.com/Labirentfethiye/" target="_blank" className={styles.facebook}><i></i></a> */}
                                        </li>
                                        <li>
                                            {/* <a href="https://www.youtube.com/channel/UCHSwoqGIPpT6rqP2fsA9TwA" target="_blank" className={styles.youtube}><i></i></a> */}
                                        </li>
                                        <li>
                                            {/* <a href="https://www.instagram.com/labirentfethiye/" target="_blank" className={styles.instagram}><i></i></a> */}
                                        </li>
                                        <li>
                                            {/* <a href="https://g.page/labirentfethiye?share" target="_blank" className={styles.google}><i></i></a> */}
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.mapBox}>
                    <div className={styles.map}>HARİTA GELECEK</div>
                    <div className={styles.contactFormBox}>
                        <div className={styles.container}>
                            <div className={styles.contactForm}>
                                <div className={styles.formTitleBox}>Mesaj Gönderin</div>
                                <form id={styles.contactForm}>
                                    <ul>
                                        <li>
                                            <div className={styles.inputBox}>
                                                <div className={styles.inputName}>Ad</div>
                                                <input type="text" id="form_name" placeholder="•••••" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className={styles.inputBox}>
                                                <div className={styles.inputName}>Soyad</div>
                                                <input type="text" id="form_surname" placeholder="•••••" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className={styles.inputBox}>
                                                <div className={styles.inputName}>Telefon Numaranız</div>
                                                <input type="text" id="phone" placeholder="(•••) ••• •• ••" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className={styles.inputBox}>
                                                <div className={styles.inputName}>Email Adresiniz</div>
                                                <input type="text" id="form_email" placeholder="•••••••••" />
                                            </div>
                                        </li>
                                        <li className={styles.full}>
                                            <div className={styles.inputBox}>
                                                <div className={styles.inputName}>Mesajınız</div>
                                                <textarea id="form_message" rows="4" cols="50" placeholder="•••"></textarea>
                                            </div>
                                        </li>
                                    </ul>
                                </form>
                                <div className={`${styles["mask"]} ${styles["successMask"]}`}>
                                    <div className={styles.iconBox}>
                                        <Image src="/images/success.png" alt="Succes" width={102} height={101} />
                                    </div>
                                    <div className={styles.title}>Teşekkürler!</div>
                                    <div className={styles.desc}>Talebiniz bize ulaşmıştır.</div>
                                </div>
                                <div className={`${styles["mask"]} ${styles["errorMask"]}`}>
                                    <div className={styles.iconBox}>
                                        <Image src="/images/error.png" alt="Error" width={102} height={101} />
                                    </div>
                                    <div className={styles.title}>Gönderilemedi</div>
                                    <div className={styles.desc}>Talebiniz bize ulaşmamıştır.</div>
                                </div>
                                <div className={`${styles["linkBox"]} ${styles["sendContactForm"]}`}>
                                    <Link href="#" className={styles.blueButtonArrow}>
                                        <span>Mesaj Gönder</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}