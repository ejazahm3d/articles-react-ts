import React, { useState } from "react";
import "./App.css";
import Articles from "./features/articles";
import Layout from "./features/layout";
import { Article } from "./interfaces/article.interface";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

function App() {
  const [articles, setArticles] = useState<Article[]>([]);

  return (
    <ThemeProvider>
      <CSSReset />
      <Layout>
        <Articles articles={articles} setArticles={setArticles} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
