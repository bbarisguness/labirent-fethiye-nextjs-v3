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

    const [numberOfAdults1, setNumberOfAdults1] = useState(0)
    const [numberOfChild1, setNumberOfChild1] = useState(0)
    const [numberOfBabies1, setNumberOfBabies1] = useState(0)
    const [filterText, setFilterText] = useState('')

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
        if (openDate) setDateClickCount(1)
    }, [openDate])

    useEffect(() => {
        if (dateClickCount != 1 && dateClickCount % 2 == 1) {
            setOpenDate(false)
        }
    }, [dateClickCount])


    const changeNumber = (operation, type) => {
        if (type == "adult") {
            operation == "+" ? setNumberOfAdults1(numberOfAdults1 + 1) : numberOfAdults1 > 0 && setNumberOfAdults1(numberOfAdults1 - 1);
        } else if (type == "child") {
            operation == "+" ? setNumberOfChild1(numberOfChild1 + 1) : numberOfChild1 > 0 && setNumberOfChild1(numberOfChild1 - 1);
        } else {
            operation == "+" ? setNumberOfBabies1(numberOfBabies1 + 1) : numberOfBabies1 > 0 && setNumberOfBabies1(numberOfBabies1 - 1);
        }
    }

    const handleSearch = () => {
        let startDate = reservationDate.startDate.toString()
        let endDate = reservationDate.endDate.toString()
        dispatch(changeDate({ start: startDate, end: endDate }))
        dispatch(changeNumberOfPeople({ adult: numberOfAdults1, child: numberOfChild1, baby: numberOfBabies1 }))
        dispatch(changeReservationFilter(filterText))
    }

    const girisveCikisTarihiniAl = () => {
        let startDate = reservationDate.startDate
        let endDate = reservationDate.endDate
        let string = startDate.getDate() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getFullYear() + " - " + endDate.getDate() + "-" + (endDate.getMonth() + 1) + "-" + endDate.getFullYear()
        setdatePlaceHolder(string)
    }

    //Herhangi bir state güncellendiğinde çalışan kod bloğu
    useEffect(() => {
        if (numberOfAdults1 != 0 || numberOfChild1 != 0 || numberOfBabies1 != 0) { inputRefNumberOfPeople.current.value = `${numberOfAdults1 + numberOfChild1} Misafir, ${numberOfBabies1} Bebek` } else { inputRefNumberOfPeople.current.value = "2 Misafir, 1 Bebek" }
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
        console.log(reservationStartDate + " " + reservationEndDate)
    }, [reservationStartDate, reservationEndDate])

    return (
        <div className={styles.reservationBox}>
            <div className={`${styles["colon"]} ${styles["location"]}`}>
                <div className={styles.colonTitle}>Konum</div>
                <div className={styles.colonInput}>
                    <i className={styles.searchIcon} />
                    <input onChange={e => setFilterText(e.target.value)} type="text" placeholder="Villa Adı" />
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
                                <div onClick={() => changeNumber("-", "adult")} className={styles.minus}></div>
                                <input id="Adults" type="text" className={`${styles["input_amount"]} ${styles["input_adults"]}`} value={numberOfAdults1} max="99" disabled />
                                <div onClick={() => changeNumber("+", "adult")} className={styles.plus}></div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.left}>
                                <div className={styles.title}>Çocuklar</div>
                                <div className={styles.desc}>13 ve üzeri yaştakiler</div>
                            </div>
                            <div className={styles.right}>
                                <div onClick={() => changeNumber("-", "child")} className={styles.minus}></div>
                                <input id="Childs" type="text" className={`${styles["input_amount"]} ${styles["input_children"]}`} value={numberOfChild1} max="99" disabled />
                                <div onClick={() => changeNumber("+", "child")} className={styles.plus}></div>
                            </div>
                        </li>
                        <li>
                            <div className={styles.left}>
                                <div className={styles.title}>Bebekler</div>
                                <div className={styles.desc}>13 ve üzeri yaştakiler</div>
                            </div>
                            <div className={styles.right}>
                                <div onClick={() => changeNumber("-", "babies")} className={styles.minus}></div>
                                <input id="Babies" type="text" className={`${styles["input_amount"]} ${styles["input_babies"]}`} value={numberOfBabies1} max="99" disabled />
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