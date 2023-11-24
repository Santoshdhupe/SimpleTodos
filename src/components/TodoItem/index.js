// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoList, deleteTodo} = props
  const {title, id} = todoList
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todoList">
      <p className="title">{title}</p>
      <button className="button" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
