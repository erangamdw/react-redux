
import './App.css';
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const store = useSelector((store:any) => store);
  const dispatch = useDispatch();
  return (
    
      <div className="App">
        <h1>Hello world {store.name}</h1>
        <h1>Hello world {store.age}</h1>
        <div>
          <button onClick={()=> dispatch({type: "increment", payload: 1})}>Increment</button>
          <button onClick={()=> dispatch({type: "decrement", payload: 1})}>Decrement</button>
        </div>
      </div>
  );
}

export default App;