import "./AboutPage.css";
import Header from "../Header/Header";
import ImageComponent from "../ImageComponent/ImageComponent";
import AboutSlide from "../AboutSlide/AboutSlide";
import Footer from "../Footer/Footer";
import logoImage from "../../assets/Llogo.png";
import Grow from "../../assets/Grow.png";
import Bottle from "../../assets/Bottle.png";
import Owner from "../../assets/Owner.png";
import AboutSlide2 from "../AboutSlide2/AboutSlide2";
import Map from "../../assets/Map.png";

function AboutPage() {
  return (
    <>
      <Header />

      <ImageComponent
        logoImage={logoImage}
        knowus="Know Us"
        title="About Dosawala"
        d1="Dosawa is the best South Indian restaurant brand that has more than a decade of experience in serving authentic and contemporary delicacies of South Indian cuisine."
        d2="We are established to breathe a new life into the traditional south Indian cuisine and present it to the world in a new light. At Dosawala street, we endeavour to cater a unique menu to food conscious customers by modernising traditional south Indian recipes into healthier & tastier dishes."
        d3="Dosawala unique in its concept has varying franchise based on site availability and expertise in feasibility analytics in the food & beverage industry."
        d4="We have designed our menu very cautiously that ensures the authentic taste of the South. Some of the most popular food items on our menu are Idli, Dosa, Special Chula Dosa Vada, Uthappam, Upma, Rice, and rice."
      />

      <ImageComponent
        logoImage={Owner}
        reverse={true}
        title="Our Story"
        d1="In a world that is increasingly coming closer, we seek to promote the harmony of Indian culture, cuisine and experience. Celebrating southern dining in all its glory, we use the finest ingredients, often flown in from different parts of South India, to create mouth-watering delicacies for a truly authentic and unforgettable dining experience."
        d2="providing the world with a different traditional experience and considering our youth going to Morden era we have created the cuisine and menu to serving authentic and contemporary delicacies South Indian food with our decade of experience."
      />

      <ImageComponent
        logoImage={Grow}
        title="Growth and Opportunity"
        d1="Dosawala strives to provide its customers, the healthiest and wholesome meal at a very affordable price and to generate profits for the benefit of the franchise in a short duration of time."
        d2="Dosawala dedicates to ensure the success of our franchisee associates by focussing and providing exclusive support and service in a committed environment To spread the product across the globe through our chain of retail outlets."
        d3="Our brand chain special tastemakers and ingredients will spread a standard flavour of taste all over the country"
        d4="We offer you the right opportunity a franchise with The dosawala team will create the immediate advantage of working with a well-established brand."
      />

      <AboutSlide />
      <ImageComponent
        logoImage={Bottle}
        title="Grow with us"
        d1="Dosawala offers some of the best franchise support in the industry. We provide access to a wide range of experts across the country. Strong parent group. Extensive franchise support. The management is experienced."
        d2="An enthusiastic, service-oriented company having high sensitivity towards food service standards and strong casual dining concept acumen Competent group with phenomenal ability to operate a network of the restaurant on Pan Indian scale Strong operational expertise of operating restaurant in the industries Strategic tie-ups with vendors and supplier promising national procurement network Fabulous back -end team with exceptional work experience in F&B category Excellent real estate acquisition ability through strategic tie-ups high profile real estate developers of the county Attractive margins High ROI"
      />
      <AboutSlide2 />

      <div className="image">
        <img className="map" src={Map} alt="" />
      </div>

      <Footer />
    </>
  );
}

export default AboutPage;
