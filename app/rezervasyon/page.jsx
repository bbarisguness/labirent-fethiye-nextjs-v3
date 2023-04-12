'use client'
import styles from "./page.module.css"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import citiess from "../../data/tr.json"
var qs = require('qs');
import { useRouter } from "next/navigation"

export default function Reservation() {
    const router = useRouter()
    const refOfCityMenu = useRef()
    const refOfStateMenu = useRef()
    const [isPageLoading, setLoading] = useState(true)
    const [reservationItems, setreservationItems] = useState([])
    const [citys, setCitys] = useState(null)
    const [villa, setVilla] = useState([])
    const turkishDays = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    const turkishMonths = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]

    useEffect(() => {
        setCitys(citiess.data)
        setreservationItems(JSON.parse(localStorage.getItem('reservationItems')) || null)
    }, [])


    //localstoragede ilgili veri yok ise geri anasayfaya yönlendirilir
    useEffect(() => {
        if (!localStorage.getItem('reservationItems')) {
            router.push("/")
        }
        else {
            setLoading(false)
        }

        //Menülerin dışında bir yere tıklandığı zaman menülerin kapanması için
        let handler = (e) => {
            if (activeStep == 0) {
                //İl memüsü için
                if (!refOfCityMenu.current.contains(e.target)) {
                    setisCitySelectionOpened(false)
                }

                //İlçe menüsü için
                if (!refOfStateMenu.current.contains(e.target)) {
                    setisDistrictSelectionOpened(false)
                }
            }
        }
        document.addEventListener("mouseup", handler)
        return () => {
            document.removeEventListener("mouseup", handler)
        }
    })

    useEffect(() => {
        if (reservationItems.length != 0) {
            //console.log(reservationItems)
            //console.log(`Veriler local storageye eklendikten sonra geçen süre : ${Math.floor(new Date().getTime() / 1000) - reservationItems[0].expiryDate} saniye`)

            //1 saat sonra local storagedeki veriler otomatik olarak silinir ve anasayfaya yönlendirilir
            if ((Math.floor(new Date().getTime() / 1000) - reservationItems[0].expiryDate) > 3600) {
                localStorage.removeItem("reservationItems")
                router.push("/")
            }

            const query = qs.stringify(
                {
                    //populate: ["gallery.image", "categories", "distance_rulers", "price_tables.price_type", "regions", "localizations"]
                    populate: {
                        gallery: {
                            populate: {
                                image: {
                                    //populate: "*"
                                    //fields: ["url"],
                                    populate: {
                                        formats: {
                                            populate: ["small", "thumbnail", "medium"]
                                        }
                                    },
                                    sort: ["name:asc"]
                                }
                            }
                        },
                        regions: {
                            fields: ["name"]
                        }
                    },
                    fields: ["name"]
                },
                {
                    encodeValuesOnly: true, // prettify URL
                }
            );

            fetch(`http://3.127.136.179:1337/api/villas/${reservationItems[0].villaId}?${query}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        setVilla(result.data)
                        //console.log(result.data.attributes.distance_rulers.data)                            
                        //console.log(result.data[0].attributes.gallery.data.attributes.image.data);
                        //console.log(result.data.attributes.gallery.data.attributes.video);
                    },
                    (error) => {

                    }
                )
        }
    }, [reservationItems])



    const [activeStep, setActiveStep] = useState(0)
    // useEffect(() => {
    //     if (activeStep == 2) {
    //         setTimeout(() => {
    //             localStorage.removeItem("reservationItems")
    //             router.push("/")
    //         }, 3000)
    //     }
    // }, [activeStep])
    const [transferType, settransferType] = useState(1) // 0 = creditCard, 1= transfer

    const [isCitySelectionOpened, setisCitySelectionOpened] = useState(false)

    const [isDistrictSelectionOpened, setisDistrictSelectionOpened] = useState(false)

    const phoneFormat = (string) => {
        let phoneString = string

        if (string[string.length - 1] == ")") {
            return phoneString + " "
        }

        if (string.length == 3 && string[0] != "(") {
            return "(" + phoneString + ") "
        }

        if (string.length == 9 || string.length == 12) {
            return phoneString + " "
        }

        return phoneString
    }

    //20 Kasım 2021 Salı formatında metin döndürür
    const getDateString = (girismiCikismi = 'g') => {

        if (reservationItems.length != 0) {
            let dateArray = girismiCikismi == 'g' ? reservationItems[0].startDate.split('-') : reservationItems[0].endDate.split('-')
            let year = dateArray[0]
            let month = dateArray[1][0] == '0' ? dateArray[1][1] : dateArray[1]
            let day = dateArray[dateArray.length - 1][0] == '0' ? dateArray[dateArray.length - 1][1] : dateArray[dateArray.length - 1]

            let date = new Date(year, month - 1, day)
            let dayName = turkishDays[date.getDay()]
            let monthName = turkishMonths[date.getMonth()]

            return `${day} ${monthName} ${year} ${dayName}`
        }

        return girismiCikismi == 'g' ? 'Giriş' : 'Çıkış'
    }

    function submitFormPerson(values) {

        const person = {
            name: values.name,
            surname: values.surname,
            email: values.email,
            phone: values.phone,
            city: values.city,
            ilce: values.ilce,
            tcNo: values.tcNo,
            address: values.address,
            note: values.note
        }

        //alert("burda")

        //dispatch(changePersonInfo(person))

        //localStorage.setItem('reservationItems', JSON.stringify(items));

        localStorage.setItem('personInfo', JSON.stringify(person))

        //console.log(localStorage.getItem('personInfo'));

        //console.log(values)
        setActiveStep(1)
        window.scrollTo(0, 0)
    }

    function submitFormPay(values) {

        console.log("transferType = " + transferType);

        if (transferType == 1) {
            // rezervasyonu oluştur

        }
        else {
            // kredi kartı ile ödeme doğrula ve ardından rezervasyonu oluştur
            // if(!paymetStatus)
            // {
            //     // kredi kartı ödeme hatası hiç bir yere gitme
            // }
            console.log(values)

        }



        //setActiveStep(2)
        //window.scrollTo(0, 0)
    }

    return (
        <section className={`${styles['contentDetail']}`}>


            {isPageLoading && (<div className={"loadingBox"}>
                <div className="loadingEffect">
                    <div className="loadingLogo">
                        <div className="loadingLogo" style={{ backgroundImage: "url(/images/labirent.png)" }}></div>
                    </div>
                </div>
            </div>)}

            <div className={styles.stepMenuBox}>
                <div className={styles.container}>
                    <ul>
                        <li className={activeStep == 0 ? styles.active : ''}>
                            <Link onClick={(e) => { e.preventDefault(); if (activeStep > 0 && activeStep != 2) { setActiveStep(0) } }} href="#">
                                <div className={styles.imageBg}>
                                    <div className={styles.imageBox}>
                                        <i className={styles.firstIcon}></i>
                                    </div>
                                </div>
                                <div className={styles.textBox}>
                                    <div className={styles.text}>Kişisel Bilgiler</div>
                                    <div className={styles.number}>01</div>
                                </div>
                            </Link>
                        </li>
                        <li className={activeStep == 1 ? styles.active : ''}>
                            <Link onClick={(e) => e.preventDefault()} href="#">
                                <div className={styles.imageBg}>
                                    <div className={styles.imageBox}>
                                        <i className={styles.secondIcon}></i>
                                    </div>
                                </div>
                                <div className={styles.textBox}>
                                    <div className={styles.text}>Rezervasyonu Tamamla</div>
                                    <div className={styles.number}>02</div>
                                </div>
                            </Link>
                        </li>
                        <li className={activeStep == 2 ? styles.active : ''}>
                            <Link onClick={(e) => e.preventDefault()} href="#">
                                <div className={styles.imageBg}>
                                    <div className={styles.imageBox}>
                                        <i className={styles.thirdIcon}></i>
                                    </div>
                                </div>
                                <div className={styles.textBox}>
                                    <div className={styles.text}>Tatile Başla</div>
                                    <div className={styles.number}>03</div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>


            <div className={styles.rezervationBox}>
                <div className={styles.container}>
                    <div className={styles.reservation}>
                        <div className={styles.left}>




                            {activeStep == 0 && (<div className={styles.personInfoBox}>
                                <div className={styles.subTitle}>Kişisel Bilgiler</div>
                                <Formik
                                    initialValues={{
                                        name: "",
                                        surname: "",
                                        email: "",
                                        phone: "",
                                        zipCode: "",
                                        tcNo: "",
                                        address: "",
                                        note: "",
                                        city: "",
                                        ilce: "",
                                        stateAreaClicked: false
                                    }}
                                    validationSchema={
                                        Yup.object({
                                            name: Yup.string().required("Bu alan boş bırakılamaz"),
                                            surname: Yup.string().required("Bu alan boş bırakılamaz"),
                                            email: Yup.string().email("Geçersiz email").required("Bu alan boş bırakılamaz"),
                                            phone: Yup.string(),
                                            zipCode: Yup.string(),
                                            tcNo: Yup.string(),
                                            address: Yup.string(),
                                            note: Yup.string(),
                                            city: Yup.string().required("İl seçin"),
                                            ilce: Yup.string().required("İlçe seçin")
                                        })
                                    }
                                    onSubmit={(values) => {
                                        submitFormPerson(values)
                                    }}
                                >
                                    {
                                        ({ values, errors, handleChange, handleSubmit, handleReset, dirty, isSubmitting, touched, setFieldValue }) => (
                                            <form onSubmit={handleSubmit}>
                                                <ul>
                                                    <li>
                                                        <div className={styles.inputBox}>
                                                            <div className={styles.inputName}>Adınız</div>
                                                            <input name="name" value={values.name} onChange={handleChange} type="text" placeholder="•••••" minLength="2" maxLength="30" />
                                                            {
                                                                errors.name && touched.name && (
                                                                    <div className={styles.inputFeedback}>
                                                                        {errors.name}
                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className={styles.inputBox}>
                                                            <div className={styles.inputName}>Soyadınız</div>
                                                            <input name="surname" value={values.surname} onChange={handleChange} type="text" placeholder="•••••" minLength="2" maxLength="30" />
                                                            {
                                                                errors.surname && touched.surname && (
                                                                    <div className={styles.inputFeedback}>
                                                                        {errors.surname}
                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className={styles.inputBox}>
                                                            <div className={styles.inputName}>E-mail</div>
                                                            <input name="email" value={values.email} onChange={handleChange} type="text" placeholder="•••••••••" maxLength="50" />
                                                            {
                                                                errors.email && touched.email && (
                                                                    <div className={styles.inputFeedback}>
                                                                        {errors.email}
                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className={styles.inputBox}>
                                                            <div className={styles.inputName}>Telefon</div>
                                                            <input name="phone" value={values.phone} onChange={e => setFieldValue('phone', phoneFormat(e.target.value))} type="text" placeholder="(•••) ••• •• ••" minLength="15" maxLength="15" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className={styles.inputBox}>
                                                            <div className={styles.inputName}>İl</div>
                                                            {
                                                                errors.city && touched.city && (
                                                                    <div className={styles.inputFeedback}>
                                                                        {errors.city}
                                                                    </div>
                                                                )
                                                            }
                                                            <span ref={refOfCityMenu} onClick={() => setisCitySelectionOpened(!isCitySelectionOpened)} className={`${styles['form_city']} ${values.stateAreaClicked && styles['requareClick']} ${isCitySelectionOpened ? styles['opened'] : ''}`}>
                                                                <span className={styles.selectedItem}>{values.city == '' ? 'İl Seçiniz' : values.city}</span>
                                                                <span className={styles.selection_arrow}></span>
                                                                {isCitySelectionOpened && (<div className={styles.cityDropMenu}>
                                                                    {
                                                                        citys?.map(city => (
                                                                            <span key={city.il_adi} onClick={() => { setFieldValue('city', city.il_adi); setFieldValue('stateAreaClicked', false) }} className={styles.dropMenuItem}>{city.il_adi}</span>
                                                                        ))
                                                                    }
                                                                </div>)}
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className={styles.inputBox}>
                                                            <div className={styles.inputName}>İlçe</div>
                                                            {
                                                                errors.ilce && touched.ilce && (
                                                                    <div className={styles.inputFeedback}>
                                                                        {errors.ilce}
                                                                    </div>
                                                                )
                                                            }
                                                            <span ref={refOfStateMenu} onClick={() => { if (values.city != "") { setisDistrictSelectionOpened(!isDistrictSelectionOpened) } else { setFieldValue('stateAreaClicked', true) } }} className={`${styles['form_city']} ${isDistrictSelectionOpened ? styles['opened'] : ''}`}>
                                                                <span className={styles.selectedItem}>{values.ilce == '' ? 'İlçe Seçiniz' : values.ilce}</span>
                                                                <span className={styles.selection_arrow}></span>
                                                                {isDistrictSelectionOpened && (<div className={styles.cityDropMenu}>
                                                                    {
                                                                        citiess.data.filter(il => il.il_adi == values.city)[0].ilceler?.map(ilce => (
                                                                            <span key={ilce.ilce_adi} onClick={() => setFieldValue('ilce', ilce.ilce_adi)} className={styles.dropMenuItem}>{ilce.ilce_adi}</span>
                                                                        ))
                                                                    }
                                                                </div>)}
                                                            </span>
                                                        </div>
                                                    </li>
                                                    {/* <li>
                                                        <div className={styles.inputBox}>
                                                            <div className={styles.inputName}>Posta Kodu</div>
                                                            <input name="zipCode" value={values.zipCode} onChange={handleChange} type="text" placeholder="•••••" minLength="5" maxLength="5" />
                                                        </div>
                                                    </li> */}
                                                    <li>
                                                        <div className={styles.inputBox}>
                                                            <div className={styles.inputName}>Tc No *</div>
                                                            <input name="tcNo" value={values.tcNo} onChange={handleChange} type="text" placeholder="•••••••••••" minLength="11" maxLength="11" />
                                                        </div>
                                                    </li>
                                                    <li className={styles.full}>
                                                        <div className={styles.inputBox}>
                                                            <div className={styles.inputName}>Adres</div>
                                                            <input name="address" value={values.address} onChange={handleChange} type="text" placeholder="•••" maxLength="100" />
                                                        </div>
                                                    </li>
                                                    <li className={styles.full}>
                                                        <div className={styles.inputBox}>
                                                            <div className={styles.inputName}>Varsa Notunuz</div>
                                                            <textarea name="note" value={values.note} onChange={handleChange} rows="4" cols="50" maxLength="300" placeholder="•••"></textarea>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className={styles.linkBox} style={{ justifyContent: "flex-end" }}>
                                                    <button className={styles.blueButtonArrow} type='submit'><span>Devam Et</span></button>
                                                </div>
                                            </form>
                                        )
                                    }
                                </Formik>
                            </div>)}







                            {activeStep == 1 && (
                                <div className={styles.paymentBox}>
                                    <div className={styles.subTitle}>Şununla Ödeyin</div>
                                    <div className={styles.payment}>
                                        <div className={styles.paymentType}>
                                            <ul>
                                                <li className={`${styles['creditCard']}`}>
                                                    <Link onClick={(e) => e.preventDefault()} href="#">
                                                        <div className={styles.imageBox}>
                                                            <i className={styles.creditCardIcon}></i>
                                                        </div>
                                                        <div className={styles.textBox}>
                                                            <div className={styles.title}>
                                                                Kredi Kartı İle Ödeme ( Yakında! )
                                                            </div>
                                                            <div className={styles.desc}>
                                                                Bu rezervasyonun ödemesini kredi kartı ile gerçekleştirmek istiyorum.
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className={`${styles['transfer']} ${transferType == 1 && styles['active']}`}>
                                                    <Link onClick={(e) => { e.preventDefault(); settransferType(1) }} href="#">
                                                        <div className={styles.imageBox}>
                                                            <i className={styles.transferIcon}></i>
                                                        </div>
                                                        <div className={styles.textBox}>
                                                            <div className={styles.title}>
                                                                Havale İle Ödeme
                                                            </div>
                                                            <div className={styles.desc}>
                                                                Bu rezervasyonun ödemesini Havale/EFT ile gerçekleştirmek istiyorum.
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={styles.paymentInformation}>
                                            <div className={`${styles['creditCardBox']} ${transferType == 0 ? styles['active'] : ''}`}>
                                                <Formik
                                                    initialValues={{
                                                        cardNo: "",
                                                        lastDate: "",
                                                        securityCode: ""
                                                    }}
                                                    validationSchema={
                                                        Yup.object({
                                                            cardNo: Yup.string(),
                                                            lastDate: Yup.string(),
                                                            securityCode: Yup.string(),
                                                        })
                                                    }
                                                    onSubmit={(values) => {

                                                        submitFormPay(values)

                                                        //console.log(values)
                                                        //console.log(transferType);
                                                        // setActiveStep(2)
                                                        // window.scrollTo(0, 0)
                                                    }}
                                                >
                                                    {
                                                        ({ values, errors, handleChange, handleSubmit, handleReset, dirty, isSubmitting, touched }) => (
                                                            <form onSubmit={handleSubmit}>
                                                                <ul>
                                                                    <li className={styles.full}>
                                                                        <div className={styles.inputBox}>
                                                                            <div className={styles.inputName}>Kart Numarası</div>
                                                                            <input onChange={handleChange} name="cardNo" type="text" placeholder="•••• •••• •••• ••••" minLength="19" maxLength="19" />
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className={styles.inputBox}>
                                                                            <div className={styles.inputName}>Son Kullanma Tarihi</div>
                                                                            <input onChange={handleChange} name="lastDate" type="text" placeholder="•• / ••" minLength="7" maxLength="7" />
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className={styles.inputBox}>
                                                                            <div className={styles.inputName}>CVV</div>
                                                                            <input onChange={handleChange} name="securityCode" type="text" placeholder="•••" minLength="3" maxLength="3" />
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                                <div className={styles.linkBox}>
                                                                    <button className={styles.blueButtonArrow} type='submit'><span>Onayla ve Öde</span></button>
                                                                </div>
                                                            </form>
                                                        )
                                                    }
                                                </Formik>
                                            </div>
                                            <div className={`${styles['transferbox']} ${transferType == 1 ? styles['active'] : ''}`}>
                                                <ul>
                                                    <li>
                                                        <div className={styles.title}>Banka</div>
                                                        <div className={styles.desc}>Garanti Bankası</div>
                                                    </li>
                                                    <li>
                                                        <div className={styles.title}>Hesap Sahibi</div>
                                                        <div className={styles.desc}>Labirent Villa</div>
                                                    </li>
                                                    <li>
                                                        <div className={styles.title}>IBAN</div>
                                                        <div className={styles.desc}>TR54 0000 0000 0000 0000 0000 00</div>
                                                    </li>
                                                    <li>
                                                        <div className={styles.title}>Sipariş Numaranız</div>
                                                        <div className={styles.desc}>2038390</div>
                                                    </li>
                                                    <li className={styles.full}>
                                                        <div className={styles.desc}>
                                                            *Gönderimlerinizin açıklama hanesine sipariş numaranızı yazmalasınız ve Havale/EFT işlemi yapan kişinin Fatura sahibi olması gerekmektedir.
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className={styles.linkBox}>
                                                    <Link onClick={(e) => { e.preventDefault(); submitFormPay(null)  /*setActiveStep(2); window.scrollTo(0, 0) */ }} href="#" className={styles.blueButtonArrow}>
                                                        <span>Onayla ve Öde</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}







                            {activeStep == 2 && (
                                <div className={styles.successMessage}>
                                    <div className={styles.iconBox}><i></i></div>
                                    <div className={styles.textBox}>
                                        <div className={styles.title}>Teşekkürler. Rezervasyon Siparişiniz Şimdi Onaylandı.</div>
                                        <div className={styles.desc}>
                                            Every single thing we tried with John was delicious! Found some awesome places we would definitely go back to on our trip.
                                            John was also super friendly and passionate about Beşiktaş and Istanbul.
                                        </div>
                                    </div>
                                </div>
                            )}





                        </div>
                        <div className={styles.right}>
                            <div className={styles.top}>
                                <div className={styles.imageBox}>
                                    <div className={styles.img} style={{ backgroundImage: villa.attributes && `url(http://3.127.136.179:1337${villa?.attributes?.gallery?.data?.attributes?.image?.data[0]?.attributes?.url})` }}></div>
                                </div>
                                <div className={styles.textBox}>
                                    <div className={styles.title}>{villa?.attributes?.name}</div>
                                    <div className={styles.desc}>{`Fethiye / ${villa?.attributes?.regions?.data[0]?.attributes?.name}`}</div>
                                </div>
                            </div>
                            <div className={styles.bottom}>
                                <ul>
                                    <li>
                                        <div className={styles.visitorNumberBox}>
                                            <div className={styles.visitorBox}>
                                                <span>{reservationItems.length != 0 && `${reservationItems[0].numberOfAdults} Yetişkin, ${reservationItems[0].numberOfChild} Çocuk, ${reservationItems[0].numberOfBabies} Bebek`}</span>
                                            </div>
                                            <div className={styles.changeButton}>
                                                <Link onClick={(e) => e.preventDefault()} href="#">Değiştir</Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.dateBox}>
                                            <div className={styles.date}>
                                                <div className={styles.title}>Giriş</div>
                                                <div className={styles.textBox}>
                                                    <span>{reservationItems && getDateString('g')}</span>
                                                </div>
                                            </div>
                                            <div className={styles.date}>
                                                <div className={styles.title}>Çıkış</div>
                                                <div className={styles.textBox}>
                                                    <span>{reservationItems && getDateString('c')}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.priceBox}>
                                            <span>929 ₺ x 4 Gece </span>
                                            <span>3715 ₺</span>
                                        </div>
                                        <div className={styles.priceBox}>
                                            <span>3715 ₺ <i></i></span>
                                            <span>400 ₺</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.priceBox}>
                                            <span>Ön Ödeme</span>
                                            <span>3715 ₺</span>
                                        </div>
                                        <div className={styles.priceBox}>
                                            <span>Girişte Ödeme</span>
                                            <span>400 ₺</span>
                                        </div>
                                        <div className={styles.priceBox}>
                                            <span>Toplam</span>
                                            <span><strong>4715 ₺</strong></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </section>
    )
}