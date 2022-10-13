import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement, reset } from "../../counter/counterSlice";


const Counter = () => {
 
  const dispatch = useDispatch()
  const {value} = useSelector(state => state.counter)
  console.log(value)
  // const dispatch = useDispatch();
  // // const counter = useSelector((state) => state.counter);
  // const counter = useSelector((state) => state.counterRed.counter);
  return (
    <div className="container">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{value}</h1>
      <div>
        <button
          className="counter-button positive"
          onClick={()=> dispatch(increment())}
          >   
          increase
        </button>
        <button
          className="counter-button zero"
          onClick={()=> dispatch(reset())}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          onClick={()=> dispatch(decrement())}        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
