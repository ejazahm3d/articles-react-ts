import React from "react";
import { Article } from "../../interfaces/article.interface";
import { v4 } from "uuid";

interface Props {
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
}

const ArticleForm: React.FC<Props> = (props) => {
  return <div>ArticleForm</div>;
};

export default ArticleForm;
