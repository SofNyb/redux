import { useState } from "react";
import AddPostForm from "../../features/posts/AddPostForm";
import AddUsers from "../../features/users/AddUsers";

const Header = () => {
  const [openUsersModal, setOpenUsersModal] = useState(false);
  const [openPostsModal, setOpenPostsModal] = useState(false);

  const closeUsersModal = () => {
    setOpenUsersModal(false);
  };

  const closePostsModal = () => {
    setOpenPostsModal(false);
  };

  return (
    <header>
      <h1>Bloggars</h1>
      <button onClick={() => setOpenUsersModal(!openUsersModal)}>
        Tilføj en bruger
      </button>
      {openUsersModal && <AddUsers closeModal={closeUsersModal} />}

      <button onClick={() => setOpenPostsModal(!openPostsModal)}>
        Lav en post
      </button>
      {openPostsModal && <AddPostForm closeModal={closePostsModal} />}
    </header>
  );
};

export default Header;
