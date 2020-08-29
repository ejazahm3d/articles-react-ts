import React from "react";
import Header from "./header.component";
import Footer from "./footer.component";
import { Flex } from "@chakra-ui/core";

interface Props {}

const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      <Flex
        flexDirection="column"
        paddingX="8rem"
        justifyContent="center"
        alignItems="center"
      >
        {props.children}
      </Flex>
      <Footer />
    </>
  );
};

export default Layout;
