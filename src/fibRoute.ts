// Endpoint for querying the fibonacci numbers
import { Request, Response } from "express";
import fibonacci from "./fib";

export default (req: Request, res: Response) => {
  const { num } = req.params;

  const n = parseInt(num, 10);
  if (isNaN(n)) {
    return res.send(`Invalid input: ${num}`);
  }

  const fibN = fibonacci(n);
  let result = `fibonacci(${n}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${n}) is undefined`;
  }

  res.send(result);
};
