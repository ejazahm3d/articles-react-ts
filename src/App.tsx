import React, { useState } from "react";
import "./App.css";
import Articles from "./features/articles";
import Layout from "./features/layout";
import { Article } from "./interfaces/article.interface";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

function App() {
  const [articles, setArticles] = useState<Article[]>([]);

  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <CSSReset />
        <Layout>
          <Articles articles={articles} setArticles={setArticles} />
        </Layout>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
