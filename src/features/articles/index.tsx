import React from "react";
import { Article } from "../../interfaces/article.interface";
import { Button } from "@chakra-ui/core";

interface Props {
  articles: Article[];
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
}

const Articles: React.FC<Props> = (props) => {
  return (
    <div>
      Articles
      <Button>Test</Button>
    </div>
  );
};

export default Articles;
