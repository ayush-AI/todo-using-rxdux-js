import { dummyActions, useGlobalState } from "../store/rxdxStore";
import { TodoItem } from "../types/Todo";
import Checkbox from "./Checkbox";

const TodoList = () => {
  const { todos } = useGlobalState("todos");

  return (
    <div className="flex mt-4 md:mt-8 justify-center h-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-4">Things to do:</h1>
        <div className="border-b border-black w-[120%] mb-4" />
        {todos.length ? (
          <div className="space-y-2">
            {todos.map((todoItem: TodoItem) => (
              <Checkbox
                key={todoItem.id}
                label={todoItem.label}
                checked={todoItem.checked}
                onClick={() => {
                  dummyActions.toggleTodo(todoItem.id);
                }}
                onDelete={() => {
                  dummyActions.deleteTodo(todoItem.id);
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-gray-500">
            Looks like you're absolutely free today!
          </div>
        )}
        <div className="border-b border-black w-[120%] my-4" />
      </div>
    </div>
  );
};

export default TodoList;
