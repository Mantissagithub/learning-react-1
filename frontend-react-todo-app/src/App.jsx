import React from 'react'
import './App.css'

var ctr = 0;
function App() {
  let [todos,setTodo] = React.useState({
    title:"complete the react part",
    description:"from harikirat's video",
    id:1
  });

  if(ctr===0){
    console.log("render");
    setTimeout(() => {
      setTodo({
      title:"complete the react part" + Math.floor(Math.random()*10),
      description:"from harikirat's video",
      id:2
      })
    },4000);
    ctr=1;
  }else{

  }

  return (
    <>
      <h5>Hi there</h5>
      <Todo Todo={todos}></Todo>
    </>
  )
}

function Todo(props){
  return <div>
    {props.Todo.title}
    <br />
    {props.Todo.description}
    <br />
    {props.Todo.id}
  </div>
}


export default App