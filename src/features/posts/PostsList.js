import { useDispatch, useSelector } from "react-redux";
import { postDeleted, selectAllPosts } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts); // selectorens bruges med state og posts
  const users = useSelector(selectAllUsers);

  const handleDeletePost = (id) => {
    dispatch(postDeleted(id));
  };

  //definering af rendered ordered posts
  const renderedPosts = posts.map((post) => {
    const user = users.find((user) => user.userId === post.userId);
    //finder brugeren, som har samme id som postens userId
    return (
      <li key={post.id}>
        {/*hver gang, der er en ny post, vil den lave en li med en key*/}
        <h2>{post.title}</h2>
        <p>{post.body.substring(0, 100)}</p>
        {/*hvis posten er over 100 tegn, bliver ikke alt vist*/}
        {user && <p>Skrevet af: {user.name}</p>}
        <div>
          <i className="fas fa-edit"></i>
          <i
            className="fas fa-trash"
            onClick={() => handleDeletePost(post.id)} // Kalder handleDeletePost med postens id ved klik på skraldespandsikonet
          ></i>
        </div>
      </li>
    );
  });

  return <ul>{renderedPosts}</ul>;
};

export default PostsList;
