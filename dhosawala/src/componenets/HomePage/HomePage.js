import "./HomePage.scss";
import ImageComponent from "../ImageComponent/ImageComponent";
import HomeSlide1 from "../HomeSlide1/HomeSlide1";
import HomeSlide2 from "../HomeSlide2/HomeSlide2";
import MenuCard from "../MenuCard/MenuCard";
import HomeSlide3 from "../HomeSlide3/HomeSlide3";
import Owner2 from "../../assets/Owner2.png";
import Owner from "../../assets/Owner.png";
import DhosaThali from "../../assets/DhosaThali.png";
import { useEffect, useState } from "react";
import Home from "../Home/Home";

function HomePage() {
  const [mobpreview, setmobPreview] = useState(true);

  const actualWidth = () => {
    if (window.innerWidth < 798) {
      setmobPreview(false);
    } else {
      setmobPreview(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", actualWidth);
  });

  return (
    <>
      <Home />
      <ImageComponent
        logoImage={mobpreview ? Owner2 : Owner}
        knowus="Know Us"
        titlecolor={true}
        title="Our Story"
        d1="Dosawala is the best South Indian restaurant brand that has more than a decade of experience in serving authentic and contemporary delicacies of South Indian cuisine. We are established to breathe a new life into the traditional"
        d2=" South Indian cuisine and present it to the world in a new light. At Dosawala street, we endeavour to cater a unique menu to food conscious customers by modernising traditional south Indian recipes into healthier & tastier dishes."
        KnowMore="know more "
      />
      <HomeSlide3 />

      <MenuCard />

      <ImageComponent
        logoImage={mobpreview && DhosaThali}
        knowus="Vision and Growth"
        title="A Winning Franchise Team"
        d1="Dosawala strives to provide its customers, the healthiest and wholesome meal at a very affordable prices and to generate profits for the benefit of the franchise in a short duration of time. Dosawala dedicate to ensure the success of our franchisee associates by focussing and providing exclusive support and service on committed environment"
        d2="To spread the product across the globe through our chain of retail outlets. Our brand chain special taste makers and ingredients will spread a standard favor of taste all over the country"
        KnowMore="know more "
        disappear={true}
        id="franchise"
      />

      <HomeSlide1 />
      <HomeSlide2 />
    </>
  );
}

export default HomePage;
