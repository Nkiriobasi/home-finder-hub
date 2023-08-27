import { Box } from "../components/chakra/chakra";

import BannerForBuying from "../../public/banner-for-buying.jpg";
import BannerForRenting from "../../public/banner-for-renting.jpg";

import { baseUrl, fetchApi } from "@/utils/fetchApi";
import { Banner } from "@/components/banner/banner";
import Property from "@/components/property/property";


// const getProperties = async () => {
//   const propertyForSale: PropertyList = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=10`);
//   const propertyForRent: PropertyList = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=10`);
  
//   return {
//     propertiesForSale: propertyForSale?.hits,
//     propertiesForRent: propertyForRent?.hits,
//   };
// };



export default async function Home() {
  // const properties = await getProperties();
  // const propertiesForSale = properties.propertiesForSale
  // const propertiesForRent = properties.propertiesForRent

  return (
    <Box>
      <Banner
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Everyone'
        desc1=' Explore from Apartments, builder floors, villas'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imageUrl={BannerForBuying}
      />
      {/* <div className="propertiesGrid">
        {propertiesForRent.map((property: Hits) => <Property property={property} key={property.id} />)}
      </div> */}
      <Banner
        purpose='BUY A HOME'
        title1=' Find, Buy & Own Your'
        title2='Dream Home'
        desc1=' Explore from Apartments, land, builder floors,'
        desc2=' villas and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imageUrl={BannerForRenting}
      />
      {/* <div className="propertiesGrid">
        {propertiesForSale.map((property: Hits) => <Property property={property} key={property.id} />)}
      </div> */}
    </Box>
  )
}
   