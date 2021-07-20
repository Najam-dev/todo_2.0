import React from 'react';
import { v4 as uuid } from 'uuid';


function Form(props) {

    const {setInputText, setTodos, todos, inputText, setStatus} = props

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const setTodosHandler = (e) => {
        e.preventDefault();
        if (!inputText.match(/^\s*$/)){
            setTodos([
                 ...todos, {todo : inputText, completed : false, id : uuid()}
             ]);
        } 
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

  
    return (
        <div>
            <form>
                <input value={inputText} onChange={inputTextHandler} autoFocus type="text" className="todo-input" />
                <button onClick={setTodosHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div onChange={statusHandler} className="select">
                    <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form
