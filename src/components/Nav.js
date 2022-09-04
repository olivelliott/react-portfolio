import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Image,
} from "@chakra-ui/react";
import Button from "react-bootstrap/Button";
import brand from "../assets/icons/OE-1.png";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const pageNames = ["About", "Portfolio", "Contact", "Resume"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "navy",
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navigation({ currentPage, handlePageChange }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const determineActiveClass = (pageName) => {
    const classtest = `${currentPage === pageName ? "active" : ""}`;
    console.log(classtest);
  };

  return (
    <>
      <Box bg="navy" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Image src={brand} maxW="4.2rem"></Image>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {pageNames.map((link) => (
                <Link
                  as="a"
                  key={link}
                  href={`#${link}`}
                  color="white"
                  onClick={() => {
                    handlePageChange(link);
                  }}
                  px={3}
                  py={3}
                  fontWeight="semibold"
                  rounded="md"
                  _hover={{
                    bg: "orange",
                    color: "white",
                    textDecoration: "none",
                  }}
                  className={determineActiveClass(currentPage, link)}
                >
                  <Button active>{link}</Button>
                </Link>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"}>
              {pageNames.map((link) => (
                <Link
                  as="a"
                  href={`#${link}`}
                  onClick={() => handlePageChange(link)}
                  color="white"
                  px={3}
                  py={3}
                  fontWeight="semibold"
                  rounded="md"
                  bg="navy"
                  _hover={{
                    bg: "orange",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
