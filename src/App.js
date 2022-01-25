import './App.scss';
import {useState} from 'react'

function App() {
  const [inpt, setInpt] = useState('') 
  const [todos,setTodos] = useState([])

  const inputHandle = (e) => {
    setInpt(e.target.value)
  }
  
  const btnHandle = () => { 
    if(inpt == ''){
      alert('Input is Empty!')
    }
    else if(todos.find(todo => todo.todoName.toLowerCase() == inpt.toLowerCase())){
      alert('This task is already have!')
    }
    else{
      const newTodoName = {
        todoName: inpt
      }
      setTodos([...todos,newTodoName])
      setInpt('') 
    }
  }
  const deleteHandle = (todoKey) => {
    setTodos(todos.filter((todo,key)=> key != todoKey))
  }


  return (
   <div className='container'>
     <div className='searchSection'>
        <div className='search'>            
         <form onSubmit={(e) => e.preventDefault()}>
         <input value={inpt} onChange={inputHandle} placeholder='Search here..'></input>
          <button onClick={btnHandle}>Add</button>
         </form>
          </div>
     </div>
     <div className='taskSection'> 
          <ul>
            {todos.map((todo,key) =>(
              <li key = {key}>{todo.todoName} 
              <button className='btnDelete' onClick={() => deleteHandle(key)}>Delete</button>
              </li>
            ))
            }
          </ul>
        </div>
   </div>
  );
}

export default App;
