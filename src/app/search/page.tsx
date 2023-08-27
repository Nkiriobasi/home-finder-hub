"use client"

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "../../components/chakra/chakra";
import SearchFilters from "@/components/searchFilters/searchFilters";
import Property from "@/components/property/property";
import { BsFilter } from "react-icons/bs";
import noresult from "../../../public/noresult.svg";


const Search: React.FC<any> = ({ properties }) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const searchParams = useSearchParams();
 
    const purpose = searchParams.get('purpose');

    return (
        <Box>
            <Flex 
                cursor="pointer" 
                bg="gray.100"
                borderBottom="1px"
                borderColor="gray.200"
                p="2"
                fontWeight="black"
                fontSize="large"
                justifyContent="center"
                alignItems="center"
                onClick={() => setSearchFilters(prevFilters => !prevFilters)}
            >
                <Text>Search Property By Filter</Text>
                <Icon paddingLeft="2" w="7" as={BsFilter} />
            </Flex>

            {searchFilters && <SearchFilters />}

            <Text fontSize="2xl" p="4" fontWeight="bold">
                Properties {purpose}
            </Text>

            <div className="propertiesGrid">
                {properties.map((property: Hits) => <Property property={property} key={property.id} />)}
            </div>
            {properties.length === 0 && (
                <Flex 
                    justifyContent="center" 
                    alignItems="center"
                    flexDirection="column"
                    marginTop="5"
                    marginBottom="5"
                >
                    <Image src={noresult} alt="no result" />
                    <Text fontSize="2xl" marginTop="3">No results Found</Text>
                </Flex>
            )}
        </Box>
    )
}

export default Search

// interface GetPropertiesProp {
//     purpose: string
// }

// const getProperties = async ({ purpose }: GetPropertiesProp) => {
//     const purposeQuery = purpose || "for-rent";
  
//     return {
//         propertiesForSale: propertyForSale?.hits,
//     };
// };