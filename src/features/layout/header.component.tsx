import React from "react";
import { Flex, Link, Button, Text } from "@chakra-ui/core";

interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <header>
      <Flex
        bgImage="linear-gradient(90deg, rgba(69,168,222,1) 0%, rgba(39,128,195,1) 100%)"
        maxW="100%"
        px={5}
        py={4}
        roundedBottom="0.2rem"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          <Text pl={3} fontSize="xl" fontWeight="bold" color="white">
            Articles App
          </Text>
        </Flex>

        <Flex
          display={{ xs: "none", md: "flex" }}
          justify="center"
          align="center"
        >
          <Link href="/#contact" _hover={{ textDecor: "none" }}>
            <Button ml="0.5rem">Contact now</Button>
          </Link>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
