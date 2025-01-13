const BASE_URL = "https://todo-server-taj0.onrender.com";

const getTodosUrl = () => `${BASE_URL}/todos`;
const addTodoUrl = () => `${BASE_URL}/todos`;
const changeTodoUrl = (todoid: string) => `${BASE_URL}/todos/${todoid}`;
const deleteTodoUrl = (todoid: string) => `${BASE_URL}/todos/${todoid}`;

export { BASE_URL, addTodoUrl, changeTodoUrl, deleteTodoUrl, getTodosUrl };
