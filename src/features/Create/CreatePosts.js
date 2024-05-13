import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "./postSlice.js";

function CreatePosts() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !body) return;

    dispatch(createPost({ title, body }));

    // tømmer inputfelterne efter submit er trykket
    setTitle("");
    setBody("");
  }

  function closeModal() {
    // SKAL IMPLEMENTERES
  }

  return (
    <div>
      <h2>Tilføj ny post</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div>
            <label>Title</label>
            <input
              type="text"
              placeholder="Skriv en titel her..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Body</label>
            <textarea
              placeholder="Skriv indholdet af din post her..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Add</button>
          <button type="button" onClick={closeModal}>
            Annuller
          </button>
        </div>
      </form>

      {/*<div className="inputs">
        <div>
          <label>Skriv din titel her...</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Skriv indholdet af din post her</label>
          <input value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button onClick={handleClick}>Tilføj</button>
        <br />
        {error && <p>{error}</p>}
      </div>*/}
    </div>
  );
}

export default CreatePosts;
