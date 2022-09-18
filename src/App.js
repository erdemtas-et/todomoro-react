import React, { useState, useEffect } from "react";
import ModalButton from "./components/ModalButton";
import Modal from "./components/Modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoList from "./components/TodoList";

//get data from localStorage

function getLocalData() {
  let localData = localStorage.getItem("todos");
  return localData ? JSON.parse(localData) : [];
}

function App() {
  const [modalStatus, setModalStatus] = useState(false);
  const [todos, setTodos] = useState(getLocalData);

  const toggleModal = () => {
    setModalStatus((prevValue) => !prevValue);
  };

  const closeModal = () => {
    setModalStatus(false);
  };

  function handleDelete(id) {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updatedTodos);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  return (
    <div className="App">
      <h1>Todomoro React</h1>
      <ToastContainer></ToastContainer>
      <div className="modal-button-container">
        <ModalButton toggleModal={toggleModal}></ModalButton>
      </div>
      {!todos.length > 0 && <h2 className="todo-count">You have no todos.</h2>}
      <TodoList handleDelete={handleDelete} todos={todos}></TodoList>
      {modalStatus && (
        <Modal
          toggleModal={closeModal}
          setFormsData={setTodos}
          formsData={todos}
        ></Modal>
      )}
    </div>
  );
}

export default App;
