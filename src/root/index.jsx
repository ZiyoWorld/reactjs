import React from "react";
import AddPostForm from "../components/features/posts/AddPostForm";
import PostsList from "../components/features/posts/postsList";
// import UseRedux from "../components/UseRedux";
// import AddPostForm from "../components/features/posts/AddPostForm";
// import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

export const Root = () => {
  return (
    <div className="main">
      <PostsList />
      <AddPostForm />
    </div>
  );
};

export default Root;
