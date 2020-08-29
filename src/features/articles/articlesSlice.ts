import { Article } from "../../interfaces/article.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import articleData from "../../db/data.json";

export interface ArticlesSlice {
  articles: Article[];
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
  },
});

export const articlesReducer = articlesSlice.reducer;

export const { addArticle } = articlesSlice.actions;
