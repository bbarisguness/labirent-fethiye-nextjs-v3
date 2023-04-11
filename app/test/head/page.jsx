var qs = require('qs');

export default async function HeadPage() {
  
    //let villaId = params.villaDetails.split('-')[0]
    let villaId = 9
   
    

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

    console.log(vil);
    console.log('burda');
    
    return (
        <>
       
        </>
    )
}