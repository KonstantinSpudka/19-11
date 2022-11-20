// Рекурсія

// n! = 1*2*3...n;

// 5! = (1*2*3*4*5) = 4!*5
// 4! = 3! * 4
// 3! = 2! * 3
// 2! = 1! * 2
// 1! = 0! * 1

function fact(n) {
  if (n === 0) return 1;
  return n * fact(n - 1);
}

fact(2);
// fact(2): 2 * fact(1) = 2
// fact(1): 1 * fact(0) = 1
// fact(0): 1
