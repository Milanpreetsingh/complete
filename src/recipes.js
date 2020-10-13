import React,{useState} from 'react';
import './App.css';
import firebase from './utils/firebase';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";



function Recipes(){

    const[img1,setimg] = useState(); 
    const[inp,setinp] = useState("Hello");

    let history = useHistory();


    const filehandler = (event)=>{
        console.log("hi");
        setimg(event.target.files[0]);
        console.log({img1});
    }

    const texthandler = (event)=>{
        setinp(event.target.value)
    }

    const Add = ()=>{
        const addref = firebase.database().ref('recipe')
        const image = {
            img1,
            inp,
        }
        addref.push(image)
    }
    
    return(
        <div className = 'App'>
            <br/><br/>
            <div className="Card">
               <input type="file" onChange={filehandler}/>
               <br/><br/>
               <input type="text" onChange={texthandler}/>
               <br/><br/>
               <Button variant="contained" color="secondary" onClick = {Add}>Add</Button>
               <br/><br/>
               <img src={img1}/>
            </div>
            <br/><br/>
            <Button variant="contained" color="secondary" onClick = {()=>{history.push('/recipes')}}>Add Recipes</Button>
        </div>
    );
}


export default Recipes;
