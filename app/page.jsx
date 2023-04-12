import Slider from "@/components/index/slider/slider"
import TreeStep from "@/components/index/treestep/treestep"
import Villa from "@/components/index/villa/villa"
import Regions from "@/components/index/region/region"
import Apart from "@/components/index/apart/apart"
import Service from "@/components/index/service/service"
import NewVillas from "@/components/index/newest/newest"
import Testimonial from "@/components/index/testimonial/testimonial"
import Blog from "@/components/index/blog/blog";
import VillaRent from "@/components/index/villaRentInfo/villaRentInfo";

export default function Home() {
 
  
  return (
    <>
      <Slider />
      <section id="contentContainer">
        <TreeStep />
        <Villa />
        <Regions />
        <Apart />
        <Service />
        <NewVillas />
        <Testimonial />
        <Blog />
        <VillaRent />
      </section>
    </>
  )
}
