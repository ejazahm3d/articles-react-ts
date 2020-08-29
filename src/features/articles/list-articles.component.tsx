import React from "react";
import { Article } from "../../interfaces/article.interface";

interface Props {
  articles: Article[];
}

const ArticleList: React.FC<Props> = (props) => {
  return <div>ArticleList</div>;
};

export default ArticleList;
