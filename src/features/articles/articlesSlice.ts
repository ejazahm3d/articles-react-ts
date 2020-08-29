import { Article } from "../../interfaces/article.interface";
import { createSlice } from "@reduxjs/toolkit";

export interface ArticlesSlice {
  articles: Article[];
}

const initialState: ArticlesSlice = {
  articles: [],
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
});

export const articlesReducer = articlesSlice.reducer;
