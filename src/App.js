import React from "react";
import "./App.css";
import PostsList from "./features/posts/PostsList";
import Header from "./app/components/Header";
import { useSelector } from "react-redux";

function App() {
  const posts = useSelector((state) => state.posts);
  const numPosts = posts.length;

  return (
    <>
      <Header />
      <main>
        <h3>
          Antal posts: <span>{numPosts} styks</span>
        </h3>
        <PostsList />
      </main>
    </>
  );
}
export default App;
