import React from 'react'
import {makeStyles} from "@mui/styles"
import { ButtonBase, IconButton} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const useStyles = makeStyles((theme) => ({

    card: {
        width : "500px",   
        height: "600px",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "pink",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        fontSize: "30px"
    },
    icon: {
        fontSize: "small",
    },
    iconButton: {
        backgroundColor: "blue",
        width: "50px",
        height: "50px",
    },

}))

function Card(props) {
  const classes = useStyles();

  return (
    <div className = {classes.card}>

        <div>
            {props.name}
        </div>

        <IconButton 
            className = {classes.iconButton}
            
        >

            <CancelIcon fontSize = "large"></CancelIcon>
        </IconButton>


        
    </div>
  )
}

export default Card