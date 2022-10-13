import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { resetTodo,deleteTodo } from '../../counter/todoSlice';


const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todo.todos)
  console.log('id yeri',todoList)
  // const todoList = useSelector((state) => state.todoRed.todoList);

  const handleClear = () =>{
    dispatch(resetTodo())
  }
 

  return (
    <div>
      <div>
        {todoList?.map((todo) => (
            <TodoItem key={todo.id} {...todo}/>
          // <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed}/>
        ))}
      </div>
      <div className="clear-wrapper">
        <button className="clear-button"
        onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;