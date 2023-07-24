import Head from "next/head";
import Header from "../components/header";
import Main from "../components/main";
import PropertiesContainer from "../components/properties-container";
import AreaPropertiesContainer from "../components/area-properties-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <div className="relative bg-gray-white w-full  flex flex-col items-center justify-start">
      <Header hamburger={false} />
      <Main />
      <PropertiesContainer />
      <AreaPropertiesContainer />
      <RentPropertiesContainer />
      <RentPropertiesForm />
      <Contact />
      <Footer/>
    </div>
  );
};

export default LandingPage;
