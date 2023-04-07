import React from "react";
const qs = require('qs');
const getData = async (activeTabIndex) => {

    const query = qs.stringify(
        {
            filters: {
                categories: {
                    id: {
                        $eq: activeTabIndex
                    }
                },
                isVilla: {
                    $eq: true
                }
            },
            price_tables: {
                sort: ['price:desc'],
            },
            pagination: {
                page: 1,
                pageSize: 8,
            },
            populate: ["gallery.image", "price_tables.price_type", "region", "localizations"]
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
    const res = await fetch(`http://3.127.136.179:1337/api/villas?${query}`)
    return res.json()
}
async function AsekronVilla() {
   

    const data = await getData(5)
    
    return (
        <div className={styles.villas}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.titleBox}>
                        <div className={styles.title}>Villalarımız</div>
                        <div className={styles.subTitle}>Villalarımız arasından en seçkinlerini sizler için derledik.</div>
                    </div>
                    <div className={styles.top}>
                        <ul>

                        </ul>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.row}>
                            {
                                data.data.map((villa, index) => (
                                    <div key={index}>
                                        <h3>{villa.attributes.name}</h3>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AsekronVilla