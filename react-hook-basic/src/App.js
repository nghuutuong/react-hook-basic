import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import Nav from './view/Nav';
import Todo from './view/Todo';
import Covid from './view/Covid';
import {Countdown, NewCountDown} from './view/Countdown';
import Blog from './view/Blog';
import DetailBlog from './view/DetailBlog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {

  let [name, setName] = useState('abcxyz')
  const [address, setAddress] = useState('')
  const [todos, setTodos] = useState([
    {id:1, name: 'AAAAAAA', type:'1'},
    {id: 2, name: 'BBBBBBB', type: '2'},
    {id: 3, name: 'CCCCCC', type: '2'},
    {id: 4, name: 'DDDDDDD', type: '1'}
  ]);

  useEffect(() => {
    console.log('address ne')
  },[address])

  const handleClick = (event) => {
    if(!address){
      alert('nhap vao')
      return;
    }
    let newTodo = {id: Math.floor((Math.random()*1000) + 1), name: address}
    setTodos([...todos, newTodo])
    setAddress('')
  }
  const handleChange = (event) => {
    setAddress(event.target.value)
  }

  const hanleDeleteTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter(item => item.id !== id)
    setTodos(currentTodos)
   
  }

  const onTimeUp = () => {
    alert('het gio');
  }

  return (
    <Router>

          
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
         Hello {name}
        </p>

        <Switch>
          <Route path="/" exact>
            <Covid />
          </Route>

          <Route path="/timer">
            <Countdown onTimeUp={onTimeUp}/>
            <span>------------------</span>
            <NewCountDown onTimeUp={onTimeUp}/>
          </Route>

          <Route path="/todo">
            <input type="text" value={address} onChange={(event)=> handleChange(event)} />
            <button type='button' onClick= {(event)=> handleClick(event)}>Click me</button>
            <Todo
            todos={todos}
            title='todo list'
            deleteTodo = {hanleDeleteTodo}
            />
            <Todo
            todos={todos.filter(item => item.type === '2')}
            title= 'type 2'
            deleteTodo = {hanleDeleteTodo}
            />
          </Route>

          <Route path="/blog" exact>
            <Blog />
          </Route>

          <Route path="/blog/:id">
            <DetailBlog />
          </Route>

        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
