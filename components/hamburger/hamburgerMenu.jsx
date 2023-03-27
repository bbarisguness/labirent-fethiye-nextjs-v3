'use client';
import styles from "./hamburgerMenu.module.css"
import Link from "next/link"
import { useSelector, useDispatch } from "react-redux"
import { changeHamburgerMenuState } from "@/store/globalState";
import { useEffect, useState } from "react"

export default function HamburgerMenu() {
    const dispatch = useDispatch()
    const [menu1, setMenu1] = useState(false)
    const [menu2, setMenu2] = useState(false)

    const handleRoute = () => {
        dispatch(changeHamburgerMenuState(false))
    }

    const { isHamburgerMenuActive } = useSelector(state => state.globalState)// true or false
    return (
        <section className={`${styles["hamburgerMenu"]} ${isHamburgerMenuActive ? styles["active"] : ""}`}>
            <div className={styles.hamburgerMenuBox}>
                <div className={styles.menuCloseBox}>
                    <div onClick={() => dispatch(changeHamburgerMenuState(false))} className={styles.menuClose}></div>
                </div>
                <div className={styles.hmMenu}>
                    <ul className={styles.hmMenuUl}>
                        <li className={styles.hmMenuLi}>
                            <Link onClick={handleRoute} href="/" className={styles.hmMenuLink}>ANASAYFA</Link>
                        </li>
                        <li onClick={() => setMenu1(!menu1)} className={`${styles["hmMenuLi"]} ${styles["menuOpen"]} ${menu1 ? styles["open"] : ""}`}>
                            <Link href="#" className={styles.hmMenuLink}>KİRALIK VİLLALAR</Link>
                            <ul>
                                <li><Link onClick={handleRoute} href="villalar/balayi-villalari">Balayı Villaları</Link></li>
                                <li><Link onClick={handleRoute} href="#">Popüler Villalar</Link></li>
                                <li><Link onClick={handleRoute} href="#">Çocuk Havuzlu Villalar</Link></li>
                                <li><Link onClick={handleRoute} href="#">Ekonomik Manzaralı</Link></li>
                                <li><Link onClick={handleRoute} href="#">Korunaklı Villalar</Link></li>
                                <li><Link onClick={handleRoute} href="#">Kış Aylarına Uygun</Link></li>
                            </ul>
                        </li>
                        <li className={styles.hmMenuLi}>
                            <Link onClick={handleRoute} href="#" className={styles.hmMenuLink}>KİRALIK APARTLAR</Link>
                        </li>
                        <li className={styles.hmMenuLi}>
                            <Link onClick={handleRoute} href="#" className={styles.hmMenuLink}>YARDIM / DESTEK</Link>
                        </li>
                        <li className={styles.hmMenuLi}>
                            <Link onClick={handleRoute} href="/iletisim" className={styles.hmMenuLink}>İLETİŞİM</Link>
                        </li>
                        <li onClick={() => setMenu2(!menu2)} className={`${styles["hmMenuLi"]} ${styles["menuOpen"]} ${menu2 ? styles["open"] : ""}`}>
                            <Link href="#" className={styles.hmMenuLink}>KURUMSAL</Link>
                            <ul>
                                <li>
                                    <Link onClick={handleRoute} href="/hakkimizda">Hakkımızda</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}