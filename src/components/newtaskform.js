import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import DatePicker from "./calendar";

let allTasks = [
  {taskId: 1,
    title: "Do Laundry",
    desc: "Wash and dry clothes",
    status: "not completed",
  },
]


console.log('allTasks', allTasks)

const useStyles = makeStyles( ()=> ({
  innerForm: {
    display: "flex",
    flexDirection: "column"
  }
}));



export default function NewTaskForm(props) {
  const classes = useStyles()
  const [status, setStatus] = useState("pending");
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");

  const newTask = function(task, desc, status) {
    allTasks = [...allTasks, {taskId: 2, title: task, 'desc': desc, 'status': status}]
    console.log(task, desc, status)
    console.log(allTasks)
  }

  const submitNewTask = evt => {
    
    evt.preventDefault()
    
    newTask(task, desc, status)
    
    setTask("")
    setDesc("")
  }

  const handleTaskChange = event => {
    setTask(event.target.value)
  };
  const handleDescChange = event => {
    setDesc(event.target.value)
  };
  
  const handleStatusChange = event => {
    setStatus(event.target.value)
  };

  return (
    <form onSubmit={submitNewTask}>
    <h1>Create New Task</h1>
      <div className={classes.innerForm} >
        <TextField
          required
          name="Task"
          id="task"
          label="Task"
          margin="normal"
          value={task}
          onChange={handleTaskChange}
        />
        <TextField
          required
          name="Description"
          id="desc"
          label="Description"
          margin="normal"
          value={desc}
          onChange={handleDescChange}
        />
        {/* <DatePicker /> */}
        <FormControl component="fieldset">
          <FormLabel component="legend"></FormLabel>
          <RadioGroup
            aria-label="position"
            name="status pending completed"
            value={status}
            onChange={handleStatusChange}
            row
            required
          >
            <FormControlLabel
              value="pending"
              name="status pending completed"
              control={<Radio color="primary" />}
              label="Pending"
              labelPlacement="bottom"
              
            />
            <FormControlLabel
            name="status pending completed"
              value="completed"
              control={<Radio color="primary" />}
              label="Completed"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </FormControl>
        <button type="submit">Create New Task</button>
      </div>
    </form>
  );
}
