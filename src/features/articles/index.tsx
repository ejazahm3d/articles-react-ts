import React from "react";
import { Article } from "../../interfaces/article.interface";
import { Box } from "@chakra-ui/core";
import ArticleForm from "./create-article.component";
import ArticleList from "./list-articles.component";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ArticleSortBy from "./article-sortby.component";

interface Props {}

const Articles: React.FC<Props> = () => {
  const articles = useSelector<RootState, Article[]>(
    (state) => state.articles.articles
  );

  return (
    <Box paddingY="5rem">
      <ArticleForm />
      <ArticleSortBy articles={articles} />
      <ArticleList articles={articles} />
    </Box>
  );
};

export default Articles;
