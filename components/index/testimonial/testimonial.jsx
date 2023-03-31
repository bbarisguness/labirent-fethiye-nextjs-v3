'use client';
import styles from "./testimonial.module.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./card/testimonialCard";
const qs = require('qs');
import { useEffect, useState } from "react"

export default function Testimonial() {

    const [ready, setReady] = useState(false)

    const [comments, setComments] = useState([])


    const query = qs.stringify(
        {
            populate: ["villa.region","villa.gallery.image"],
            pagination: {
                page: 1,
                pageSize: 6,
            }
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );

    useEffect(() => {
        fetch(`http://3.127.136.179:1337/api/testimonials?${query}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setComments(result.data)
                    setReady(true)
                    //console.log(result.data);
                    //console.log(result.data[0].attributes.gallery.data.attributes.image.data);
                },
                (error) => {

                }
            )

        //console.log(`http://3.127.136.179:1337/api/villas?${query}`);
    }, [ready])





    return (
        <div className={styles.testimonials}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.titleBox}>
                        <div className={styles.title}>Görüşlerimiz</div>
                        <div className={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
                    </div>
                </div>
                <div className={styles.top}>
                    <Carousel
                        additionalTransfrom={0}
                        arrows={false}
                        autoPlay
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        showDots
                        dotListClass={styles.dotListContainer}
                        containerClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={true}
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
                                    min: 767
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
                    >
                        {
                            comments.map((comment, index) => <TestimonialCard key={index} data={comment} />)
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    )
}