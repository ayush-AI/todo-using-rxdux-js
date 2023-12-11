import Checkbox from "./Checkbox";

const TodoList = () => {
  const todosTemplate = [
    {
      id: 0,
      label: "Fix an ability to display all tasks",
      checked: false,
    },
    {
      id: 1,
      label: "Fix a layout, checkboxes should be listed in a column",
      checked: false,
    },
    {
      id: 2,
      label: "Fix an ability to add a new task",
      checked: false,
    },
    {
      id: 3,
      label: "Fix an ability to toggle a task",
      checked: false,
    },
    {
      id: 4,
      label: "Fix an ability to delete a task",
      checked: false,
    },
    {
      id: 5,
      label: "Fix an ability to count completed tasks",
      checked: false,
    },
  ];
  // Your array of todos here

  return (
    <div className="flex mt-4 md:mt-8 justify-center h-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-4">Things to do:</h1>
        <div className="border-b border-black w-[120%] mb-4" />
        {todosTemplate.length ? (
          <div className="space-y-2">
            {todosTemplate.map((todoItem) => (
              <Checkbox
                key={todoItem.id}
                label={todoItem.label}
                checked={todoItem.checked}
                onClick={() => {}}
                onKeyUp={() => {}}
                onDelete={() => {}}
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
