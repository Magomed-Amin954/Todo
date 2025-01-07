import axios from "axios";
import { useState, useEffect } from "react";

const png = "https://todo-server-taj0.onrender.com/todos";

type Props = {
  _id: string;
  title: string;
  completed: boolean;
  created_at: string;
  __v: number;
};

const TodoList: React.FC = () => {
  const [posts, setPosts] = useState<Props[]>([]);

  useEffect(() => {
    axios.get(png).then((data) => {
      setPosts(data.data);
    });
  });
  if (posts.length === 0) {
    return <div>У вас пока нет добавленных задач</div>;
  }

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.completed}</p>
            <p> {new Date(post.created_at).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
