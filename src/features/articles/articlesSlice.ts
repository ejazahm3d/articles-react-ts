import { Article } from "../../interfaces/article.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import articleData from "../../db/data.json";

export interface ArticlesSlice {
  articles: Article[];
}

export enum SortBy {
  MostUpvoted = "Most Upvoted",
  MostRecent = "Most Recent",
}

const initialState: ArticlesSlice = {
  articles: articleData,
};

export const sortByMostUpvoted = (articles: Article[]) => {
  return articles.sort((a, b) => a.upvotes - b.upvotes).reverse();
};
export const sortByMostRecent = (articles: Article[]) => {
  return articles
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .reverse();
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    addArticle: (state, action: PayloadAction<Article>) => {
      state.articles.push(action.payload);
      // immer.js
    },
    sortArticles: (state, action: PayloadAction<SortBy>) => {
      switch (action.payload) {
        case SortBy.MostUpvoted:
          state.articles = sortByMostUpvoted(state.articles);
          break;
        case SortBy.MostRecent:
          state.articles = sortByMostRecent(state.articles);

          break;
        default:
          break;
      }
    },
  },
});

export const articlesReducer = articlesSlice.reducer;

export const { addArticle, sortArticles } = articlesSlice.actions;
