import "./App.css";
import ImageComponent from "./componenets/ImageComponent/ImageComponent";
import Owner2 from "../src/assets/Owner2.png"

function App() {
  return (
    <>
       <ImageComponent

        logoImage={Owner2}
        knowus="Know Us"
        titlecolor = {true}
        title="Our Story"
        d1="Dosawala is the best South Indian restaurant brand that has more than a decade of experience in serving authentic and contemporary delicacies of South Indian cuisine. We are established to breathe a new life into the traditional"
        d2=" South Indian cuisine and present it to the world in a new light. At Dosawala street, we endeavour to cater a unique menu to food conscious customers by modernising traditional south Indian recipes into healthier & tastier dishes."
        KnowMore = "know"
      />
    </>
  );
}

export default App;
