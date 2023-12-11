import { easyStateManager } from "rxdux-state-manager";

export const {
  useStateManager: useGlobalState,
  $state: $globalState,
  updateState: updateGlobalState,
} = easyStateManager({
  todos: [
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
  ]
});

export const dummyActions = {
  addTodo: (todo: { id: number; label: string; checked: boolean; }) => {
    updateGlobalState((draft) => {
      draft.todos.push(todo);
    });
  },
    toggleTodo: (id: number) => {
        updateGlobalState((draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        if (todo) {
            todo.checked = !todo.checked;
        }
        });
    },
};