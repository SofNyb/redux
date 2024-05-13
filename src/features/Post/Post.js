import { useSelector } from "react-redux";

function Post() {
  const post = useSelector((store) => store.post.title);

  return <h2>Hej {post}</h2>;
}

export default Post;
