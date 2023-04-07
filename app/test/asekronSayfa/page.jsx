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

async function asekronSayfa()
{
    const data = await getData(5)
    console.log(data);
    return(
        <>
        {
            data.data.map((villa,index)=>(
                <div key={index}>
                    <h3>{villa.attributes.name}</h3>
                </div>
            ))
        }
        </>
    )
}

export default asekronSayfa

// async function getData() {
//     const res = fetch(`http://3.127.136.179:1337/api/villas`)
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.
  
//     // Recommendation: handle errors
   
//     return res;
//   }
  
//   export default async function Page() {
//     const data = await getData();
  
//     return <div>asd</div>;
//   }


// 'use client';
// const qs = require('qs');

// async function getData(activeTabIndex) {

//     const query = qs.stringify(
//         {
//             filters: {
//                 categories: {
//                     id: {
//                         $eq: activeTabIndex
//                     }
//                 },
//                 isVilla: {
//                     $eq: true
//                 }
//             },
//             price_tables: {
//                 sort: ['price:desc'],
//             },
//             pagination: {
//                 page: 1,
//                 pageSize: 8,
//             },
//             populate: ["gallery.image", "price_tables.price_type", "region", "localizations"]
//         },
//         {
//             encodeValuesOnly: true, // prettify URL
//         }
//     );

//     const res = await fetch(`http://3.127.136.179:1337/api/villas`)
//     console.log(res);
//     return res;
// }


// export default async function async() {
 
//     const data = await getData(5)
  
//   return (
//     <>
//       villa
//     </>
//   )
// }
