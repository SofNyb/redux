import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAdded, selectAllUsers } from "./usersSlice";

const AddUsers = ({ closeModal }) => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const onNameChanged = (e) => setName(e.target.value);

  const onSaveUserClicked = () => {
    if (name.trim() !== "") {
      dispatch(userAdded(name, users));
      setName("");
      setError(null);
      closeModal();
    } else {
      setError("Navn skal udfyldes.");
    }
  };

  return (
    <form>
      <input
        placeholder="Skriv dit navn her..."
        type="text"
        id="userId"
        name="userName"
        value={name}
        onChange={onNameChanged}
      />
      <br />
      <br />
      <button className="add" type="button" onClick={onSaveUserClicked}>
        Opret bruger
      </button>

      <button type="button" onClick={closeModal}>
        Annuller
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default AddUsers;
