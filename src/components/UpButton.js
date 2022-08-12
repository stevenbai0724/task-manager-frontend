import React from 'react'
import {ButtonBase} from "@mui/material"
import {makeStyles} from "@mui/styles"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import LockIcon from '@mui/icons-material/Lock';

const useStyles = makeStyles((theme) => ({
  button: {
    height: "100%",
    width: "100%",      
  },
  buttonDiv: {
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
    height: "20px"
  },
}))
function UpButton(props) {

  const classes = useStyles();


  return (
    <div className = {classes.buttonDiv}>
      <ButtonBase 
      
        onClick = {() => {
            props.handleUpButton(props.secs)
          }
        } 
        className = {classes.button}
      >
      {
        !props.isRunning && <ArrowDropUpIcon fontSize = "large" ></ArrowDropUpIcon>
      }
      {
        props.isRunning && <LockIcon fontSize = "small" />
      }
        
      </ButtonBase>
    </div>
  )
}

export default UpButton