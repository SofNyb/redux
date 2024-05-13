import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "./todoSlice.js";
// import { complex } from "framer-motion";

// En state argument vil blive passed til denne metode og vil returnere state
const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

//Denne funktion tager dispatch som en argument og dipatches en action til reduceren
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const add = () => {
    if (todo === "") {
      alert("Input cant be empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="addTodos">
      <input
        type="text"
        value={todo}
        onChange={(e) => handleChange(e)}
        className="todo-input"
      />
      <button className="add-btn" onClick={() => add()}>
        Add to list
      </button>
      <br />
      <ul>
        {props.todos.length > 0 &&
          props.todos.map((item) => {
            return <li key={item.id}>{item.item}</li>;
          })}
      </ul>
    </div>
  );
};

//connecter metoden til compomnnterne med redux
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
