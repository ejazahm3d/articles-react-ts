import React from "react";
import { Box } from "@chakra-ui/core";
import { Article } from "../../interfaces/article.interface";
import { format } from "date-fns";

interface Props {
  article: Article;
}

const ArticleItem: React.FC<Props> = (props) => {
  const article = props.article;
  return (
    <Box
      maxW="sm"
      marginTop="1.5rem"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      shadow="lg"
      cursor="pointer"
    >
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {article.title}
        </Box>

        <Box mt="1">Upvotes: {article.upvotes}</Box>

        <Box>Date: {format(new Date(article.date), "yyyy-MM-dd")}</Box>
      </Box>
    </Box>
  );
};

export default ArticleItem;
