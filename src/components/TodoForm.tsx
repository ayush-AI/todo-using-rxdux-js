import { dummyActions, useGlobalState } from "../store/rxdxStore";

const TodoForm: React.FC = () => {
  const { todos } = useGlobalState("todos");

  const onAddClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const input = document.getElementById("todo-input") as HTMLInputElement;
    if (input.value) {
      dummyActions.addTodo({
        id: todos.length + 1,
        label: input.value,
        checked: false,
      });
      input.value = "";
    }
  };
  return (
    <form className="flex flex-col md:flex-row justify-center items-center">
      <input
        type="text"
        id="todo-input"
        className="mb-2 md:mb-0 md:mr-2 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full md:w-80"
        placeholder="Enter New Task"
        required
      />
      <button
        type="submit"
        onClick={onAddClick}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Add Tasks
      </button>
    </form>
  );
};

export default TodoForm;
