import React from "react";
import Working from "./Working";
import Done from "./Done";

function TodoList({todoItems, title, content, setTodoItems}){

    const deleteButtonHandler = (id) => {
        const newTodoItems = todoItems.filter((item)=> item.id !== id)
        setTodoItems(newTodoItems)
    }

    const doneChangeHandler = (id) => {
        const changeIsDone = todoItems.map((item) => {
            if(item.id === id){
                return {...item,isDone:!item.isDone}
            }
            return item;
        });
        setTodoItems(changeIsDone);
        alert("good!")
    };

    return(
        <main>
            {todoItems.map((todoItems)=>{
                if(todoItems.isDone === false){
                    return <Working todoItems={todoItems} key={todoItems.id} title={title} content={content} handleDelete={deleteButtonHandler} handleDoneChange={doneChangeHandler}/>
                }else{
                    return null
                }
            })}

            {todoItems.map((todoItems)=>{
                if(todoItems.isDone === true){
                    return <Done todoItems={todoItems} key={todoItems.id} title={title} content={content} handleDelete={deleteButtonHandler} handleDoneChange={doneChangeHandler}/>
                }else{
                    return null
                }
            })}
        </main>
    )
}

export default TodoList