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
  return <></>;
}

function TodoItem() {}

export default App;
