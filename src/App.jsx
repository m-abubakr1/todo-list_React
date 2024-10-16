import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import About from "./components/About";
function App() {
  return (
    <>
    <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />}>
          <Route exact path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
