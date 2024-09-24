export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export type Paginate = {
  first: number;
  item: number;
  last: number;
  next: number | null;
  pages: number;
  prev: number | null;
};

export async function getTodos() {
  const res = await fetch("http://localhost:4000/todos");
  const data: Todo[] = await res.json();

  return data;
}
