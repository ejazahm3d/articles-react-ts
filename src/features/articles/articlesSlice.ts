import { Article } from "../../interfaces/article.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ArticlesSlice {
  articles: Article[];
}

const initialState: ArticlesSlice = {
  articles: [],
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
