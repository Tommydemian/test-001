import { Route, Routes } from "react-router-dom";
import { TodoListPage } from "./pages/TodoListPage";
import { TodoListDetails } from "./pages/TodoListDetails";
import { AboutPage } from "./pages/AboutPage";
import { Navigation } from "./components/Navigation";
import { navLinks } from "./data";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <Navigation navLinks={navLinks} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/todos" element={<TodoListPage />} />
        <Route path="/todos/:todoId" element={<TodoListDetails />} />
      </Routes>
    </>
  );
}

export default App;
