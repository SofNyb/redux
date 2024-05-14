import { useDispatch, useSelector } from "react-redux";
import { postDeleted, selectAllPosts } from "./postSlice";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts); // selectorens bruges med state og posts

  const handleDeletePost = (id) => {
    dispatch(postDeleted(id));
  };

  //definering af rendered ordered posts
  const renderedPosts = posts.map((post) => (
    <li key={post.id}>
      {/*hver gang, der er en ny post, vil den lave en li med en key*/}
      <h2>{post.title}</h2>
      <p>{post.body.substring(0, 100)}</p>
      {/*hvis posten er over 100 tegn, bliver ikke alt vist*/}
      <div>
        <i className="fas fa-edit"></i>
        <i
          className="fas fa-trash"
          onClick={() => handleDeletePost(post.id)} // Kalder handleDeletePost med postens id ved klik på skraldespandsikonet
        ></i>
      </div>
    </li>
  ));

  return <ul>{renderedPosts}</ul>;
};

export default PostsList;
