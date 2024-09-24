import "./App.css";
import { type Todo } from "./test.ts";

function App() {
  return (
    <>
      <TodoList todoList={[]} />
    </>
  );
}

function TodoList({ todoList }: { todoList: Todo[] }) {
  return (
    <>
      {todoList.map((todo) => {
        <TodoItem {...todo} />;
      })}
    </>
  );
}

function TodoItem({ id, title, completed }: Todo) {
  return (
    <div>
      <div>{id}</div>
      <div>{title}</div>
      <div>{completed}</div>
    </div>
  );
}

export default App;
