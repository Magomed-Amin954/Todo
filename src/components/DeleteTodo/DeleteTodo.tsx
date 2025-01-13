import png from "../../assets/trash.png";
import "./DeleteTodo.scss";

type DeleteTodoProps = {
  handleDeleteTodo: () => void;
};

const DeleteTodo = ({ handleDeleteTodo }: DeleteTodoProps) => {
  return (
    <button className="DeleteTodo" onClick={handleDeleteTodo}>
      <img className="DeleteTodo-img" src={png} alt="delete" />
    </button>
  );
};

export default DeleteTodo;
