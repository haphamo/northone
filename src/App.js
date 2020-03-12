import React from 'react';
import Body from './components/body'
import { makeStyles } from "@material-ui/core/styles";
import NewTask from './components/newtaskform'
import './App.css';

const useStyles = makeStyles( ()=> ({
  headerStyling: {
    display: 'flex',
    height: '8rem',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3em',
    backgroundColor: '#c28285'
    },
  body: {
    display: 'flex',
    flexDirection: 'row',
   
  }

}));



// All tasks data
let allTasks = [
  {taskId: 1,
    title: "Do Laundry",
    desc: "Wash and dry clothes",
    status: "pending",
  },
]


const newTask = function(task, desc, status) {
  allTasks = [...allTasks, {taskId: 2, title: task, 'desc': desc, 'status': status}]
  console.log(task, desc, status)
  console.log(allTasks)
}
console.log('allTasks', allTasks)

function App() {
  const classes = useStyles()
  return (
    <div >
      <header className={classes.headerStyling}>To Do List</header>
      <div className={classes.body}>
        <NewTask newTask={newTask}/>
        <NewTask newTask={newTask}/>

      </div>

    </div>
  );
}

export default App;
