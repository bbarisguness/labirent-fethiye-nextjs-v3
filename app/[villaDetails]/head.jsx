var qs = require('qs');

export default async function Head({ params }) {
    // debugger
    let villaId = params.villaDetails.split('-')[0]

    // const [villa, setVilla] = useState(false)

    // useEffect(async () => {
    //     if (villaId > 0) {
    //         //console.log(villaId);

    //         const query = qs.stringify(
    //             {
    //                 //populate: ["gallery.image", "categories", "distance_rulers", "price_tables.price_type", "regions", "localizations"]
    //                 populate: {
    //                     locationImage: {
    //                         fields: ['formats']
    //                     },
    //                     distance_rulers: {
    //                         fields: ['name', 'value', 'icon'],
    //                     },
    //                     gallery: {
    //                         populate: {
    //                             image: {
    //                                 //populate: "*"
    //                                 //fields: ["url"],
    //                                 populate: {
    //                                     formats: {
    //                                         populate: ["small", "thumbnail", "medium"]
    //                                     }
    //                                 },
    //                                 sort: ["name:asc"]
    //                             }
    //                         }
    //                     },
    //                     categories: {
    //                         fields: ["name"]
    //                     },
    //                     regions: {
    //                         fields: ["name"]
    //                     },
    //                     price_tables: {
    //                         sort: ['line:asc'],
    //                         fields: ["title", "description", "price", "firstTime", "lastTime", "line"],
    //                         populate: {
    //                             price_type: {
    //                                 fields: ["slug"]
    //                             }
    //                         }

    //                     },
    //                     reservations: {
    //                         sort: ["checkIn:asc"]
    //                     }
    //                 },
    //             },
    //             {
    //                 encodeValuesOnly: true, // prettify URL
    //             }
    //         );

    //         //const vil = await fetch(`http://3.127.136.179:1337/api/villas/${villaId}?${query}`)
    //             // .then(res => res.json())
    //             // .then(
    //             //     (result) => {
    //             //         setReady(true)
    //             //         setVilla(result.data)
    //             //         //console.log(result.data);
    //             //         //console.log(result.data.attributes.distance_rulers.data)                            
    //             //         //console.log(result.data[0].attributes.gallery.data.attributes.image.data);
    //             //         //console.log(result.data.attributes.gallery.data.attributes.video);
    //             //         //console.log(result.data.attributes.reservations.data);
    //             //     },
    //             //     (error) => {

    //             //     }
    //             // )


    //     }

    //     //setReady(true)

    // }, [villaId])


    const query = await qs.stringify(
        {
            //populate: ["gallery.image", "categories", "distance_rulers", "price_tables.price_type", "regions", "localizations"]
            populate: {
                locationImage: {
                    fields: ['formats']
                },
                distance_rulers: {
                    fields: ['name', 'value', 'icon'],
                },
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
                categories: {
                    fields: ["name"]
                },
                regions: {
                    fields: ["name"]
                },
                price_tables: {
                    sort: ['line:asc'],
                    fields: ["title", "description", "price", "firstTime", "lastTime", "line"],
                    populate: {
                        price_type: {
                            fields: ["slug"]
                        }
                    }

                },
                reservations: {
                    sort: ["checkIn:asc"]
                }
            },
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    const vil = await fetch(`http://3.127.136.179:1337/api/villas/${villaId}?${query}`)

   await console.log(vil);
    
    
    return (
        <>
            <title>Labirent Fethiye | {vil.id}</title>
            <meta name="description" content={vil.id} />
        </>
    )
}