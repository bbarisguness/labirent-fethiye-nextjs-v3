'use client';
import styles from "./reservation.module.css"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { DateRange } from "react-date-range"
import { useRef, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { changeDate, changeNumberOfPeople } from "@/store/globalState";
import Image from "next/image";
const qs = require('qs');


export default function Reservation({ villaId }) {
    const router = useRouter();

    //console.log('villaId: ' + villaId);
    const [availible, setAvailible] = useState(false)
    const inputRefNumberOfPeople = useRef()
    const menuRefNumberOfPeople = useRef()
    const menuRefCalendar = useRef()
    const [dateClickCount, setDateClickCount] = useState(0)
    const [datePlaceHolder, setdatePlaceHolder] = useState("Tarih Seçin")

    const [numberOfAdults1, setNumberOfAdults1] = useState(0)
    const [numberOfChild1, setNumberOfChild1] = useState(0)
    const [numberOfBabies1, setNumberOfBabies1] = useState(0)

    const dispatch = useDispatch()
    const { numberOfAdults, numberOfChild, numberOfBabies, reservationStartDate, reservationEndDate } = useSelector(state => state.globalState)

    //Villa müsaitliği sorgula butonuna tıklayınca rezervasyon giriş ve çıkış tarihleri değişiyor ve bir sonraki sayfaya gönderilecek veriler localstorageye kaydediliyor
    useEffect(() => {
        if (reservationStartDate != "" && reservationEndDate != "") {
            let date = new Date()
            //let utcTimestamp = Math.floor((Math.abs(date.getTimezoneOffset() * 60) + (date.getTime())) / 1000)

            const items = [{
                villaId,
                startDate: reservationStartDate,
                endDate: reservationEndDate,
                numberOfAdults,
                numberOfChild,
                numberOfBabies,
                expiryDate: Math.floor(date.getTime() / 1000)
            }]

            localStorage.setItem('reservationItems', JSON.stringify(items));
        }
    }, [reservationStartDate, reservationEndDate])

    useEffect(() => {
        if (numberOfAdults1 != 0 || numberOfChild1 != 0 || numberOfBabies1 != 0) { inputRefNumberOfPeople.current.value = `${numberOfAdults1 + numberOfChild1} Misafir, ${numberOfBabies1} Bebek` } else { inputRefNumberOfPeople.current.value = "2 Misafir, 1 Bebek" }
    })

    //Change People Number
    const changeNumber = (operation, type) => {
        //dispatch(changeNumberOfPeople([type, operation]))

        if (type == "adult") {
            operation == "+" ? setNumberOfAdults1(numberOfAdults1 + 1) : numberOfAdults1 > 0 && setNumberOfAdults1(numberOfAdults1 - 1);
        } else if (type == "child") {
            operation == "+" ? setNumberOfChild1(numberOfChild1 + 1) : numberOfChild1 > 0 && setNumberOfChild1(numberOfChild1 - 1);
        } else {
            operation == "+" ? setNumberOfBabies1(numberOfBabies1 + 1) : numberOfBabies1 > 0 && setNumberOfBabies1(numberOfBabies1 - 1);
        }
    }

    const girisveCikisTarihiniAl = () => {
        let startDate = reservationDate.startDate
        let endDate = reservationDate.endDate
        let string = startDate.getDate() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getFullYear() + " - " + endDate.getDate() + "-" + (endDate.getMonth() + 1) + "-" + endDate.getFullYear()
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



    async function handleClick() {

        if (datePlaceHolder != "Tarih Seçin") {
            // yıl : reservationDate.startDate.getFullYear()
            //  ay : (reservationDate.startDate.getMonth() + 1)
            // gün : reservationDate.startDate.getDate()
            //console.log('Giriş Tarihi : ' + reservationDate.startDate.getFullYear() + '-' + (reservationDate.startDate.getMonth() + 1) + '-' + reservationDate.startDate.getDate());
            //console.log('Çıkış Tarihi : ' + reservationDate.endDate.getFullYear() + '-' + (reservationDate.endDate.getMonth() + 1) + '-' + reservationDate.endDate.getDate());

            const startYear = reservationDate.startDate.getFullYear()
            const startMonth = (reservationDate.startDate.getMonth() + 1).toString().length == 1 ? '0' + (reservationDate.startDate.getMonth() + 1).toString() : (reservationDate.startDate.getMonth() + 1)
            const startday = (reservationDate.startDate.getDate()).toString().length == 1 ? '0' + (reservationDate.startDate.getDate()).toString() : (reservationDate.startDate.getDate())

            const endYear = reservationDate.endDate.getFullYear()
            const endMonth = (reservationDate.endDate.getMonth() + 1).toString().length == 1 ? '0' + (reservationDate.endDate.getMonth() + 1).toString() : (reservationDate.endDate.getMonth() + 1)
            const endday = (reservationDate.endDate.getDate()).toString().length == 1 ? '0' + (reservationDate.endDate.getDate()).toString() : (reservationDate.endDate.getDate())

            const giris = startYear + '-' + startMonth + '-' + startday
            const cikis = endYear + '-' + endMonth + '-' + endday

            //console.log(giris);

            //console.log(startYear + '-' + startMonth + '-' + startday);

            //console.log(giris + ' / ' + cikis);


            //const giris = (reservationDate.startDate.getFullYear() + '-' + ((reservationDate.startDate.getMonth() + 1).lenght == 1 ? '0' + (reservationDate.startDate.getMonth() + 1).toString() : (reservationDate.startDate.getMonth() + 1)) + '-' + (reservationDate.startDate.getDate().lenght == 1 ? "0" + reservationDate.startDate.getDate() : reservationDate.startDate.getDate())).toString()
            //const cikis = (reservationDate.endDate.getFullYear() + '-' + ((reservationDate.endDate.getMonth() + 1).lenght == 1 ? "0" + (reservationDate.endDate.getMonth() + 1) : (reservationDate.endDate.getMonth() + 1)) + '-' + (reservationDate.endDate.getDate().lenght == 1 ? "0" + reservationDate.endDate.getDate() : reservationDate.endDate.getDate())).toString()

            //console.log('0' + (reservationDate.startDate.getMonth() + 1).toString());
            //console.log(giris);
            //let giris = '2023-02-18'
            //let cikis = '2023-02-20'

            const query = qs.stringify(
                {
                    filters: {


                        $or: [

                            {
                                $and: [
                                    {
                                        checkIn: {
                                            $lte: giris,
                                        },
                                    },
                                    {
                                        checkOut: {
                                            $gt: giris,
                                        },
                                    },
                                ]
                            },
                            {
                                $and: [
                                    {
                                        checkIn: {
                                            $lt: cikis,
                                        },
                                    },
                                    {
                                        checkOut: {
                                            $gte: cikis,
                                        },
                                    },
                                ]
                            },
                            {
                                $and: [
                                    {
                                        checkIn: {
                                            $gt: giris,
                                        },
                                    },
                                    {
                                        checkIn: {
                                            $lt: cikis,
                                        },
                                    },
                                ]
                            }]



                    },
                },
                {
                    encodeValuesOnly: true, // prettify URL
                }
            );

            await fetch(`http://3.127.136.179:1337/api/reservations?${query}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        //debugger
                        //console.log(result.data);
                        if (result.data.length < 1) {
                            dispatch(changeDate({ start: giris, end: cikis }))
                            dispatch(changeNumberOfPeople({ adult: numberOfAdults1, child: numberOfChild1, baby: numberOfBabies1 }))
                            router.push('/rezervasyon')
                        }
                        else {
                            //Seçilen tarihlerde rezervasyon var ise uyarı modalın açılması için
                            setAvailible(true)
                        }
                    },
                    (error) => {

                    }
                )

            //console.log('musaitmi : ' + availible);

            // if (availible) {
            //     //villaId, giris, cikis, person, child, bebek
            //     dispatch(changeDate({ start: giris, end: cikis }))
            //     router.push('/rezervasyon')
            // }
        }
        else {
            console.log("Tarih seçin")
        }
    }

    return (
        <div className={styles.top}>

            {availible && (<div className={styles.modalWrapper}>
                <div className={`${styles['modal']}`}>
                    <Image alt="" src="/images/alert.png" width={44} height={38} />
                    <span className={styles.modalTitle}>Uyarı!</span>
                    <p>Seçtiğiniz tarihler arasında villa müsait değildir. Lütfen villanın müsaitlik takvimini kontrol ediniz.</p>
                    <div onClick={() => setAvailible(false)} className={styles.modalButton}>Anladım</div>
                </div>
            </div>)}

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
                        <input ref={inputRefNumberOfPeople} type="text" placeholder="0 Misafir, 0 Bebek" readOnly disabled></input>
                    </div>
                    <div className={`${styles["numberPeopleOpen"]} ${isNumberPeopleMenuOpen && styles["active"]}`}>
                        <ul>
                            <li>
                                <div className={styles.leftPeople}>
                                    <div className={styles.title}>Yetişkinler</div>
                                    <div className={styles.desc}>13 ve üzeri yaştakiler</div>
                                </div>
                                <div className={styles.rightPeople}>
                                    <div onClick={() => numberOfAdults1 != 0 && changeNumber("-", "adult")} className={styles.minus}></div>
                                    <input type={styles.text} disabled value={numberOfAdults1} max={99} />
                                    <div onClick={() => changeNumber("+", "adult")} className={styles.plus}></div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.leftPeople}>
                                    <div className={styles.title}>Çocuklar</div>
                                    <div className={styles.desc}>13 ve üzeri yaştakiler</div>
                                </div>
                                <div className={styles.rightPeople}>
                                    <div onClick={() => numberOfChild1 != 0 && changeNumber("-", "child")} className={styles.minus}></div>
                                    <input type={styles.text} disabled value={numberOfChild1} max={99} />
                                    <div onClick={() => changeNumber("+", "child")} className={styles.plus}></div>
                                </div>
                            </li>
                            <li>
                                <div className={styles.leftPeople}>
                                    <div className={styles.title}>Bebekler</div>
                                    <div className={styles.desc}>13 ve üzeri yaştakiler</div>
                                </div>
                                <div className={styles.rightPeople}>
                                    <div onClick={() => numberOfBabies1 != 0 && changeNumber("-", "babies")} className={styles.minus}></div>
                                    <input type={styles.text} disabled value={numberOfBabies1} max={99} />
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