import React from "react";
import { Article } from "../../interfaces/article.interface";
import { Box } from "@chakra-ui/core";
import ArticleForm from "./create-article.component";
import ArticleList from "./list-articles.component";

interface Props {
  articles: Article[];
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
}

const Articles: React.FC<Props> = (props) => {
  return (
    <Box paddingY="5rem">
      <ArticleForm />
      <ArticleList />
    </Box>
  );
};

export default Articles;
