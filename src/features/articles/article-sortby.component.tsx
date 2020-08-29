import React, { useState, useEffect } from "react";
import { Select, Heading } from "@chakra-ui/core";
import { SortBy, sortArticles } from "./articlesSlice";
import { useAppDispatch } from "../../store";

interface Props {}

const ArticleSortBy: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const [articleSortBy, setArticleSortBy] = useState(SortBy.MostUpvoted);

  useEffect(() => {
    dispatch(sortArticles(articleSortBy));
  }, [articleSortBy, dispatch]);
  return (
    <>
      <Heading>Sort By</Heading>
      <Select
        value={articleSortBy}
        onChange={(e) => setArticleSortBy(e.target.value as SortBy)}
      >
        <option value={SortBy.MostUpvoted}>{SortBy.MostUpvoted}</option>
        <option value={SortBy.MostRecent}>{SortBy.MostRecent}</option>
      </Select>
    </>
  );
};

export default ArticleSortBy;
