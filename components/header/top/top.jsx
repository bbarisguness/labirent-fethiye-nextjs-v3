import styles from "./top.module.css"
import Link from "next/link"
import { changeLang } from "@/store/globalState"
import { useDispatch, useSelector } from "react-redux"

export default function HeaderTop() {
    const dispatch = useDispatch()

    const { lang } = useSelector(state => state.globalState)// Dil değişkeni global stateden alındı

    const changeLanguage = () => {
        if (lang == "en") dispatch(changeLang("tr"))
        else dispatch(changeLang("en"))
    }

    const language = () => {
        if (lang == "en") return "English"
        else if (lang == "tr") return "Turkish"
    }

    return (
        <div className={styles.top}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.left}>
                        <div className={styles.colon}>
                            <i style={{ backgroundImage: `url(/images/call.png)` }}></i>
                            <span>Bize Ulaşın <a href="tel:02428443988">+90 252 616 66 48</a></span>
                        </div>
                        <div className={styles.colon}>
                            <i style={{ backgroundImage: `url(/images/clock.png)` }}></i>
                            <span>Çalışma Saatleri : 09:00 - 18:00</span>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.socialMedia}>
                            <div className={styles.socialText}>Bizi Takip Edin</div>
                            <ul>
                                <li>
                                    <Link href='#' className={styles.facebook}>
                                        <i></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className={styles.youtube}>
                                        <i></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className={styles.instagram}>
                                        <i></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className={styles.google}>
                                        <i></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.lang}>
                            <Link onClick={changeLanguage} href="#">{language()}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

