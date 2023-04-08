import { useEffect, useState } from "react"
import styles from "./mydatepicker.module.css"

//reservasyon tarihleri düşük aydan yükselen aya doğru gelmesi lazım
export default function MyDatePicker({ year = 2023, reservationDates = ["2022/11/25-2023/0/3", "2023/0/29-2023/1/5", "2023/1/5-2023/1/7", "2023/1/25-2023/5/21", "2023/6/5-2023/6/10", "2023/6/10-2023/6/15", "2023/11/9-2023/11/12"] }) {
    const [ready, setReady] = useState(false)
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayUtc = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let monthsTurkish = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
    let isStartResarvation = false
    let isEndResarvation = false
    let isReservationContiniung = false
    let currentDate = new Date(year, 0, 1)
    let reservationIndex = 0

    useEffect(() => {
        setReady(true)
    }, [])

    const stringToDate = (dateString = "2023/0/1") => {
        let year, month, day, dateArray
        dateArray = dateString.split('/')
        year = dateArray[0]
        month = dateArray[1]
        day = dateArray[2]
        return new Date(year, month, day)
    }

    //belirtilen yıl ve ayın ilk gününü döndürür
    const getFirstDayOfMonth = (year, month) => {
        const date = new Date(year, month, 1)
        return (days[date.getDay()])
        /*for (let index = 0; index < 5; index++) {
            console.log(index + 1)
        }*/
    }

    //Belirtilen tarihin gün sayısını döndürür
    const getDayCountOfMMonth = (year, month) => {
        const date = new Date(year, month + 1, 0)
        return date.getDate()
    }

    //belirtilen yıl ve ayın son gününü döndürür
    const getLastDayOfMonth = (year, month) => {
        const date = new Date(year, month + 1, 0)
        return date
        /*for (let index = 0; index < 5; index++) {
            console.log(index + 1)
        }*/
    }

    //her ar için çalışacak olan fonksiyon(12 sefer çalışacak)
    const getRows = (month = 0) => {
        let day = 1
        let rows = []
        let numberOfMonth = getDayCountOfMMonth(year, month) // Aydaki gün sayısı 2.parametre olan 2 Mart ayına denk gelir fonksiyondan 31 döner
        let firstDay = getFirstDayOfMonth(year, month)
        let isFirstRowInEnded = false
        let reservationDateStrings


        if (reservationDates[reservationIndex]) {
            reservationDateStrings = reservationDates[reservationIndex].split('-')
        }


        let reservationDates2 = [] // reservasyon tarihi buraya alındı(sadece 1 reservasyon başlangıç ve bitiş tarihi)
        if (reservationDateStrings) {
            reservationDateStrings.map((item, index) => {
                reservationDates2[index] = stringToDate(item)
            })
        }



        //start-end-continue background stillerini koşullara göre döndüren fonksiyon
        const backgroundColor = () => {

            if (reservationDates2.length == 2) {
                if (currentDate.getTime() == reservationDates2[0].getTime()) { isStartResarvation = true } else { isStartResarvation = false }
                if (currentDate.getTime() > reservationDates2[0].getTime() && currentDate.getTime() < reservationDates2[1].getTime()) { isReservationContiniung = true } else { isReservationContiniung = false }
                if (currentDate.getTime() == reservationDates2[1].getTime()) {
                    isEndResarvation = true;
                    reservationIndex++;
                    if ((reservationIndex < reservationDates.length) && reservationIndex != reservationDates.length) {
                        reservationDateStrings = reservationDates[reservationIndex].split('-');
                        reservationDateStrings.map((item, index) => {
                            reservationDates2[index] = stringToDate(item)
                        })
                    }
                } else { isEndResarvation = false }
            }
            else {
                isStartResarvation = false
                isReservationContiniung = false
                isEndResarvation = false
            }


            if (reservationIndex > 0 && reservationIndex < reservationDates.length) {

                // console.log("1. tarih " + reservationDates[reservationIndex - 1].split('-')[1])
                // console.log("2. tarih " + reservationDates[reservationIndex].split('-')[0])
                if (reservationDates[reservationIndex - 1].split('-')[1] == reservationDates[reservationIndex].split('-')[0]) {
                    isReservationContiniung = true
                }
            }




            if (isStartResarvation) {
                return styles["day-start"]
            }
            else if (isReservationContiniung) {
                isReservationContiniung = false
                return styles["day-continue"]
            }
            else if (isEndResarvation) {
                return styles["day-end"]
            }
            else return ''
        }

        const addDay = () => {
            currentDate = new Date(year, month, day + 1)
            return day++
        }

        const getRow = () => {
            let row = []
            if (!isFirstRowInEnded) {
                let dayStartingIndex = ((dayUtc.indexOf(firstDay)))
                for (let index = 0; index <= 6; index++) {
                    row.push(
                        <div key={monthsTurkish[month] + "firshRowItem" + index} className={`${styles['day']} ${!(index >= dayStartingIndex) ? styles['old'] : ''} ${index >= dayStartingIndex ? backgroundColor() : ''}`}>
                            {
                                index >= dayStartingIndex ? <div className={`${styles['day-content']}`}>{addDay()}</div>
                                    : undefined
                            }
                        </div>
                    )
                    if (index == 6) {
                        isFirstRowInEnded = true
                        break
                    }
                }
            } else {
                for (let index = 0; index < 7; index++) {
                    row.push(
                        <div key={monthsTurkish[month] + "notFirstRow" + index} className={`${styles['day']} ${backgroundColor()}`}>
                            <div className={`${styles['day-content']}`}>{addDay()}</div>
                        </div>
                    )
                    if (day == numberOfMonth + 1) break
                }
            }
            return row
        }

        for (let index = 0; index < 6; index++) {
            rows.push(
                <div key={monthsTurkish[month] + "row" + index} className={styles.rowContainer}>
                    {
                        day <= numberOfMonth && getRow()
                    }
                </div>
            )
        }
        return rows
    }

    if (ready) {
        /*getFirstDayOfMonth(2023, 1)*/
        /*getLastDayOfMonth(2024, 2)*/
        /*getDayCountOfMMonth(2023, 3)*/
        return (
            <div className={`${styles['months-container']}`} style={{ opacity: 1, display: "flex" }}>
                {monthsTurkish.map((item, index) => (
                    <div key={item + index} className={`${styles['month-container']} ${styles['month-']}`}>
                        <div className={styles.month}>
                            <div className={styles.mainTitleContainer}>
                                <div className={styles.montTitleContainer}>
                                    <div className={`${styles['month-title']}`} colSpan="7">{monthsTurkish[index]}</div>
                                </div>
                                <div className={styles.daysHeaderContainer}>
                                    <div className={`${styles['day-header']}`}>Pzt</div>
                                    <div className={`${styles['day-header']}`}>Sa</div>
                                    <div className={`${styles['day-header']}`}>Çr</div>
                                    <div className={`${styles['day-header']}`}>Pr</div>
                                    <div className={`${styles['day-header']}`}>Cu</div>
                                    <div className={`${styles['day-header']}`}>Ct</div>
                                    <div className={`${styles['day-header']}`}>Pz</div>
                                </div>
                            </div>
                            {getRows(index)}
                        </div>
                    </div>
                ))}
            </div>
        )
        setReady(false)
    }
}