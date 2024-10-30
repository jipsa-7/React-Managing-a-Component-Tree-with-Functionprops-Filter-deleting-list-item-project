import React from "react";
function ToDoItem(props) {
  // onchecked function for deleting the clicked item will be activated when we specify onchecked like the code below ie a function with a parameter inside a paranthesis while rendering li.
  //a function with a parameter inside the parathesis is calling a function rather than passing a function.
  //so we need to specify the onchecked in another function and that function will only get called when the onclick get triggered.

  // return <li onClick={props.onchecked(props.id)}>{props.text}</li>;
  return (
    <li
      onClick={() => {
        props.onchecked(props.id);
      }}
    >
      {props.text}
    </li>
  );
}
export default ToDoItem;
