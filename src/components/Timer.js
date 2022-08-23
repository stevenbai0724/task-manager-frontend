import {React, useEffect, useState, useRef} from 'react'
import {makeStyles} from "@mui/styles"
import { Button } from '@mui/material';
import { Modal } from '@mui/material';
import {ButtonBase} from "@mui/material"
import UpButton from "./UpButton";
import DownButton from "./DownButton";

const useStyles = makeStyles((theme) => ({
    container: {
        color: "white",
        textAlign: "center",
    },
    modal: {
      color: "white",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#1c1727",
      width: "450px",
      minHeight: "450px",
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
    grid: {
      display: "grid",
      gridTemplateColumns: "auto auto auto auto auto",
      gridGap: "3px",
      justifyContent: "center",
      width: "100%",
      gridRowGap: "2px",
    },
    buttonTop: {
      height: "100%",
      width: "100%",
    },
    buttonBottom: {
      height: "100%",
      width: "100%",      
    },
    buttonDiv: {
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      height: "20px"
    },
    timeDiv: {
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "50px"
    },
}))
var interval;
const INT = 10700000000; //max int value to stop timer without clearInterval(), approx 4 months in milliseconds
function Timer(props) {

  const [pause, setPause] = useState("Start")
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [int, setInt] = useState(10700000000);
  const [working, setWorking] = useState(true);
  const [timeleft, setTimeleft] = useState(1500);
  const [workTime, setWorkTime] = useState(1500);
  const [breakTime, setBreakTime] = useState(300);
  const [isRunning, setIsRunning] = useState(false);
  const [initial, setInitial] = useState(true);
  const isMounted = useRef(false);
  const isMounted2 = useRef(false);

  const handleSkip = () => {
    console.log("skipped")
    setInitial(false);
    if(working){
      setWorking(false);
      setPause("Start");
      setTimeleft(breakTime);
      setBreakTime(breakTime);
    }
    else{
      setWorking(true);
      setPause("Start");
      setTimeleft(workTime);
      setWorkTime(workTime);
    }
    setInt(INT)
    setIsRunning(false);
  }
  
  useEffect(() => {
    var temp = timeleft;
    setHours(Math.floor(temp/3600));
    temp = temp % 3600;
    setMinutes(Math.floor(temp/60));
    temp = temp % 60;
    setSeconds(temp);

      interval = setInterval(() => {

        if(timeleft === 0){
          setInt(INT)
          setIsRunning(false);
          setPause("Start")
          {props.handleSongStart()}
          {props.handleTimerOpen()}
          if(working){
            setWorking(false);
            setTimeleft(breakTime);
          }
          else{
            setWorking(true);
            setTimeleft(workTime);
          }

        }
        else{
          setTimeleft(timeleft - 1)

        }

      }, int);
      return () => clearInterval(interval);
    

  }, [pause, timeleft]);



  useEffect (() => {
    if(isMounted.current){
      var temp = workTime;
      localStorage.setItem('workTime', JSON.stringify(workTime))
      setHours(Math.floor(temp/3600));
      temp = temp % 3600;
      setMinutes(Math.floor(temp/60));
      temp = temp % 60;
      setSeconds(temp);
      setTimeleft(workTime)
    }
    else isMounted.current = true;

  }, [workTime])

  useEffect (() => {
    if(isMounted2.current){
      var temp = breakTime;
      localStorage.setItem('breakTime', JSON.stringify(breakTime))
      if(!initial){
        setHours(Math.floor(temp/3600));
        temp = temp % 3600;
        setMinutes(Math.floor(temp/60));
        temp = temp % 60;
        setSeconds(temp);
        setTimeleft(breakTime);
      }

    }
    else{
      isMounted2.current = true;
    }
  }, [breakTime])

  useEffect (() => {
    const temp1 = JSON.parse(localStorage.getItem('workTime'));
    const temp2 = JSON.parse(localStorage.getItem('breakTime'));

    if(temp2){
      console.log("retreive " + temp2)
      setBreakTime(temp2);
    }
    if(temp2){
      console.log("retreive" + temp1)
      setWorkTime(temp1);
      setTimeleft(temp1);
    }

  }, [])

  const handleUpButton = (secs) => {
    !isRunning && working && setWorkTime(workTime + secs)
    !isRunning && !working && setBreakTime(breakTime + secs)
  }

  const handleDownButton = (secs) => {
    !isRunning && working && workTime > 60 && setWorkTime(workTime - secs)
    !isRunning && !working && breakTime > 60 && setBreakTime(breakTime - secs)
  }

  const classes = useStyles();
  
    return (
        <div className = {classes.container}>
            
          <Modal open = {props.open} onClose = {() => {
              props.handleTimerClose()
              props.handleSongPause()
            }}
          >
            <div className = {classes.modal}>

              <br></br>
              <div className = {classes.grid}> {/* time adjuster */}

                <UpButton handleUpButton = {handleUpButton} secs = {3600} isRunning = {isRunning}></UpButton>

                <div className = {classes.buttonDiv}><h1></h1></div>

                <UpButton handleUpButton = {handleUpButton} secs = {60} isRunning = {isRunning}></UpButton>

                <div className = {classes.buttonDiv}><h1></h1></div>

                <UpButton handleUpButton = {handleUpButton} secs = {1} isRunning = {isRunning}></UpButton>
                
                <div className = {classes.timeDiv}><h1>{ hours <= 9 ?`0${hours}`: hours}</h1></div>
                <div className = {classes.timeDiv}><h1>:</h1></div>
                <div className = {classes.timeDiv}><h1>{ minutes <= 9 ?`0${minutes}`: minutes}</h1></div>
                <div className = {classes.timeDiv}><h1>:</h1></div>
                <div className = {classes.timeDiv}><h1>{ seconds <= 9 ?`0${seconds}`: seconds}</h1></div>

                <DownButton handleDownButton = {handleDownButton} secs = {3600} isRunning = {isRunning}></DownButton>

                <div className = {classes.buttonDiv}><h1></h1></div>

                <DownButton handleDownButton = {handleDownButton} secs = {60} isRunning = {isRunning}></DownButton>

                <div className = {classes.buttonDiv}><h1></h1></div>

                <DownButton handleDownButton = {handleDownButton} secs = {1} isRunning = {isRunning}></DownButton>

              </div>

            <br></br>

            <h1 style = {{fontSize: "15pt"}}>{working ? "Break time is over! Time to do work" : "Good work! Take a short break"}</h1>
            <br></br>
            <Button 
              onClick = {() => {
                props.handleSongPause()
                setInitial(false);
                if(pause === "Start"){
                  setPause("Pause");
                  setInt(1000);
                  setIsRunning(true);
                }
                else{
                  setPause("Start");
                  setInt(INT)
                }
              }}
            >
              {pause}
            </Button>

            <Button
              onClick = {handleSkip}
            >
              Skip Timer
            </Button>
            </div>
          </Modal>

        </div>
        
    )


}

export default Timer