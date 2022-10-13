import React from 'react';
import okLogo from '../../assets/ok.png';
import deleteLogo from '../../assets/delete.png';
import { useDispatch } from 'react-redux';
import { deleteTodo,toggleTodo } from '../../counter/todoSlice';


const TodoItem = ({ completed, text, id }) => {
  console.log(id, text)
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(toggleTodo(id))
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id))
  };

  const isDone = {
    textDecoration: completed ? 'line-through' : 'none',
    backgroundColor: completed ? 'grey' : 'orange',
    borderRadius: '5px',
  };

  return (
    <div style={isDone} className="todo-list">
      <h2 className="todoText">{text}</h2>
      <div>
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"
            onClick={handleToggle}
            
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
            onClick={handleDelete}
            />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
