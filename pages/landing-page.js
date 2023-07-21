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
    <div className="relative bg-gray-white w-full h-[5095.99px] flex flex-col items-center justify-start">
      <Header hamburger />
      <Main />
      <PropertiesContainer />
      <AreaPropertiesContainer />
      <RentPropertiesContainer />
      <RentPropertiesForm />
      <Contact />
      <Footer
        houseLine="/houseline2.svg"
        socialMediaLogo="/social-media-logo5.svg"
        socialMediaLogo1="/social-media-logo6.svg"
        socialMediaLogo2="/social-media-logo7.svg"
        socialMediaLogo3="/social-media-logo8.svg"
        socialMediaLogo4="/social-media-logo9.svg"
        propOverflow="unset"
      />
    </div>
  );
};

export default LandingPage;
