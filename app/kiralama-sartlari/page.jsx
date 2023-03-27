import BreadCrumb from "@/components/breadCrumb/breadCrumb";
import TreeStep from "@/components/index/treestep/treestep";
import styles from "./page.module.css"

export default function LeaseTerms() {
    return (
        <>
            <BreadCrumb />
            <section className={`${styles["contentDetail"]} ${styles["corporate"]}`}>
                <div className={styles.titleBox}>
                    <div className={styles.container}>
                        <h1 className={styles.title}>Sözleşme Şartları</h1>
                    </div>
                </div>
                <div className={styles.textBox}>
                    <div className={styles.container}>
                        <div class={styles.text}>
                            <h2>TARAFLAR VE AMAÇ</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sit
                                turpis sed pretium. Sagittis magna volutpat aliquam ac nulla
                                lacus vel est sit. Ac morbi congue egestas ipsum amet,
                                ullamcorper facilisi ut. Amet aliquam quam eget ipsum diam mi
                                quis adipiscing. Fermentum, sed leo risus, volutpat sed sed sed
                                quis. Et, risus nullam nibh vestibulum pretium at habitasse
                                pellentesque elementum. In eros eros ornare vulputate eget ac.
                                Porttitor diam, dignissim morbi at vitae faucibus vitae massa
                                vitae. Lobortis elementum suspendisse ac praesent velit nec.
                                Bibendum pretium aliquam lacus varius vitae ultricies at nisi.
                                At egestas eu magna diam pretium ut sed pretium quam. Lorem
                                lacinia volutpat egestas donec ac interdum id non. Ipsum sed
                                integer integer in vitae.
                            </p>

                            <h2>REZERVASYON VE ÖDEME</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sit
                                turpis sed pretium. Sagittis magna volutpat aliquam ac nulla
                                lacus vel est sit. Ac morbi congue egestas ipsum amet,
                                ullamcorper facilisi ut. Amet aliquam quam eget ipsum diam mi
                                quis adipiscing. Fermentum, sed leo risus, volutpat sed sed sed
                                quis. Et, risus nullam nibh vestibulum pretium at habitasse
                                pellentesque elementum. In eros eros ornare vulputate eget ac.
                                Porttitor diam, dignissim morbi at vitae faucibus vitae massa
                                vitae. Lobortis elementum suspendisse ac praesent velit nec.
                                Bibendum pretium aliquam lacus varius vitae ultricies at nisi.
                                At egestas eu magna diam pretium ut sed pretium quam. Lorem
                                lacinia volutpat egestas donec ac interdum id non. Ipsum sed
                                integer integer in vitae.
                            </p>

                            <h2>VİLLAYA/APARTA/DAİREYE GİRİŞ / ÇIKIŞ</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sit
                                turpis sed pretium. Sagittis magna volutpat aliquam ac nulla
                                lacus vel est sit. Ac morbi congue egestas ipsum amet,
                                ullamcorper facilisi ut. Amet aliquam quam eget ipsum diam mi
                                quis adipiscing. Fermentum, sed leo risus, volutpat sed sed sed
                                quis. Et, risus nullam nibh vestibulum pretium at habitasse
                                pellentesque elementum. In eros eros ornare vulputate eget ac.
                                Porttitor diam, dignissim morbi at vitae faucibus vitae massa
                                vitae. Lobortis elementum suspendisse ac praesent velit nec.
                                Bibendum pretium aliquam lacus varius vitae ultricies at nisi.
                                At egestas eu magna diam pretium ut sed pretium quam. Lorem
                                lacinia volutpat egestas donec ac interdum id non. Ipsum sed
                                integer integer in vitae.
                            </p>

                            <h2>VİLLA/APART/DAİRE KAPASİTESİ</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sit
                                turpis sed pretium. Sagittis magna volutpat aliquam ac nulla
                                lacus vel est sit. Ac morbi congue egestas ipsum amet,
                                ullamcorper facilisi ut. Amet aliquam quam eget ipsum diam mi
                                quis adipiscing. Fermentum, sed leo risus, volutpat sed sed sed
                                quis. Et, risus nullam nibh vestibulum pretium at habitasse
                                pellentesque elementum. In eros eros ornare vulputate eget ac.
                                Porttitor diam, dignissim morbi at vitae faucibus vitae massa
                                vitae. Lobortis elementum suspendisse ac praesent velit nec.
                                Bibendum pretium aliquam lacus varius vitae ultricies at nisi.
                                At egestas eu magna diam pretium ut sed pretium quam. Lorem
                                lacinia volutpat egestas donec ac interdum id non. Ipsum sed
                                integer integer in vitae.
                            </p>

                            <h2>VİLLA/APART/DAİRE TEMİZLİĞİ/BAKIMI VE EKSTRA GİDERLER</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sit
                                turpis sed pretium. Sagittis magna volutpat aliquam ac nulla
                                lacus vel est sit. Ac morbi congue egestas ipsum amet,
                                ullamcorper facilisi ut. Amet aliquam quam eget ipsum diam mi
                                quis adipiscing. Fermentum, sed leo risus, volutpat sed sed sed
                                quis. Et, risus nullam nibh vestibulum pretium at habitasse
                                pellentesque elementum. In eros eros ornare vulputate eget ac.
                                Porttitor diam, dignissim morbi at vitae faucibus vitae massa
                                vitae. Lobortis elementum suspendisse ac praesent velit nec.
                                Bibendum pretium aliquam lacus varius vitae ultricies at nisi.
                                At egestas eu magna diam pretium ut sed pretium quam. Lorem
                                lacinia volutpat egestas donec ac interdum id non. Ipsum sed
                                integer integer in vitae.
                            </p>
                        </div>
                    </div>
                </div>
                <TreeStep from="rentalTerms" />
            </section>
        </>
    )
}