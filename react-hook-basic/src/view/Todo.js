const Todo = (props) => {
    // const todos = props.todos;
    const {todos, title, deleteTodo} = props;

    const handleDeleteTodo = (id) => {
        deleteTodo(id);
    }
    return(
      
        <div className="todos-container">
        <hr />    
        <div className="title">
            {title}
        </div>
          {todos.map(todo => {
            return (
                <div key={todo.id}>
                    <li className="todo-child" > {todo.name} <span onClick = {()=> handleDeleteTodo(todo.id)}>X</span></li>
                    
                </div>
            )
          })}
        </div>
       
    )
}
export default Todo;