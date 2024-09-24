import { useEffect, useState } from "react";
import "./App.css";
import { getTodos, type Todo } from "./test.ts";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  useEffect(() => {
    getTodos().then((data) => setTodoList(data));
  }, []);

  const [title, setTitle] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAddTodo = () => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    fetch("http://localhost:4000/posts");
  };

  return (
    <>
      <TodoList todoList={todoList} />
      <input type="text" value={title} onChange={handleTitleChange} />
      <button>등록</button>
    </>
  );
}

type TodoListProps = { todoList: Todo[] };

function TodoList({ todoList }: TodoListProps) {
  return (
    <>
      {todoList.map((todo) => {
        <TodoItem key={todo.id} {...todo} />;
      })}
    </>
  );
}

type TodoItemProps = Todo;
function TodoItem({ id, title, completed }: TodoItemProps) {
  return (
    <div>
      <div>id: {id}</div>
      <div>title: {title}</div>
      <div>completed: {`${completed}`}</div>
    </div>
  );
}

export default App;
