import React, {useEffect, useState} from 'react'
import {makeStyles} from "@mui/styles"
import { ButtonBase, IconButton} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const useStyles = makeStyles((theme) => ({

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
    icon: {
        fontSize: "small",
    },
    iconButton: {
        width: "50px",
        height: "50px",
    },
    textBox: {
        wordWrap: "break-word",
        maxWidth: "500px",
        padding: "20px",
    },
    leftDiv: {
        maxWidth: "500px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "right",    
    },
    labelDiv: {
        height: "45px",
        width: "100%",
        marginBottom: "20px",
    }
    

}))

function Card(props) {
  const classes = useStyles();
  
    const btnbase = {
        backgroundColor: props.priority === 1 ? "#37f992" : (props.priority === 2 ? "#f2a53f" : "#ff4433"),
        height: "100%",
        minWidth: "100px",
        display: "flex",
        borderRadius: "15px",
        marginLeft: "20px",
        color: "#1c1727"

    }  
  return (
    <div className = {classes.card}>

        <div className = {classes.leftDiv}>
      
                <div className = {classes.textBox}>
                    <h1 style = {{fontSize: "18pt", verticalAlign: "top", display: "inline", fontWeight: "normal"}}>{props.task}</h1>
                </div>
                <div className = {classes.labelDiv}>
    
                    
                   
                        <ButtonBase style = {btnbase}>
                            <h1 style = {{fontSize: "15pt", fontWeight: "normal"}}>{props.priority === 1 ? "Low" : (props.priority === 2 ? "Medium" : "High") }</h1>
                        </ButtonBase>
                                       
                </div>
         
        </div>


        <IconButton onClick = {() => props.handleDelete(props.index)} className = {classes.iconButton}>
            {
                !props.complete && <CheckBoxOutlineBlankIcon sx={{ color: "#8e5ff3" }} fontSize = "large"></CheckBoxOutlineBlankIcon>
            }
            {
                props.complete && <CheckBoxIcon sx={{ color: "#8e5ff3" }} fontSize = "large"></CheckBoxIcon>
            }
        </IconButton>

    </div>
  )
}

export default Card