import styles from "../App.module.css"
import { useState } from "react"

function ToDoList() {
  const [list, setList] = useState("");
  const [listItem, setListItem] = useState([]);
  const onChange = (event) => setList(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    setListItem((currentArray) => [list, ...currentArray])
    setList("")
  }
  return (
    <div className={styles.todolistWrap}>
      <h4 className={styles.todolistTitle}>To Do List</h4>
      <form onSubmit={onSubmit}>
        <input 
        type="text"
        className={styles.todolistInput}
        placeholder="Type your to-do-list"
        value={list}
        onChange={onChange}
        />
        <button className={styles.todolistBtn}><i className="xi-plus"></i></button>
      </form>
      <ul className={styles.todolistItems}>
        {listItem.map((item, index) => 
          <li key={index}><input type="checkbox" name="todolistChk" id={`todolistChk${index}`} /><label htmlFor={`todolistChk${index}`}>{item}</label></li>
        )}
        </ul>
    </div>
  );
}

export default ToDoList;