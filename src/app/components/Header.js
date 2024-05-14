import { useState } from "react";
import AddPostForm from "../../features/posts/AddPostForm";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <header>
      <h1>Bloggars</h1>
      <button onClick={() => setOpenModal(!openModal)}>Lav en post</button>
      {openModal && <AddPostForm closeModal={closeModal} />}
    </header>
  );
};

export default Header;
