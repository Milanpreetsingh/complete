import React from 'react';
import firebase from './utils/firebase';
import {useHistory} from "react-router-dom";
import Button from '@material-ui/core/Button'
import './App.css';



function Home1(){
    let history = useHistory();
    const signout = ()=>{
        firebase.auth().signOut();
        history.push("/");
      }
return(
    <div className='App'>
    <br/><br/>
    <button onClick={signout}>Signout</button>
    <br/><br/>

    <div className="Card">
           <Button variant="contained" color="secondary" onClick = {()=>{history.push('/indian')}}>Indian</Button><br/><br/>
           <Button variant="contained" color="secondary" onClick = {()=>{history.push('/italian')}}>Italian</Button>
           
    </div>
    <br/><br/>
    <Button variant="contained" color="secondary" onClick = {()=>{history.push('/firebase_recipes')}}>Recipes</Button><br/><br/>
    <Button variant="contained" color="secondary" onClick = {()=>{history.push('/recipes')}}>Add Recipes</Button>
    
    </div>
);
}

export default Home1;