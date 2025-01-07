import React from "react";
import png from "../../assets/plus.png";
import './AddTodo.scss'


const AddTodo = () => {
  return (
    <div>
      <div className="AddTodo">
        <input
          className="AddTodo-Imput"
          placeholder="Что вы планируете сделать?"
        />
        <button className="AddTodo-Button">
          Добавить
          <img className="AddTodo-Img" src={png} />
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
