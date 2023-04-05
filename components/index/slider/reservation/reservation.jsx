import { useEffect, useRef, useState } from "react"
import styles from "./reservation.module.css"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from "react-date-range"
import { useDispatch, useSelector } from "react-redux";
import { changeDate, changeNumberOfPeople, changeReservationFilter } from "@/store/globalState";

export default function ReservationBox() {
    const [datePlaceHolder, setdatePlaceHolder] = useState("Tarih Seçin")
    const [dateClickCount, setDateClickCount] = useState(0)
    const inputRefNumberOfPeople = useRef()
    const menuRefNumberOfPeople = useRef()
    const menuRefCalendar = useRef()
    const dispatch = useDispatch()
    const { reservationStartDate, reservationEndDate, numberOfAdults, numberOfChild, numberOfBabies } = useSelector(state => state.globalState)
    const [isNumberPeopleMenuOpen, setNumberPeople] = useState(false)
    const [openDate, setOpenDate] = useState(false)

    const [reservationDate, setReservationDate] = useState(
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    )

    useEffect(() => {
        setDateClickCount(dateClickCount + 1)
        console.log(reservationDate);
        if (!(reservationDate.startDate.getTime() == reservationDate.endDate.getTime())) {
            girisveCikisTarihiniAl()
        }
    }, [reservationDate])

    useEffect(() => {
        if (openDate) setDateClickCount(1)
    }, [openDate])

    useEffect(() => {
        if (dateClickCount != 1 && dateClickCount % 2 == 1) {
            setOpenDate(false)
        }
    }, [dateClickCount])

    const changeNumber = (operation, type) => {
        dispatch(changeNumberOfPeople([type, operation]))
    }

    const getDate = () => {
        let date = new Date(1995, 11, 17)
        let day = date.getUTCDate().toString()
        let month = (parseInt(date.getUTCMonth()) + 1).toString()
        let year = date.getUTCFullYear().toString()
        return (day + "-" + month + "-" + year)
    }

    const handleSearch = () => {
        let startDate = reservationDate.startDate.toString()
        let endDate = reservationDate.endDate.toString()
        dispatch(changeDate(startDate + "*" + endDate))
    }

    const girisveCikisTarihiniAl = () => {
        let startDate = reservationDate.startDate
        let endDate = reservationDate.endDate
        let string = startDate.getDate() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getFullYear() + " - " + endDate.getDate() + "-" + (endDate.getMonth() + 1) + "-" + endDate.getFullYear()
        setdatePlaceHolder(string)
    }

    //Herhangi bir state güncellendiğinde çalışan kod bloğu
    useEffect(() => {
        if (numberOfAdults != 0 || numberOfChild != 0 || numberOfBabies != 0) { inputRefNumberOfPeople.current.value = `${numberOfAdults + numberOfChild} Misafir, ${numberOfBabies} Bebek` } else { inputRefNumberOfPeople.current.value = "2 Misafir, 1 Bebek" }
    })

    useEffect(() => {
        let handler = (e) => {

            //Kişi sayısı menüsü için
            if (!menuRefNumberOfPeople.current.contains(e.target)) {
                setNumberPeople(false)
            }

            //takvim menüsü için
            if (!menuRefCalendar.current.contains(e.target)) {
                setOpenDate(false)
            }
        }

        document.addEventListener("mouseup", handler)

        return () => {
            document.removeEventListener("mouseup", handler)
        }
    })

    //Global rezervasyon tarihleri değiştiğinde çalışan kod bloğu(search Butonuna basınca)
    useEffect(() => {
        //console.log(reservationStartDate + " " + reservationEndDate)
    }, [reservationStartDate, reservationEndDate])

    return (
        <div className={styles.reservationBox}>
            <div className={`${styles["colon"]} ${styles["location"]}`}>
                <div className={styles.colonTitle}>Konum</div>
                <div className={styles.colonInput}>
                    <i className={styles.searchIcon} />
                    <input onChange={(e) => dispatch(changeReservationFilter(e.target.value))} type="text" placeholder="Villa Adı" />
                </div>
            </div>
            <div ref={menuRefCalendar} className={`${styles["colon"]} ${styles["date"]}`}>
                <div className={styles.colonTitle}>Giriş</div>
                <div onClick={() => setOpenDate(!openDate)} className={styles.colonInput}>
                    <i className={styles.dateIcon}></i>

                    <input disabled={true} type="text" className="loginDateInput datepicker" placeholder={datePlaceHolder} />

                </div>
                {openDate && (<DateRange
                    editableDateInputs={true}
                    onChange={(item) => setReservationDate(item.selection)}
                    moveRangeOnFirstSelection={false}
                    ranges={[reservationDate]}
                    className={styles.dateRange}
                    minDate={new Date()}
                    months={2}
                    direction="horizontal"
                />)}
            </div>
            <div ref={menuRefNumberOfPeople} className={`${styles["colon"]} ${styles["numberPeople"]}`}>
                <div className={styles.colonTitle}>Kişi Sayısı</div>
                <div onClick={() => setNumberPeople(!isNumberPeopleMenuOpen)} className={styles.colonInput}>
                    <i className={styles.peopleIcon} />
                    <input ref={inputRefNumberOfPeople} disabled={true} type="text" placeholder="2 Misafir, 1 Bebek" />
                </div>
                <div className={`${styles["numberPeopleOpen"]} ${isNumberPeopleMenuOpen ? styles["active"] : ""}`}>
                    <ul>
                        <li>
                            <div className={styles.left}>
                                <div className={styles.title}>Yetişkinler</div>
                                <div className={styles.desc}>13 ve üzeri yaştakiler</div>
                            </div>
                            <div className={styles.right}>
                                <div onClick={() => numberOfAdults != 0 && changeNumber("-", "adult")} className={styles.minus}></div>
                                <input id="Adults" type="text" className={`${styles["input_amount"]} ${styles["input_adults"]}`} value={numberOfAdults} max="99" disabled />
                                <div onClick={() => changeNumber("+", "adult")} className={styles.plus}></div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.left}>
                                <div className={styles.title}>Çocuklar</div>
                                <div className={styles.desc}>13 ve üzeri yaştakiler</div>
                            </div>
                            <div className={styles.right}>
                                <div onClick={() => numberOfChild != 0 && changeNumber("-", "child")} className={styles.minus}></div>
                                <input id="Childs" type="text" className={`${styles["input_amount"]} ${styles["input_children"]}`} value={numberOfChild} max="99" disabled />
                                <div onClick={() => changeNumber("+", "child")} className={styles.plus}></div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.left}>
                                <div className={styles.title}>Bebekler</div>
                                <div className={styles.desc}>13 ve üzeri yaştakiler</div>
                            </div>
                            <div className={styles.right}>
                                <div onClick={() => numberOfBabies != 0 && changeNumber("-", "babies")} className={styles.minus}></div>
                                <input id="Babies" type="text" className={`${styles["input_amount"]} ${styles["input_babies"]}`} value={numberOfBabies} max="99" disabled />
                                <div onClick={() => changeNumber("+", "babies")} className={styles.plus}></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <button onClick={handleSearch} className={styles.searchButton}></button>
        </div>
    )
}