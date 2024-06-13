import { useState } from "react";
//title og body bruger useState, fordi det kun skal bruges i denne component

import { useDispatch } from "react-redux";

import { postAdded } from "./postSlice";

const AddPostForm = ({ closeModal }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState(""); // [1, 2, 3, 4
  const [error, setError] = useState(null);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onBodyChanged = (e) => setBody(e.target.value);
  const onUserIdChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title.trim() !== "" && body.trim() !== "" && userId !== "") {
      dispatch(postAdded(title, body, userId));

      setTitle(""); //denne linje og dem under sætter staten tilbage til tom
      setBody("");
      setUserId("");
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
      <select id="users" value={userId} onChange={onUserIdChanged}>
        <option value="" disabled>
          Vælg en bruger
        </option>
        <option value="1">Emma Nielsen</option>
        <option value="2">Alexander Madsen</option>
        <option value="3">Lucas Pedersen</option>
        <option value="4">Isabella Andersen</option>
      </select>
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
