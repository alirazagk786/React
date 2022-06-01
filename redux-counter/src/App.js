import './App.css';
import {actions} from './store/index'
import { useSelector ,useDispatch} from 'react-redux';
import store from './store/index';

function App() {
  const counter=useSelector((state)=>state.counter)
  const dispatch=useDispatch()

  return (  
    <div className="App">
     <h1>Counter</h1>
     <h1>{counter}</h1>
     <button onClick ={()=> dispatch(actions.increment()) }>Add</button>
     <button onClick ={()=> store.dispatch(actions.decrement()) }>Decrement</button>
     <button onClick ={()=> store.dispatch(actions.addBy(10)) }>Add by 10</button>
     <button onClick ={()=> store.dispatch(actions.clear()) }>Clear</button>
    </div>                            

  );
}

export default App;
