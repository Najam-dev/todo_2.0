import React from 'react'
import Todo from './Todo'

function TodoList(props) {

    const {todos, setTodos} = props

    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {
                    todos.map(todo => (
                        <Todo setTodos={setTodos} todos={todos} todo = {todo} key = {todo.id} />
                    ))    
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodoList
