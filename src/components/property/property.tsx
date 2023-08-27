import Link from "next/link";
import Image from "next/image";

import { Flex, Box, Text, Avatar } from "../chakra/chakra"

import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import DefaultImage from "../../../public/default-img.jpg"

interface Props {
    property: any
}

const Property: React.FC<Props> = ({ 
    property: { 
        coverPhoto, 
        price, 
        rentFrequency, 
        rooms, 
        title, 
        baths, 
        area, 
        agency, 
        isVerified, 
        externalID 
    }
}) => {
  return (
    <Link href={`/property/${externalID}`} passHref>
        <div 
            className="propertiesGridItem"
        >
            <Box w='full' h="73%">
                <Image 
                    src={coverPhoto ? coverPhoto.url : DefaultImage} 
                    width={400} 
                    height={260} 
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    alt="cover photo" 
                    priority
                />
            </Box>
            <Box w='full' h="27%">
                <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                        <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
                        <Text fontWeight='bold' fontSize='md'>AED {price}{rentFrequency && `/${rentFrequency}`}</Text>
                    </Flex>
                    <Box>
                        <Avatar size='sm' src={agency?.logo?.url}></Avatar>
                    </Box>
                </Flex>
                <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
                    {rooms}
                    <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                </Flex>
                <Text fontSize='md'>
                    {title.length > 30 ? title.substring(0, 30) + '...' : title}
                </Text>
            </Box>
        </div>
  </Link>
  )
}

export default Property