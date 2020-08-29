import {
  articlesReducer,
  addArticle,
  sortArticles,
  SortBy,
  sortByMostRecent,
  sortByMostUpvoted,
} from "../../features/articles/articlesSlice";
import { Article } from "../../interfaces/article.interface";
import data from "../../db/data.json";

import "mutationobserver-shim";

describe("transaction redux", () => {
  it("should handle initial state", () => {
    expect(articlesReducer(undefined, { type: "" })).toEqual({
      articles: data,
    });
  });

  it("should handle addArticle", () => {
    expect(
      articlesReducer(
        { articles: data },
        {
          type: addArticle.type,
          payload: {
            id: "1",
            title: "Test",
            date: "2020-06-01T01:44:51Z",
            upvotes: 0,
          } as Article,
        }
      )
    ).toEqual({
      articles: [
        ...data,
        {
          id: "1",
          title: "Test",
          date: "2020-06-01T01:44:51Z",
          upvotes: 0,
        },
      ],
    });
  });

  it("should handle sortBy most upvoted", () => {
    expect(
      articlesReducer(
        {
          articles: data,
        },
        {
          type: sortArticles(SortBy.MostUpvoted),
          payload: SortBy.MostUpvoted,
        }
      )
    ).toEqual({
      articles: sortByMostUpvoted(data),
    });
  });

  it("should handle sortBy most recent", () => {
    expect(
      articlesReducer(
        {
          articles: data,
        },
        {
          type: sortArticles(SortBy.MostRecent),
          payload: SortBy.MostRecent,
        }
      )
    ).toEqual({
      articles: sortByMostRecent(data),
    });
  });
});
