import PropertyCard from "./propertyCard";

const RentPropertiesContainer = () => {
  return (
    <div className="flex flex-col py-[86px] px-0 box-border items-center justify-start gap-[39px] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="flex flex-col items-center justify-start gap-[40px]  md:box-border">
        <div className=" flex flex-col flex-wrap items-center justify-start gap-[24px]    md:w-auto">
          <div className=" leading-[48px] font-semibold">
            Latest Properties of Rent
          </div>
          <div className=" text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px]">
          <PropertyCard
          imgUrl="/unsplashrlwe8f8anoc7@2x.png"
          name='92 ALLIUM PLACE, ORLANDO FL 32827'
          price={22200}
            
          />
          <PropertyCard
           imgUrl="/unsplashrlwe8f8anoc8@2x.png"
           name='92 ALLIUM PLACE, ORLANDO FL 32827'
           price={18200}
          />
          <PropertyCard
            imgUrl="/unsplashrlwe8f8anoc9@2x.png"
            name='92 ALLIUM PLACE, ORLANDO FL 32827'
            price={16200}
          />
          <PropertyCard
            imgUrl="/unsplashrlwe8f8anoc10@2x.png"
            name='92 ALLIUM PLACE, ORLANDO FL 32827'
            price={12200}
          />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start">
        <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </div>
  );
};

export default RentPropertiesContainer;
