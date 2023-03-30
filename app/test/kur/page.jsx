'use client';
import React, { useEffect, useState } from "react"


export default function Kur() {
    //const [ready, setReady] = useState(false)
    const [exchanges, setExchanges] = useState([])
    const [usd, setUsd] = useState(0)
    const [eur, setEur] = useState(0)
    const [gbp, setGbp] = useState(0)

    useEffect(() => {

        fetch('http://hasanadiguzel.com.tr/api/kurgetir')
            .then(response => response.json())
            .then(data => {
                console.log(data.TCMB_AnlikKurBilgileri)
                setExchanges(data.TCMB_AnlikKurBilgileri)
                //setReady(true)
                setUsd(data.TCMB_AnlikKurBilgileri[0].BanknoteSelling)
                setEur(data.TCMB_AnlikKurBilgileri[3].BanknoteSelling)
                setGbp(data.TCMB_AnlikKurBilgileri[4].BanknoteSelling)
            });

    }, [gbp])

    return (
        <>
            <h1>Kurlar</h1>

            <h3>usd : {(usd * 10)} TL</h3>
            <h3>eur : {eur * 10} TL</h3>
            <h3>gbp : {gbp * 10} TL</h3>

            {/* {
                exchanges.map((data, index) => (
                    <>
                        <div key={index}>
                            Type : {data.Isim}
                            <br />
                            Alış  {data.BanknoteBuying}
                            <br />
                            Satış : {data.BanknoteSelling}

                        </div>
                        <hr />
                    </>
                ))
            } */}
        </>
    )
}
