import styles from "./navbar.module.css";
import Link from "next/link";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import { Menu, MenuButton, MenuItem, MenuList, IconButton, Spacer, Flex, Box } from "../chakra/chakra";


const Navbar = () => (
    <header>
        <Flex p="2" borderBottom="1px" borderColor="gray.100">
            <Box fontSize="2xl" color="blue.400" fontWeight="bold">
                <Link href="/" className={styles.logo}>Home finder</Link>
            </Box>
            <Spacer />
            <Box>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='menu'
                        icon={<FcMenu />}
                        variant='outline'
                        color="red.400"
                    />
                    <MenuList>
                        <Link href="/" passHref>
                            <MenuItem icon={<FcHome />}>Home</MenuItem>
                        </Link>
                        <Link href="/search" passHref> 
                            <MenuItem icon={<BsSearch />}>Search</MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-sale" passHref>
                            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-rent" passHref>
                            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    </header>
)

export default Navbar