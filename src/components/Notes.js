import React, {useEffect, useState, useRef} from 'react'
import {makeStyles} from "@mui/styles"
import { Button } from '@mui/material';
import { Modal } from '@mui/material';
import {ButtonBase} from "@mui/material"

const useStyles = makeStyles((theme) => ({
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
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
      container: {
        color: "white",
        textAlign: "center",
        },
}))

function Notes(props) {
  const classes = useStyles();
  return (
    <div className= {classes.container}>
        <Modal open = {props.open} onClose = {props.handleNotesClose}>
            
            <div className= {classes.modal}>
            <textarea 
          
                type = "text"
                className = {classes.input}
                placeholder = "notes"
    
                /> 
            </div>
            
        </Modal>
    </div>
  )
}

export default Notes