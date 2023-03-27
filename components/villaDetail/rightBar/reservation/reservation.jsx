import styles from "./reservation.module.css"
import Link from "next/link"
import { DateRange } from "react-date-range"
import { useState } from "react"

export default function Reservation() {
    const [isDateRangeOpen, setDateRangeOpen] = useState(false)
    const [reservationDate, setReservationDate] = useState(
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    )
    const [isNumberPeopleMenuOpen, setNumberPeople] = useState(false)

    return (
        <div className={styles.top}>
            <div className={styles.reservationBox}>
                <div className={styles.reservationTitleText}>
                    <div className={styles.textTop}>
                        <div className={styles.price}>1.900 TL</div>
                        <div className={styles.status}>Musaitlik Durum</div>
                    </div>
                    <div className={styles.textBottom}>
                        <span>Başlayan Fiyatlarla(Gecelik)</span>
                    </div>
                </div>
                <div style={{ position: "relative" }} className={styles.colon}>
                    <div className={styles.colonTitle}>Giriş-Çıkış</div>
                    <div onClick={() => setDateRangeOpen(!isDateRangeOpen)} className={styles.colonInput}>
                        <i className={styles.loginDateIcon}></i>
                        <input type="text" placeholder="21-22-2023" readOnly />
                    </div>
                    {isDateRangeOpen && (<DateRange
                        editableDateInputs={true}
                        onChange={(item) => setReservationDate(item.selection)}
                        moveRangeOnFirstSelection={false}
                        ranges={[reservationDate]}
                        className={styles.dateRange}
                        minDate={new Date()}
                        months={2}
                        direction="vertical"
                    />)}
                </div>
                <div className={styles.colon}>
                    <div className={styles.colonTitle}>Kişi Sayısı</div>
                    <div onClick={() => setNumberPeople(!isNumberPeopleMenuOpen)} className={styles.colonInput}>
                        <Link className={styles.peopleIcon} href="#"></Link>
                        <input type="text" placeholder="2 Misafir, 1 Bebek" readOnly></input>
                    </div>
                    <div className={`${styles["numberPeopleOpen"]} ${isNumberPeopleMenuOpen && styles["active"]}`}>
                        <ul>
                            <li>
                                <div className={styles.leftPeople}>
                                    <div className={styles.title}>Yetişkinler</div>
                                    <div className={styles.desc}>13 ve üzeri yaştakiler</div>
                                </div>
                                <div className={styles.rightPeople}>
                                    <div className={styles.minus}></div>
                                    <input type={styles.text} disabled value={0} max={99} />
                                    <div className={styles.plus}></div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.leftPeople}>
                                    <div className={styles.title}>Yetişkinler</div>
                                    <div className={styles.desc}>13 ve üzeri yaştakiler</div>
                                </div>
                                <div className={styles.rightPeople}>
                                    <div className={styles.minus}></div>
                                    <input type={styles.text} disabled value={0} max={99} />
                                    <div className={styles.plus}></div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.leftPeople}>
                                    <div className={styles.title}>Yetişkinler</div>
                                    <div className={styles.desc}>13 ve üzeri yaştakiler</div>
                                </div>
                                <div className={styles.rightPeople}>
                                    <div className={styles.minus}></div>
                                    <input type={styles.text} disabled value={0} max={99} />
                                    <div className={styles.plus}></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.linkBox}>
                    <Link className={styles.blueButtonArrow} href="#">
                        <span>Villa Müsaitliği Sorgula</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}