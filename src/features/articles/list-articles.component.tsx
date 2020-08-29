import React from "react";
import { Article } from "../../interfaces/article.interface";
import ArticleItem from "./list-item.component";
import { Flex, Heading, Box } from "@chakra-ui/core";

interface Props {
  articles: Article[];
}

const ArticleList: React.FC<Props> = (props) => {
  const articles = props.articles;
  return (
    <Box paddingTop="0.8rem">
      <Heading>Articles</Heading>
      <Flex direction="column">
        {articles.map((article) => (
          <ArticleItem article={article} />
        ))}
      </Flex>
    </Box>
  );
};

export default ArticleList;
