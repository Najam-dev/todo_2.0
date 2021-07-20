import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([])

  //useEffect once
  useEffect(() => {
    getLocalTodos();
  }, [])

  //useEffect again 
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  //filtered todos handler
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      case "all":
        setFilteredTodos(todos)
        break;
    }
  }

  //saving it in localstorage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  //getting data from localstorage
  const getLocalTodos = () => {
    if(localStorage.getItem ("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let localTodo = JSON.parse(localStorage.getItem("todos"))
      setTodos(localTodo)
    }
  }
  

  return (
    <div className="App">
      <Header />
      <Form
       todos={todos}
       inputText={inputText}
       setTodos={setTodos}
       setInputText={setInputText} 
       setStatus={setStatus}
      />
      <TodoList 
       todos={filteredTodos}
       setTodos={setTodos}
      />
    </div>
  );
}

export default App;


//hey 
// mostly done with the implementaions of the getting todo till rendering it on ui
//saving it in state etc...
// done completing and deleting
//  ---working---
// now filtering according to status
// finally !! 
// save it in the localstorage