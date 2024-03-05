import "./App.css";
import Header from "./componenets/Header/Header";
import ImageComponent from "./componenets/ImageComponent/ImageComponent";
import Footer from "./componenets/Footer/Footer";

import logoImage from "../src/assets/Llogo.png";

function App() {
  return (
    <>
      {/* <Header/> */}
      <ImageComponent
        logoImage={logoImage}
        knowus="Know Us"
        title="About Dhosawala"
        
      />
      {/* <Footer/> */}
    </>
  );
}

export default App;
