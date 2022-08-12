// import React from 'react'
// import {useRef, useState, useEffect} from 'react'
// import axios from 'axios'

// function Data({props}) {

//     const [arr, setArr] = useState([])
    
//     const [step, setStep] = useState(1);

//     const func = () => {
//         setStep(step+1)
//     }   
//     const isMounted = useRef(false);
//     useEffect (() => {    

//         if(isMounted.current){
//             async function fetchData() {
//                 const req = await axios.get('/api/todo');

//                 setArr(req.data);

//             }

//             fetchData();
//         }
//         else{
//             isMounted.current = true;
//         }
//         console.log("twice")
//     }, [step])


//     return (
//         <div style = {{backgroundColor: "pink"}}>
//             <button style = {{width: "200px", height: "100px"}}  onClick={func}>Load images</button>
//             <div>
                
//             </div>
//             {
//                 arr.map(obj => (
//                     <div
//                         style = {{width: "100px", height: "100px", backgroundImage: `url(${obj.url})`}}
//                     >
                        
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }

// export default Data;