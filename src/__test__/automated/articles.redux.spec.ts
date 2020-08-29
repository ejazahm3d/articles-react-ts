import {
  articlesReducer,
  addArticle,
  sortArticles,
  SortBy,
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
        { articles: [] },
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
          articles: [
            {
              id: "f3033fb5-3378-49a2-9c95-e6d5874c27bf",
              title: "Eloise at Christmastime",
              date: "2020-06-01T01:44:51Z",
              upvotes: 1,
            },
            {
              id: "55502937-a6e8-4f48-a47a-885f9a874931",
              title: "Inn of the Sixth Happiness, The",
              date: "2019-12-21T20:48:42Z",
              upvotes: 2,
            },
          ],
        },
        {
          type: sortArticles(SortBy.MostUpvoted),
          payload: SortBy.MostUpvoted,
        }
      )
    ).toEqual({
      articles: [
        {
          id: "55502937-a6e8-4f48-a47a-885f9a874931",
          title: "Inn of the Sixth Happiness, The",
          date: "2019-12-21T20:48:42Z",
          upvotes: 2,
        },
        {
          id: "f3033fb5-3378-49a2-9c95-e6d5874c27bf",
          title: "Eloise at Christmastime",
          date: "2020-06-01T01:44:51Z",
          upvotes: 1,
        },
      ],
    });
  });

  it("should handle sortBy most recent", () => {
    expect(
      articlesReducer(
        {
          articles: [...data],
        },
        {
          type: sortArticles(SortBy.MostRecent),
          payload: SortBy.MostRecent,
        }
      )
    ).toEqual({
      articles: [...data],
    });
  });
});
