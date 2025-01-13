import { ITodo } from "../../../../types/ITodos";
import DeleteTodo from "../../../DeleteTodo/DeleteTodo";
import "./TodoItem.scss";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { deleteTodo } from "../../../../store/reducers/post/todoAction";

const TodoItem = ({ title, _id }: ITodo) => {
  const dispatch = useAppDispatch();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo({ _id }));
  };

  return (
    <div className="TodoItem">
      <div className="TodoItem_His">
        {title}
        <DeleteTodo handleDeleteTodo={handleDeleteTodo} />
      </div>
    </div>
  );
};

export default TodoItem;
