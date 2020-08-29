import React from "react";
import "./App.css";
import Articles from "./features/articles";
import Layout from "./features/layout";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <CSSReset />
        <Layout>
          <Articles />
        </Layout>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
