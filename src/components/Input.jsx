import React, { useState } from "react";

function Input({todoItems, setTodoItems}){
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }

    const contentChangeHandler = (event) => {
        setContent(event.target.value)
    }

    const todoSubmitHandler = (event) =>{
        
        const newTodo ={
            id : todoItems.length +1,
            title,
            content,
            isDone : false
        }
        // event.preventDefault()
        setTodoItems(...todoItems,newTodo)
        alert("you just add new todo!")
    }

    return(
        <form className="input-form" onSubmit={todoSubmitHandler}>
            <section>제목 : <input type="text" value={title} required onChange={titleChangeHandler} /></section>
            <section>내용 : <input type="text" value={content} required onChange={contentChangeHandler} /></section>
            <section><input type="submit"/></section>
        </form>
    )
}

export default Input