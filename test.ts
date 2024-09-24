let varible: number = 1;

function add(a: number, b: number): number {
  return a + b;
}

function add2({ a, b }: { a: number; b: number }): number {
  return a + b;
}

add2({ a: 1, b: 2 });
