import React, { useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'


function TodoList() {

    const [todos, setTodos] = useState([])
    
    const addTodo = todo => {
        
        // Validation : If a Text is Empty Return or a text contains Spaces or %$ things like this Return also ..
        if (!todo.text || /^\s*$/.test(todo.test)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(...todos)
    }

    const updateTodo = (todoId, newValue) => {

        // Validation : If a Text is Empty Return or a text contains Spaces or %$ things like this Return also ..
        if (!newValue.text || /^\s*$/.test(newValue.test)) {
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    const removeTodo = (id) => {
        const removedArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removedArr)
    }

    
    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo
        });
        setTodos(updateTodos)
    }

    return (
        <>
          <h1>What's the Plan for Today?</h1>
          <TodoForm onSubmit={addTodo} />
          <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        </>
    );
}

export default TodoList