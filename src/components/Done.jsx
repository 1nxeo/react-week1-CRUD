import React from "react";

function Done(props){
    return(
        <section className="todolist done">
            <h1>Done 🎵</h1>
            <div className="list-box">
                <h3>{props.todoItems.title}</h3>
                <div>{props.todoItems.content}</div>
                <div>
                    <button onClick={()=>props.handleDelete(props.todoItems.id)}>삭제</button>
                    <button onClick={()=>props.handleDoneChange(props.todoItems.id)}>취소</button>
                </div>
            </div>
        </section>
    )
}


export default Done