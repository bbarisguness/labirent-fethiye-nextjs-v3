import styles from "./page.module.css"
import TreeStep from "@/components/index/treestep/treestep"
import BreadCrumb from "@/components/breadCrumb/breadCrumb"

export default function Complaint() {
    return (
        <>
            <BreadCrumb />
            <section className={`${styles["contentDetail"]} ${styles["corporate"]}`}>
                <div className={styles.titleBox}>
                    <div className={styles.container}>
                        <h1 className={styles.title}>Şikayet Bildirimi</h1>
                    </div>
                </div>
                <div className={styles.textBox}>
                    <div className={styles.container}>
                        <div className={styles.text}>
                            <h2>Şikayet Bildirimi</h2>
                            <p>
                                Labirent Turizm olarak birinci önceliğimiz daima müşteri memnuniyetidir.
                                Bizim için bütün müşterilerimiz misafirdir ve firmamızın en büyük paydaşıdır.
                                Kiralık, satılık ve diğer hizmetlerimizden faydalanan misafirlerimizin büyük
                                çoğunluğu ortaya koyduğumuz memnuniyete dayanarak arkadaş referansı,
                                önceki misafirlerimizin tavsiyesi ile bizlere ulaşmaktadırlar.
                            </p>
                            <p>
                                Müşteri hizmetlerimizin tamamı misafirlerimizi ve ilişkili olan diğer tarafları dinlemeyi,
                                ihtiyaç ve beklentileri anlamayı öncelik olarak görmektedirler. Bizim için gelen bütün geri
                                bildirimler memnuniyetle karşılanmakta, olumlu ya da olumsuz tamamı bir değişim ve gelişim aracı
                                olarak değerlendirilmektedir.
                            </p>

                            <p>
                                Talepleriniz, ihtiyaçlarınız, şikayetleriniz, aklınıza takılan konular ve diğerleri için bizimle
                                iletişime geçmeye kesinlikle çekinmeyin. İletişime geçtiğiniz andan tatilinizin ya da hizmet alımınızın
                                sonuna kadar bütün taleplerinizi karşılamak bizin en büyük hedefimizdir.
                            </p>
                            <p>
                                Aşağıda şikâyet ve taleplerinizi bize ulaştırabileceğiniz bir form yer almaktadır.
                                Bu formu doldurarak rezervasyon anından itibaren tatilinizin her anında bize bildirebilirsiniz.
                                Dilekleriniz, istekleriniz ya da şikayetleriniz hiç fark etmeksizin değerlendirmeye alınacaktır.
                                İlettiğiniz mesajlarınız ilk olarak sadece müşteri hizmetleri ekibimiz tarafından incelenecek,
                                varsa şikâyet incelemesi aşamasında gizliliğe riayet edilecektir.
                            </p>
                            <p>
                                Firma olarak hiçbir şikayetinizin çözümsüz kalmayacağını garanti ediyor, detayları her ne olursa olsun çözüm
                                sağlamak adına hummalı bir çalışma yürüteceğimizi ve sizlere geri dönüş yaparak teyit alacağımızı garanti ediyoruz.
                                Lütfen formumuzu doldurarak öneri, dilek, istek veya şikâyetlerinizi bize iletin ki en uygun çözümlerle yardımcı olalım.
                            </p>


                        </div>
                    </div>
                </div>
                <TreeStep from="complaint" />
            </section>
        </>
    )
}