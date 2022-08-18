import './App.css';
import {useState, useEffect, useRef, React} from 'react'
import {makeStyles} from "@mui/styles"
import AddBoxIcon from '@mui/icons-material/AddBox';
import { ButtonBase, Icon, IconButton} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import Timer from "./components/Timer.js"
import TimerIcon from '@mui/icons-material/Timer';
import ringer from "./assets/nokia.mp3"
import Task from "./components/Task.js"
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Card from "./components/Card.js"
import Notes from "./components/Notes.js"

const useStyles = makeStyles((theme) => ({
  div: {

    justifyContent: "center",
    display: "flex",
    backgroundColor: "#1c1727",
    minHeight: "100vh",

  },
  container: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "space-between",
    width: "1100px",

  },
  left:{ 
    width: "600px",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "left",
  },
  right: {
    width: "400px",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "left",
    
  },
  topbar: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "620px",
  },
  input: {
    
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 10px 0px",
    width : "500px",
    height: "40px",
    fontSize: "15pt",
    border: "none",
    paddingLeft: "5px",
    paddingRight: "5px",
    color: "white",
    backgroundColor: "#201d2b",
    borderRadius: "5px",

    '&:focus' : {
      outline: "2px solid #357edd"
    }
  },
  card: {
    width : "calc(100% - 20px)",
    paddingLeft: "10px", 
    paddingRight: "10px",
    minHeight: "150px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "24pt",
    color: "white",
    marginBottom: "10px",
    marginTop: "10px",
    boxShadow: "rgba(100, 100, 111, 0.2) 1px 4px 5px 2px",
    borderRadius: "20px",
  },
  textBox: {
    wordWrap: "break-word",
    maxWidth: "500px",
    height: "calc(100% - 40px)",
    padding: "20px",
  },
  icon: {
      fontSize: "small",
  },
  iconButton: {
      width: "50px",
      height: "50px",
  },
  button: {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 10px 0px",
    width: "100%",
    height: "150px",
    marginBottom: "10px",
  },
  h1: {
    color: "white",
    fontSize: "18pt",

  },
  h2: {
    color: "white",
    fontSize: "15pt",
  },
  taskSubtitle: {
    height: "50px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  }

}))
function App() {

  const [tasks, setTasks] = useState([]);
  const [click, setClick] = useState(1);
  const isMounted = useRef(false);
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [isTaskOpen, setIsTaskOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [song, setSong] = useState(new Audio(ringer))

  const classes = useStyles();

  //gets existing items from local storage on render (once)
  useEffect(() =>{
    
    const temp = JSON.parse(localStorage.getItem('tasks'));
    if(temp){
      setTasks(temp)
    }

  }, [])

  //updates local storage on click
  useEffect(() => {
    if(isMounted.current){
    
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    else{
      isMounted.current = true;
    }

  }, [click])

  const handleDelete = (index) => {
    let temp = [...tasks]
    temp.splice(index, 1);
    setTasks(temp);
    setClick(click + 1);
  };
  const append = (msg) => {
  
      setTasks([...tasks, msg].sort((a, b) => b.priority - a.priority))

      setClick(click + 1);

      console.log(msg);
      
  };
  const handleTimerClose = () => {
    setIsTimerOpen(false);
  }
  const handleTimerOpen = () => {
    setIsTimerOpen(true)
  }
  const handleSongStart = () => {
    song.play();
  }
  const handleSongPause = () => {
    song.pause();
    setSong(new Audio(ringer));
  }
  const handleTaskClose = () => {
    setIsTaskOpen(false);
  }
  const handleTaskOpen = () => {
    setIsTaskOpen(true);
  }
  const handleNotesClose = () => {
    setIsNotesOpen(false);
  }
  const handleNotesOpen = () => {
    setIsNotesOpen(true);
  }



  return (
    <div className = {classes.div} >  
      <Timer open = {isTimerOpen} handleTimerOpen = {handleTimerOpen} handleTimerClose = {handleTimerClose} handleSongPause = {handleSongPause} handleSongStart = {handleSongStart} />   

      <Task append = {append} open = {isTaskOpen} handleTaskClose = {handleTaskClose}> </Task>

      <Notes open = {isNotesOpen} handleNotesClose = {handleNotesClose}></Notes>

      <div className = {classes.container}>

        <div className = {classes.left}>
          <h1 className= {classes.h1}>Tasks</h1>

          <div className = {classes.taskSubtitle}>
            <h2 className = {classes.h2}>In Progress</h2>
            <ButtonBase style = {{width: "35px", height: "35px", borderRadius: "50%", borderColor: "white", borderStyle: "solid", borderWidth: "2px", marginLeft: "10px"}}>
              <h2 className = {classes.h2}>{tasks.length}</h2>
            </ButtonBase>
          </div>

          <ButtonBase onClick = {handleTaskOpen} style = {{borderRadius: "20px", color: "white"}} className = {classes.button}>
            <AddBoxIcon sx={{ color: "#8e5ff3" }} style = {{width : "30px", height: "30px", marginRight: "5px"}} /> <h2>New Task</h2> 
        
          </ButtonBase>

          {
            tasks.map((obj, index) => {
              
            return(
              <Card 
                priority = {obj.priority} 
                key = {index} 
                index = {index} 
                task = {obj.task} 
                handleDelete = {handleDelete}>


              </Card>
            )
              
            })
          }
          <br></br>
          <br></br>
          <br></br>
          <br></br>


          <div className = {classes.taskSubtitle}>
            <h2 className = {classes.h2}>Completed</h2>

            <ButtonBase style = {{width: "35px", height: "35px", borderRadius: "50%", borderColor: "white", borderStyle: "solid", borderWidth: "2px", marginLeft: "10px"}}>
              <h2 className = {classes.h2}>{tasks.length}</h2>
            </ButtonBase>

          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
      
          
        </div>

        <div className= {classes.right}>
          <h1 className= {classes.h1}>Tools</h1>

          <ButtonBase onClick = {handleTimerOpen} style = {{borderRadius: "20px", color: "white", marginBottom: "20px"}} className = {classes.button}>
            <TimerIcon sx={{ color: "#8e5ff3" }} style = {{width : "30px", height: "30px", marginRight: "5px"}} /> <h2>Timer</h2> 
        
          </ButtonBase>

          <ButtonBase onClick = {handleNotesOpen} style = {{borderRadius: "20px", color: "white"}} className = {classes.button}>
            <EventNoteIcon sx={{ color: "#8e5ff3" }} style = {{width : "30px", height: "30px", marginRight: "5px"}} /> <h2>Notes</h2> 
        
          </ButtonBase>

        </div>

      </div>

    </div>
  );
}

export default App;
