import React from "react";
import "./App.css";
import "./App.dark.css";
import PostsList from "./features/posts/PostsList";
import Header from "./app/components/Header";
import { useSelector } from "react-redux";
/*import { toggleDarkTheme } from "./features/posts/postSlice";*/

function App() {
  /*const dispatch = useDispatch();*/
  const posts = useSelector((state) => state.posts);
  const numPosts = posts.length;

  /*const darkTheme = useSelector((state) => state.posts.darkTheme); // Hent darkTheme fra Redux state

  const handleThemeToggle = () => {
    dispatch(toggleDarkTheme());
  };*/

  return (
    <>
      <Header />
      <main>
        <h3>
          Antal posts: <span>{numPosts} styks</span>
        </h3>
        <PostsList />
      </main>

      {/*<footer
        onClick={handleThemeToggle} //funktion bruges til at skifte tema
        className={`${darkTheme ? "dark" : ""}`}
      >
        <i className={`fas fa-${darkTheme ? "sun" : "moon"}`}></i>
  </footer>*/}
    </>
  );
}
export default App;
