import { useEffect, useState } from "react";
import "./App.css";
import { getTodos, type Todo } from "./test.ts";

function App() {
  const { todoList, setTodoList } = useState<Todo[]>();
  useEffect(() => {
    getTodos().then((data) => setTodoList(data));
  }, []);

  return (
    <>
      <TodoList todoList={[]} />
    </>
  );
}

type TodoListProps = { todoList: Todo[] };

function TodoList({ todoList }: TodoListProps) {
  return (
    <>
      {todoList.map((todo) => {
        <TodoItem {...todo} />;
      })}
    </>
  );
}

type TodoItemProps = Todo;
function TodoItem({ id, title, completed }: TodoItemProps) {
  return (
    <div>
      <div>{id}</div>
      <div>{title}</div>
      <div>{completed}</div>
    </div>
  );
}

export default App;
