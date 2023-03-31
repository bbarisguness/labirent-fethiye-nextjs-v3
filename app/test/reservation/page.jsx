'use client';
import React from 'react'
import { useEffect, useState } from "react";
const qs = require('qs');

export default function test() {

    const [availible, setAvailible] = useState(false)
    //let date = ['2023-02-20', '2023-02-21', '2023-02-23', '2023-02-24', '2023-02-25']
    let giris = '2023-02-18'
    let cikis = '2023-02-20'

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

    useEffect(() => {
        fetch(`http://3.127.136.179:1337/api/reservations?${query}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.data);
                    if (result.data.lenght > 0) {
                        setAvailible(false)
                    }
                    else {
                        setAvailible(true)
                    }
                },
                (error) => {

                }
            )
    }, [availible])



    return (
        <div>
            Giriş Tarihi : {giris}
            <br />
            Çıkış Tarihi : {cikis}
            <br />
            müsaitlil durumu : {availible == true ? "true" : "false"}
        </div>
    )
}
