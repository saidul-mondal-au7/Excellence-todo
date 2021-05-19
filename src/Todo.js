import React, { Fragment } from 'react';


const Todo = ( { todo } ) => {

    return (
        <Fragment>
        {" "}
        <table className="table mt-1 text-center">
          <tbody>
                <td> Need to complete - {todo.name}</td>
          </tbody>
        </table>
      </Fragment>
    )
}

export default Todo;