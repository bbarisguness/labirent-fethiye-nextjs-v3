import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Link from 'next/link';
// LightGallery Styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import styles from "./gallery.module.css"
import Image from 'next/image';

export default function Gallery({ data }) {

    //console.log(data.data);
    if (data != null) {
        return (
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >


                {
                    data.data.map((data, index) => (

                        index < 10 ? (index === 0 ?
                            (<Link key={index} className={styles.lightBoxItem} href={`http://3.127.136.179:1337${data.attributes.url}`}>
                                <div className={styles.lightBoxItemChild}>
                                    <div className={styles.imageBox}>
                                        <div className={styles.img} style={{ backgroundImage: `url(http://3.127.136.179:1337${data.attributes.url})` }}></div>
                                    </div>
                                </div>
                                {/* <Image src={`http://3.127.136.179:1337${data.attributes.url}`} width={1} height={1} style={{ display: 'none' }} /> */}
                            </Link>)
                            :
                            (
                                index === 9 ?
                                    (<Link key={index} className={`${styles['lightBoxItem']} ${styles['lastLi']}`} href={`http://3.127.136.179:1337${data.attributes.url}`}>
                                        <div className={styles.lightBoxItemChild}>
                                            <div className={styles.imageBox}>
                                                <div className={styles.img} style={{ backgroundImage: `url(http://3.127.136.179:1337${data.attributes.formats.thumbnail.url})` }}></div>                                               
                                            </div>
                                            <span>+28</span>
                                        </div>
                                        {/* <Image src={`http://3.127.136.179:1337${data.attributes.url}`} width={1} height={1} style={{ display: 'none' }} /> */}
                                    </Link>)
                                    :
                                    (<Link key={index} className={styles.lightBoxItem} href={`http://3.127.136.179:1337${data.attributes.url}`}>
                                        <div className={styles.lightBoxItemChild}>
                                            <div className={styles.imageBox}>
                                                <div className={styles.img} style={{ backgroundImage: `url(http://3.127.136.179:1337${data.attributes.formats.thumbnail.url})` }}></div>
                                            </div>
                                        </div>
                                        {/* <Image src={`http://3.127.136.179:1337${data.attributes.url}`} width={1} height={1} style={{ display: 'none' }} /> */}
                                    </Link>)
                            ))
                            :
                            (<Link key={index} style={{ display: "none" }} href={`http://3.127.136.179:1337${data.attributes.url}`}>

                                {/* <Image src={`http://3.127.136.179:1337${data.attributes.url}`} width={1} height={1} style={{ display: 'none' }} /> */}
                            </Link>)




                    ))
                }

            </LightGallery>
        )
    }
    else {
        return (<>loading</>)
    }

}