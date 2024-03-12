// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails} = props
  const {id, title} = todoDetails

  const onDelete = () => {
    deleteUser(id)
    console.log('clicked')
  }
  return (
    <li className="todo">
      <p className="name">{title}</p>
      <button type="submit" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
