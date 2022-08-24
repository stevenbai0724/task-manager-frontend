import React from 'react'
import {useEffect, useState, useRef} from 'react'
import {makeStyles} from "@mui/styles"
import {Button, ButtonBase} from "@mui/material"
import { Modal } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    color: "white",
  },
  modal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#1c1727",
    width: "450px",
    minHeight: "250px",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingBottom: "10px",
    maxWidth: "80vw",
    textAlign: "center",
    overflowY: "auto",
    maxHeight: "calc(100vh - 200px)",
    borderRadius: "20px",
    '&::-webkit-scrollbar' :{
        width: '4px',

      },
      '&::-webkit-scrollbar-thumb' :{
        backgroundColor: "#333333",
        borderRadius: "7px",
    
      },
      '&::-webkit-scrollbar-track' :{
        borderRadius: "4px",
        display: "none",
      },
  },
  input: {
    paddingTop: "5px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 10px 0px",
    maxWidth: "95%",
    minWidth: "95%",
    minHeight: "100px",
    fontSize: "15pt",
    border: "none",
    paddingLeft: "5px",
    paddingRight: "5px",
    color: "white",
    backgroundColor: "#201d2b",
    borderRadius: "5px",
    fontFamily: "sans-serif",
    marginTop: "10px",
    display: "block",
    marginBottom: "50px",
    outline: "none",
    
    '&::-webkit-scrollbar' :{
      width: '4px',

    },
    '&::-webkit-scrollbar-thumb' :{
      backgroundColor: "#333333",
      borderRadius: "7px",
  
    },
    '&::-webkit-scrollbar-track' :{
      borderRadius: "4px",
      display: "none",
    },
  },
  button: {

    height: "40px",
    display: "inline-block"
  },
  buttonText: {
    fontSize: "12pt",
    fontWeight: "normal"
  },
  radioGroup: {
    color: "white",
    marginBottom: "20px"
  },

}))

function Task(props) {
  const classes = useStyles();
  const [val, setVal] = useState("");
  const [priority, setPriority] = useState(1);
  const [obj, setObj] = useState({
    task: "(empty task)",
    priority: 1,
    complete: false,
  });

  const handleOnChange = (e) => {
    setVal(e.target.value);
    let temp = {task: e.target.value}
    setObj(obj => ({
      ...obj,
      ...temp
    }))
  }
  //after add task, clear the task to (empty task) but keep the last priority setting the same
  const pressed = () => {
    props.append(obj);
    setVal("")
    let temp = {task: "(empty task)"}
    setObj(obj => ({
      ...obj,
      ...temp,
    }));
  }
  const onChange = (evt) => {
    setPriority(parseInt(evt.target.value));
    let temp = {priority: parseInt(evt.target.value)}
    setObj(obj => ({
      ...obj,
      ...temp
    }))
  }
  //debug
  const isMounted = useRef(false);
  useEffect(() => {
    if(isMounted.current){
      console.log(obj)
    }
    else isMounted.current = true;
  }, [priority])

  return (
    <div className = {classes.container}>
      <Modal  
        open = {props.open}
        onClose = {props.handleTaskClose}
      >
        <div className= {classes.modal}>
          
          <textarea 
          
            type = "text"
            className = {classes.input}
            placeholder = "enter a new task..."
            onChange = {handleOnChange}
            value = {val}
          /> 
          <h1 style = {{fontSize: "15pt"}}>Select task priority: </h1>
          <RadioGroup
            className={classes.radioGroup}
            row
            value = {priority}
            onChange = {onChange}
          >
            <FormControlLabel value={1} control= {<Radio 
              sx={{
              color: "white",
              "&.Mui-checked": {
                color: "#37f992"
              }
            }} />} label="Low" />

            <FormControlLabel value={2} control={<Radio 
             sx={{
              color: "white",
              "&.Mui-checked": {
                color: "#f2a53f"
              }
            }}/>} label="Medium" />

            <FormControlLabel value={3} control={<Radio  
              sx={{
              color: "white",
              "&.Mui-checked": {
                color: "#e62a19"
              }
            }}/>} label="High" />

          </RadioGroup>


          <br></br>
          <div style = {{position: "absolute", bottom: "10px", width: "95%", textAlign: "center"}}>
          <Button className = {classes.button} onClick = {pressed}>
            <h1 className = {classes.buttonText}>Add Task</h1>
          </Button>
          <Button  className = {classes.button} onClick = {props.handleTaskClose}>
            <h1 className = {classes.buttonText}>Done</h1>
          </Button>
          </div>
        
        </div>

        


      </Modal>

    </div>

    
  )
}

export default Task