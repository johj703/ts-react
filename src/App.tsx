import "./App.css";
import { type Todo } from "./test.ts";

function App() {
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
