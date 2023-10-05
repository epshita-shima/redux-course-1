import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSclice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
function App() {
  const {count}=useAppSelector((state)=>state.counter);
  const dispatch= useAppDispatch()
  return (
    <div className="w-96 h-96 mx-auto mt-12">
      <div className="flex justify-between ">
        <button className="border border-green-400 p-2" onClick={()=>dispatch(increment())}>Increment</button>
        <button className="border border-green-400 p-2" onClick={()=>dispatch(incrementByAmount(5))}>Increment by value</button>
        <div>{count}</div>
        <button className="border border-red-400 p-2" onClick={()=>dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
