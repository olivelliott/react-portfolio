import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,

  Image,
} from "@chakra-ui/react";
import * as React from "react";
import brand from "../assets/icons/OE-1.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  const icons = [
    {
      name: "github",
      alt: "github icon",
      href: "https://github.com/olivelliott",
      icon: "FaGithub",
    },
    {
      name: "linkedin",
      alt: "linkedin icon",
      href: "https://www.linkedin.com/in/olivia-elliott-4a74a6128/",
      icon: "FaLinkedin",
    },
  ];
  return (
    <Container
      as="footer"
      role="contentinfo"
      py={{ base: "12", md: "16" }}
      bg="navy"
      maxW="auto"
      color="orange"
    >
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row" align="center">
          <Image src={brand} maxW="4.5rem"></Image>
          <ButtonGroup variant="ghost" color="orange">
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/olivia-elliott-4a74a6128/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://github.com/olivelliott"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://twitter.com/oliv_e_lliott"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="white" align="center">
          &copy; {new Date().getFullYear()} Olivia Elliott
        </Text>
      </Stack>
    </Container>
  );
}

export default Footer;
