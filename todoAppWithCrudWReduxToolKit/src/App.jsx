import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
function App() {

  return (
    <div className="bg-gray-800  border w-1/2 m-auto mt-7 border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-md">
      <h1 className="mt-4 text-2xl font-bold mb-4 text-center">Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App
