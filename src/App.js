import "./App.css";
import CreatePosts from "./components/createPosts";

function App() {
  return (
    <div className="App">
      <Header />
      <CreatePosts />
      <Posts />
    </div>
  );
}

export default App;
