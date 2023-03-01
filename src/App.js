import React, { useState } from "react";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: "할수있다 똥닦기!",
      content: "유투브에 검색",
      isDone: false,
      edit: false,
    },
    {
      id: 2,
      title: "리액트 뿌신다",
      content: "two thousand years later...",
      isDone: true,
      edit: false,
    },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleInputHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentInputHandler = (e) => {
    setContent(e.target.value);
  };

  const formSubmitHandler = (e) => {
    let newTodos = {};
    let maxId = todoItems[todoItems.length - 1];
    let num = maxId.id;
    let max_num = num + 1;
    todoItems.length === 0
      ? (newTodos = {
          id: 1,
          title,
          content,
          isDone: false,
          edit: false,
        })
      : (newTodos = {
          id: max_num,
          title,
          content,
          isDone: false,
          edit: false,
        });
    e.preventDefault();
    setTodoItems([...todoItems, newTodos]);
    alert("You just added NEW thing to do!");
    setTitle("");
    setContent("");
  };

  const deleteTodoHandler = (id) => {
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(newTodoItems);
    alert("Deleted!");
  };

  const doneChnageHandler = (id) => {
    const doneChanged = todoItems.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );

    setTodoItems(doneChanged);
    alert("Way to go!");
  };

  const [editForm, setEditForm] = useState([]);
  const getCurrentCard = (id, editForm) =>
    editForm.find((item) => item.id === id);

  const showEditInput = (target) => {
    setEditForm([...editForm, target]);
    const showEdit = todoItems.map((item) =>
      item.id === target.id ? { ...item, edit: !item.edit } : item
    );
    setTodoItems(showEdit);
  };
  const editTitleHandler = (e, target) => {
    const editedTitle = editForm.map((item) =>
      item.id === target.id ? { ...item, title: e.target.value } : item
    );
    setEditForm(editedTitle);
  };

  const editContentHandler = (e, target) => {
    const editedTitle = editForm.map((item) =>
      item.id === target.id ? { ...item, content: e.target.value } : item
    );
    setEditForm(editedTitle);
  };

  const saveChangeHandler = (id) => {
    const newTodos = todoItems.map((item) =>
      item.id === id
        ? {
            ...item,
            title: getCurrentCard(id, editForm).title,
            content: getCurrentCard(id, editForm).content,
            edit: !item.edit,
          }
        : item
    );

    setTodoItems(newTodos);
  };

  // const editTitleHandler = (e, target) => {
  //   editForm.map((item) =>
  //     item.id === target.id ? { ...item, title: e.target.value } : item
  //   );
  // };

  // const editContentHandler = (e, target) => {
  //   editForm.map((item) =>
  //     item.id === target.id ? { ...item, content: e.target.value } : item
  //   );
  // };

  // const showEditInput = (target) => {
  //   const showEdit = todoItems.map((item) =>
  //     item.id === target.id ? { ...item, edit: !item.edit } : item
  //   );
  //   const getCurrentCard = (target)

  //   setCurrentEditTitle(target.title);
  //   setCurrentEditContent(target.content);

  //   setTodoItems(showEdit);
  // };

  // const saveChangeHandler = (target) => {
  //   const todoId = target.id;
  //   const targetIndex = todoItems.findIndex((item) => item.id === todoId);
  //   const newTodos = [...todoItems];
  //   newTodos.splice(targetIndex, 1, {
  //     id: todoId,
  //     title: currentEditTitle,
  //     content: currentEditContent,
  //     isDone: target.isDone,
  //     edit: false,
  //   });

  //   setTodoItems(newTodos);
  // };

  return (
    <div className="web">
      <div className="app-style">
        <header>
          <h1>My Todolist</h1>
          <div></div>
          <h1>@1nxeo</h1>
        </header>
        <form className="input-form" onSubmit={formSubmitHandler}>
          <div>
            <label>Title : </label>
            <input type="text" value={title} onChange={titleInputHandler} />
          </div>
          <div>
            <label>Content : </label>
            <input type="text" value={content} onChange={contentInputHandler} />
          </div>
          <div>
            <input type="submit" value="submit" />
          </div>
        </form>
        <main>
          <section>
            <h1>Working</h1>
            {todoItems.map((item) =>
              item.isDone === false ? (
                item.edit ? (
                  <form
                    className="edit-box"
                    onSubmit={() => saveChangeHandler(item)}
                  >
                    <div>
                      <input
                        type="text"
                        value={getCurrentCard(item.id, editForm).title}
                        onChange={(e) => editTitleHandler(e, item)}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={getCurrentCard(item.id, editForm).content}
                        onChange={(e) => editContentHandler(e, item)}
                      />
                    </div>
                    <div>
                      <input
                        type="submit"
                        value="save changes"
                        onClick={() => saveChangeHandler(item.id)}
                      />
                    </div>
                  </form>
                ) : (
                  <div className="list-box">
                    <h3>{item.title}</h3>
                    <div>{item.content}</div>
                    <div>
                      <button onClick={() => deleteTodoHandler(item.id)}>
                        delete
                      </button>
                      <button onClick={() => doneChnageHandler(item.id)}>
                        finish
                      </button>
                      <button onClick={() => showEditInput(item)}>edit</button>
                    </div>
                  </div>
                )
              ) : null
            )}
          </section>
          <section>
            <h1>Done</h1>
            {todoItems.map((item) =>
              item.isDone === true ? (
                item.edit ? (
                  <form
                    className="edit-box"
                    onSubmit={() => saveChangeHandler(item)}
                  >
                    <div>
                      <input
                        type="text"
                        value={getCurrentCard(item.id, editForm).title}
                        onChange={(e) => editTitleHandler(e, item)}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={getCurrentCard(item.id, editForm).content}
                        onChange={(e) => editContentHandler(e, item)}
                      />
                    </div>
                    <div>
                      <input
                        type="submit"
                        value="save changes"
                        onClick={() => saveChangeHandler(item.id)}
                      />
                    </div>
                  </form>
                ) : (
                  <div className="list-box">
                    <h3>{item.title}</h3>
                    <div>{item.content}</div>
                    <div>
                      <button onClick={() => deleteTodoHandler(item.id)}>
                        delete
                      </button>
                      <button onClick={() => doneChnageHandler(item.id)}>
                        finish
                      </button>
                      <button onClick={() => showEditInput(item)}>edit</button>
                    </div>
                  </div>
                )
              ) : null
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
