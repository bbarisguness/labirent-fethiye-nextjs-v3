'use client';
import VillaCard from "../villa/card/villaCard"
import styles from "./newest.module.css"
import { stockData } from "@/data/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function NewVillas() {
    return (
        <div className={styles.newVillas}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={`${styles.titleBox} ${styles.white}`}>
                        <div className={styles.title}>Yeni Eklenen Villalar</div>
                        <div className={styles.subTitle}>Villalarımız arasından en seçkinlerini sizler için derledik.</div>
                    </div>
                    <div className={styles.top}>
                        <Carousel
                            additionalTransfrom={0}
                            arrows
                            autoPlaySpeed={3000}
                            centerMode={false}
                            className=""
                            dotListClass=""
                            draggable
                            focusOnSelect={false}
                            infinite
                            itemClass=""
                            minimumTouchDrag={20}
                            pauseOnHover
                            renderArrowsWhenDisabled={false}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={{
                                desktop: {
                                    breakpoint: {
                                        max: 3000,
                                        min: 1024
                                    },
                                    items: 3,
                                    partialVisibilityGutter: 40
                                },
                                mobile: {
                                    breakpoint: {
                                        max: 767,
                                        min: 0
                                    },
                                    items: 1,
                                    partialVisibilityGutter: 30
                                },
                                tablet: {
                                    breakpoint: {
                                        max: 1024,
                                        min: 768
                                    },
                                    items: 2,
                                    partialVisibilityGutter: 30
                                }
                            }}
                            rewind={false}
                            rewindWithAnimation={false}
                            rtl={false}
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                        >
                            {stockData.map((data, index) =>
                                <VillaCard key={index} data={data} type="apart" from="newest" />
                            )}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}