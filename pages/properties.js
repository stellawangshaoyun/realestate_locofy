import { useState,useEffect } from "react";
import "antd/dist/antd.min.css";
import { Pagination, Dropdown} from "antd";
import {
  DownOutlined,
} from "@ant-design/icons";
import Header from "../components/header";
import PropertyContainer from "../components/property-container";
import Footer from "../components/footer";
import { createClient } from "@supabase/supabase-js";
const defaultOrder =[{
  key:"1",
  label:(
    <a
    onClick={(e)=>e.preventDefault()}
    >
      Popular Properties
    </a>
  )
},
{
  key:"2",
  label:(
    <a
    onClick={(e)=>e.preventDefault()}
    >
      Latest Properties
    </a>
  )
},
{
  key:"3",
  label:(
    <a
    onClick={(e)=>e.preventDefault()}
    >
      Recommended Properties
    </a>
  )
}]
const PropertiesGridView = () => {
  const clinet =createClient(process.env.NEXT_PUBLIC_URL,process.env.NEXT_PUBLIC_KEY)
  const [properties,setProperties]=useState([])
  useEffect (()=>{
    const fetchProperties =async()=>{
      const result =await clinet.from('properties').select('*')
      setProperties(result.data)
    }
    fetchProperties()
  },[])
  
  
  return (
    <div className=" bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
      <Header hamburger={false} />
      <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url(/category@3x.png)] bg-cover bg-no-repeat bg-top">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="leading-[72px] font-semibold">
            Properties
          </div>
          <div className="text-base leading-[24px] text-whitesmoke-200 font-body-regular-600">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Properties</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-16 pb-2 items-center justify-start gap-[95px] text-left text-base text-gray-black font-body-regular-600 lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-[60px] md:pr-[60px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
        <div className="w-[272px] flex flex-row items-center justify-start">
          <div className="flex flex-row items-end justify-start gap-[16px]">
            <div className="flex flex-row flex-wrap items-start justify-start gap-[8px]">
              <img className="w-6 h-6" alt="" src="/listbullets.svg" />
              <img className="w-6 h-6" alt="" src="/squaresfour.svg" />
            </div>
            <div className="leading-[24px]">Sort by:</div>
            <Dropdown
              menu={{items:defaultOrder}}
              placement="bottomLeft"
              trigger={["hover"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                {`Default Order `}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <PropertyContainer allProperties={properties}/>
        <div className="flex flex-row items-end justify-center gap-[8px] text-center text-primary-500">
          <Pagination
            defaultCurrent={1} 
            total={50} 
          />
        </div>
      </div>
      <Footer
        houseLine="/houseline1.svg"
        socialMediaLogo="/social-media-logo.svg"
        socialMediaLogo1="/social-media-logo1.svg"
        socialMediaLogo2="/social-media-logo2.svg"
        socialMediaLogo3="/social-media-logo3.svg"
        socialMediaLogo4="/social-media-logo4.svg"
      />
    </div>
  );
};

export default PropertiesGridView;
