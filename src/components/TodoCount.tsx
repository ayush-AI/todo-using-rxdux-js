import { useGlobalState } from "./rxduxStore";

const TodoCount = () => {
  const { todos } = useGlobalState("todos");
  return (
    <div className="flex justify-center">
      <h2 className="text-2xl font-semibold mb-4">
        {`Total Todos: ${todos.length}`}
      </h2>
    </div>
  );
};

export default TodoCount;
