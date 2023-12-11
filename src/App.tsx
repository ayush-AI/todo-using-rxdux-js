import TodoCount from "./components/TodoCount";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <>
      <TodoList />
      <TodoCount />
      <TodoForm />
    </>
  );
};

export default App;
