import { useState } from "react";
//title og body bruger useState, fordi det kun skal bruges i denne component

import { useDispatch } from "react-redux";

import { postAdded } from "./postSlice";

const AddPostForm = ({ closeModal }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onBodyChanged = (e) => setBody(e.target.value);

  const onSavePostClicked = () => {
    if (title.trim() !== "" && body.trim() !== "") {
      dispatch(postAdded(title, body));

      setTitle(""); //denne linje og dem under sætter staten tilbage til tom
      setBody("");
      setError(null);
      closeModal();
    } else {
      setError("Alle felter skal udfyldes.");
    }
  };

  return (
    <form>
      <input
        placeholder="Skriv en titel her..."
        type="text"
        id="postTitle"
        name="postTitle"
        value={title}
        onChange={onTitleChanged}
      />
      <br />
      <br />
      <textarea
        placeholder="Skriv indholdet af din post her..."
        id="postBody"
        name="postBody"
        value={body}
        onChange={onBodyChanged}
      />
      <br />
      <br />
      <button className="add" type="button" onClick={onSavePostClicked}>
        Tilføj
      </button>

      <button type="button" onClick={closeModal}>
        Annuller
      </button>
      <br />
      {error && <p>{error}</p>}
    </form>
  );
};

export default AddPostForm;
