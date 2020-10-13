import React from "react";
import { useHistory} from "react-router-dom";
import Button from '@material-ui/core/Button'
import './App.css';

function Home(){
    let history = useHistory();
return(
    <div className='App'>
        <br/><br/>
        <Button variant="contained" color="primary" onClick = {()=>{history.push('/signup')}}> Signup/Login</Button>
        <br/><br/>
        
        <div className="Card">
           <Button variant="contained" color="secondary" onClick = {()=>{history.push('/indian')}}>Indian</Button><br/><br/>
           <Button variant="contained" color="secondary" onClick = {()=>{history.push('/italian')}}>Italian</Button>
        </div>
         <br/><br/>
        <Button variant="contained" color="secondary" onClick = {()=>{history.push('/firebase_recipes')}}>Recipes</Button><br/><br/>
    
    </div>
)
}

export default Home;