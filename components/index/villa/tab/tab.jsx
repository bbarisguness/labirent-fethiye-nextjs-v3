import styles from "./tab.module.css"
import Link from "next/link"
import { useEffect, useState } from "react";
const qs = require('qs');

export default function VillaTab({ activeTabIndex, setActiveTabIndex }) {

    const changeIndex = (index) => {
        setActiveTabIndex(index)
    }

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const query = qs.stringify(
        {
            sort: ['line:asc'],
            populate: 'image',
            encodeValuesOnly: true,
        }
    );

    useEffect(() => {
        fetch(`http://3.127.136.179:1337/api/categories?${query}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.data);

                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    /*items.map((item,index) => (
        console.log(item.attributes.image.data.attributes.url)
    ))*/

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {
                    items.map(item => (
                        <li id={styles.villaTabLi} className={activeTabIndex == item.id ? styles.active : null} key={item.id}>
                            <span onClick={() => changeIndex(item.id)}>
                                <div className={styles.iconBox}>
                                    <i style={{ backgroundImage: `url(http://3.127.136.179:1337${item.attributes.image.data.attributes.url})` }}></i>
                                </div>
                                <div className={styles.title}>{item.attributes.name}</div>
                            </span>
                        </li>

                    ))}
            </ul>
        );
    }


}