import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: Date.now(),
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todo) => {},
  toggleComplete: false,
});

export const TodoProvider = TodoContext.Provider;

export function useTodo() {
  return useContext(TodoContext);
}
