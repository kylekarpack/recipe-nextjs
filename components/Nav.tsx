import { MoonIcon, SunIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  HStack,
  Flex,
  Link,
  Menu,
  IconButton,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import Img from "next/image";
import { FunctionComponent, ReactNode } from "react";

const NavLink: FunctionComponent<{ children: ReactNode; href?: string }> = ({ children, href }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700")
    }}
    href={href}
  >
    {children}
  </Link>
);

const Nav: FunctionComponent = () => {
  const menuLinks = [
    { title: "Home", href: "/" },
    { title: "Meal Plan", href: "/plan" },
    { title: "Suggestions", href: "/suggestions" }
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} position="sticky" top="0" zIndex="99" boxShadow="sm">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Flex alignItems={"center"}>
            {colorMode === "dark" ? (
              <Img src="/logo-white.svg" height={40} width={200} priority alt="Recipe tools logo" />
            ) : (
              <Img src="/logo.svg" height={40} width={200} priority alt="Recipe tools logo" />
            )}
          </Flex>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {menuLinks.map((link) => (
              <NavLink href={link.href} key={link.href}>
                {link.title}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {menuLinks.map((link) => (
              <NavLink href={link.href} key={link.href}>
                {link.title}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Nav;
