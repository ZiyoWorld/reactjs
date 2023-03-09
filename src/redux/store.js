import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../components/features/posts/postsSlice";
import usersReducer from "../components/features/users/usersSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
