import Link from "next/link";
import Image from "next/image";

import { Flex, Box, Text, Button } from "../chakra/chakra";

interface PropsType {
    purpose: string
    imageUrl: any
    title1: string
    title2: string
    desc1: string
    desc2: string
    linkName: string
    buttonText: string
}

export const Banner: React.FC<PropsType> = ({ purpose, imageUrl, title1, title2, desc1, desc2, linkName, buttonText }) => (

    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" mx="4" my="8">
        <Image src={imageUrl} width={500} height={300} alt="banner" priority style={{ width: "auto", height: "auto"}} />
  
        <Box p="4" textAlign="center">
            <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
            <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
            <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text>
  
            <Button fontSize="xl">
                <Link href={linkName}>{buttonText}</Link>
            </Button>
        </Box>
    </Flex>
)
