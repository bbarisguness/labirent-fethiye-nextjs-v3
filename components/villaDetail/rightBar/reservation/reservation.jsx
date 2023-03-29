import styles from "./reservation.module.css"
import Link from "next/link"
import { DateRange } from "react-date-range"
import { useRef, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { changeNumberOfPeople } from "@/store/globalState";

export default function Reservation() {
    const inputRefNumberOfPeople = useRef()
    const menuRefNumberOfPeople = useRef()
    const menuRefCalendar = useRef()
    const [dateClickCount, setDateClickCount] = useState(0)
    const [datePlaceHolder, setdatePlaceHolder] = useState("Tarih Seçin")

    useEffect(() => {
        if (numberOfAdults != 0 || numberOfChild != 0 || numberOfBabies != 0) { inputRefNumberOfPeople.current.value = `${numberOfAdults + numberOfChild} Misafir, ${numberOfBabies} Bebek` } else { inputRefNumberOfPeople.current.value = "2 Misafir, 1 Bebek" }
    })

    const dispatch = useDispatch()
    const { numberOfAdults, numberOfChild, numberOfBabies } = useSelector(state => state.globalState)

    //Change People Number
    const changeNumber = (operation, type) => {
        dispatch(changeNumberOfPeople([type, operation]))
    }

    const girisveCikisTarihiniAl = () => {
        let startDate = reservationDate.startDate
        let endDate = reservationDate.endDate
        let string = startDate.getDate() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getFullYear() + " / " + endDate.getDate() + "-" + (endDate.getMonth() + 1) + "-" + endDate.getFullYear()
        setdatePlaceHolder(string)
    }

    const [isDateRangeOpen, setDateRangeOpen] = useState(false)
    const [reservationDate, setReservationDate] = useState(
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    )

    useEffect(() => {
        setDateClickCount(dateClickCount + 1)
        //console.log(reservationDate);
        if (!(reservationDate.startDate.getTime() == reservationDate.endDate.getTime())) {
            girisveCikisTarihiniAl()
        }
    }, [reservationDate])

    useEffect(() => {
        if (isDateRangeOpen) setDateClickCount(1)
    }, [isDateRangeOpen])

    useEffect(() => {
        if (dateClickCount != 1 && dateClickCount % 2 == 1) {
            setDateRangeOpen(false)
        }
    }, [dateClickCount])

    const [isNumberPeopleMenuOpen, setNumberPeople] = useState(false)


    useEffect(() => {
        let handler = (e) => {

            //Kişi sayısı menüsü için
            if (!menuRefNumberOfPeople.current.contains(e.target)) {
                setNumberPeople(false)
            }

            //takvim menüsü için
            if (!menuRefCalendar.current.contains(e.target)) {
                setDateRangeOpen(false)
            }
        }

        document.addEventListener("mouseup", handler)

        return () => {
            document.removeEventListener("mouseup", handler)
        }
    })

    function handleClick() {

        // yıl : reservationDate.startDate.getFullYear()
        //  ay : (reservationDate.startDate.getMonth() + 1)
        // gün : reservationDate.startDate.getDate()

        console.log('Giriş Tarihi : ' + reservationDate.startDate.getFullYear() + '-' + (reservationDate.startDate.getMonth() + 1) + '-' + reservationDate.startDate.getDate());
        console.log('Çıkış Tarihi : ' + reservationDate.endDate.getFullYear() + '-' + (reservationDate.endDate.getMonth() + 1) + '-' + reservationDate.endDate.getDate());

    }

    return (
        <div className={styles.top}>
            <div className={styles.reservationBox}>
                <div className={styles.reservationTitleText}>
                    <div className={styles.textTop}>
                        <div className={styles.price}>1.900 TL</div>
                        {/* <div className={styles.status}>Musaitlik Durum</div> */}
                    </div>
                    <div className={styles.textBottom}>
                        <span>Başlayan Fiyatlarla(Gecelik)</span>
                    </div>
                </div>
                <div ref={menuRefCalendar} style={{ position: "relative" }} className={styles.colon}>
                    <div className={styles.colonTitle}>Giriş / Çıkış</div>
                    <div onClick={() => setDateRangeOpen(!isDateRangeOpen)} className={styles.colonInput}>
                        <i className={styles.loginDateIcon}></i>
                        <input type="text" placeholder={datePlaceHolder} readOnly disabled />
                    </div>
                    {isDateRangeOpen && (<DateRange
                        editableDateInputs={false}
                        onChange={(item) => setReservationDate(item.selection)}
                        moveRangeOnFirstSelection={false}
                        ranges={[reservationDate]}
                        className={styles.dateRange}
                        minDate={new Date()}
                        months={2}
                        direction="vertical"
                    />)}
                </div>
                <div ref={menuRefNumberOfPeople} className={styles.colon}>
                    <div className={styles.colonTitle}>Kişi Sayısı</div>
                    <div onClick={() => setNumberPeople(!isNumberPeopleMenuOpen)} className={styles.colonInput}>
                        <Link className={styles.peopleIcon} href="#"></Link>
                        <input ref={inputRefNumberOfPeople} type="text" placeholder="2 Misafir, 1 Bebek" readOnly disabled></input>
                    </div>
                    <div className={`${styles["numberPeopleOpen"]} ${isNumberPeopleMenuOpen && styles["active"]}`}>
                        <ul>
                            <li>
                                <div className={styles.leftPeople}>
                                    <div className={styles.title}>Yetişkinler</div>
                                    <div className={styles.desc}>13 ve üzeri yaştakiler</div>
                                </div>
                                <div className={styles.rightPeople}>
                                    <div onClick={() => numberOfAdults != 0 && changeNumber("-", "adult")} className={styles.minus}></div>
                                    <input type={styles.text} disabled value={numberOfAdults} max={99} />
                                    <div onClick={() => changeNumber("+", "adult")} className={styles.plus}></div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.leftPeople}>
                                    <div className={styles.title}>Çocuklar</div>
                                    <div className={styles.desc}>13 ve üzeri yaştakiler</div>
                                </div>
                                <div className={styles.rightPeople}>
                                    <div onClick={() => numberOfChild != 0 && changeNumber("-", "child")} className={styles.minus}></div>
                                    <input type={styles.text} disabled value={numberOfChild} max={99} />
                                    <div onClick={() => changeNumber("+", "child")} className={styles.plus}></div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.leftPeople}>
                                    <div className={styles.title}>Bebekler</div>
                                    <div className={styles.desc}>13 ve üzeri yaştakiler</div>
                                </div>
                                <div className={styles.rightPeople}>
                                    <div onClick={() => numberOfBabies != 0 && changeNumber("-", "babies")} className={styles.minus}></div>
                                    <input type={styles.text} disabled value={numberOfBabies} max={99} />
                                    <div onClick={() => changeNumber("+", "babies")} className={styles.plus}></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.linkBox}>
                     {/* <Link className={styles.blueButtonArrow} href="javascript" onClick={handleClick}>
                        <span>Villa Müsaitliği Sorgula</span>
                    </Link>  */}
                    <button className={styles.blueButtonArrow} onClick={handleClick}>
                        <span>Villa Müsaitliği Sorgula</span>
                    </button> 
                </div>
            </div>
        </div>
    )
}