import React, { Fragment } from 'react';
import Todo from './Todo';


const Todolist = ({ todos }) => {
   return (
     <Fragment>
         {todos.map(todo => <Todo key={todo.id} todo={todo} /> )}
     </Fragment>
    )
}


export default Todolist;


