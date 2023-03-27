import MyDatePicker from "./mydatepicker"
import styles from "./calendar.module.css"
import { useState } from "react"

export default function Calendar({ ready }) {
    const [yearTab, setYearTab] = useState(new Date().getFullYear())

    const handleYearTab = (operation) => {
        if (operation == "next" && yearTab - new Date().getFullYear() < 2) {
            setYearTab(yearTab + 1)
        }
        console.log(operation)
        if (operation == "back" && yearTab - new Date().getFullYear() > 0 && yearTab - new Date().getFullYear() <= 2) {
            setYearTab(yearTab - 1)
        }
    }

    const displayLessIcon = (operation) => {
        if (operation == "back") {
            if (!(yearTab == new Date().getFullYear())) { return '‹' }
            else { return '' }
        }
        else {
            if (yearTab - new Date().getFullYear() < 2) { return '›' }
            else { return '' }
        }
    }

    const displayYearTab = (year) => {
        if (year == new Date().getFullYear()) {
            return ''
        }
        else if (year - 1 == new Date().getFullYear()) {
            return ''
        }
        else if (year - 2 == new Date().getFullYear()) {
            return ''
        }
        else {
            return styles['disabled']
        }
    }

    return (
        <div className={styles.fullDatepicker}>
            <div className={styles.title}>
                Müsaitlik Takvimi
                <span className={styles.full}>Dolu</span>
            </div>
            {ready &&
                <div className={`${styles['calendar-header']}`}>
                    <table>
                        <th onClick={() => handleYearTab('back')} className={styles.prev}><span>{displayLessIcon('back')}</span></th>
                        <th onClick={() => setYearTab(yearTab - 2)} className={`${styles['year-title']} ${styles['year-neighbor2']} ${displayYearTab(yearTab - 2)}`}>{yearTab - 2}</th>
                        <th onClick={() => setYearTab(yearTab - 1)} className={`${styles['year-title']} ${styles['year-neighbor']} ${displayYearTab(yearTab - 1)}`}>{yearTab - 1}</th>
                        <th className={`${styles['year-title']}`}>{yearTab}</th>
                        <th onClick={() => setYearTab(yearTab + 1)} className={`${styles['year-title']} ${styles['year-neighbor']} ${displayYearTab(yearTab + 1)}`}>{yearTab + 1}</th>
                        <th onClick={() => setYearTab(yearTab + 2)} className={`${styles['year-title']} ${styles['year-neighbor2']} ${displayYearTab(yearTab + 2)}`}>{yearTab + 2}</th>
                        <th onClick={() => handleYearTab('next')} className={`${styles['next']}`}><span>{displayLessIcon('next')}</span></th>
                    </table>
                </div>
            }
            <div className={styles.datepickerBox}>
                <MyDatePicker year={yearTab} />
            </div>
        </div>
    )
}