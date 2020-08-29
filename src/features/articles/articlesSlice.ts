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

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    addArticle: (state, action: PayloadAction<Article>) => {
      state.articles.push(action.payload);
    },
    sortArticles: (state, action: PayloadAction<SortBy>) => {
      switch (action.payload) {
        case SortBy.MostUpvoted:
          state.articles.sort((a, b) => a.upvotes - b.upvotes).reverse();
          break;
        case SortBy.MostRecent:
          state.articles
            .sort(
              (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
            )
            .reverse();
          break;
        default:
          break;
      }
    },
  },
});

export const articlesReducer = articlesSlice.reducer;

export const { addArticle, sortArticles } = articlesSlice.actions;
