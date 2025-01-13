import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getTodos } from "../../store/reducers/post/todoAction";
import TodoItem from "./component/TodoItem/TodoItem";
import "./TodoList.scss";

const TodoList = () => {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.todos);

  const completedAmount = todos.reduce((acc, curr) => {
    if (curr.completed === true) {
      return acc + 1;
    }
    return acc;
  }, 0);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  if (todos.length === 0) {
    return <div className="TodoList-map">У вас пока нет добавленных задач</div>;
  }
  return (
    <div className="TodoList">
      <div className="TodoList-caunter">
        <div className="TodoList-Total__Tasks">
          Всего задач{" "}
          <div className="TodoList-Total__Tasks-1">{todos.length}</div>
        </div>
        <div className="TodoList-Solved">
          Выполнено{" "}
          <div className="TodoList-Solved__1">{completedAmount} из {todos.length}</div>
        </div>
      </div>
      {todos.map((todo) => (
        <TodoItem {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
