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

  const handleAddTodo = async () => {
    if (title === "") {
      return;
    }

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    await fetch("http://localhost:4000/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
    });
    setTodoList((prev) => [...prev, newTodo]);
    setTitle("");
  };

  return (
    <>
      <TodoList todoList={todoList} />
      <input type="text" value={title} onChange={handleTitleChange} />
      <button onClick={handleAddTodo}>등록</button>
    </>
  );
}

type TodoListProps = { todoList: Todo[] };

function TodoList({ todoList }: TodoListProps) {
  return (
    <div>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}

type TodoItemProps = Todo;
function TodoItem({ id, title, completed }: TodoItemProps) {
  return (
    <>
      <div>
        <div>id: {id}</div>
        <div>title: {title}</div>
        <div>completed: {`${completed}`}</div>
        <button>삭제</button>
      </div>
      ---
    </>
  );
}

export default App;
