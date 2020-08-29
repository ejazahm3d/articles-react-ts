import React from "react";
import Header from "./header.component";
import Footer from "./footer.component";

interface Props {}

const Layout: React.FC<Props> = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
