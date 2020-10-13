import React,{useEffect, useState} from 'react';
import firebase from './utils/firebase.js';
import './App.css';

function Firebase_Recipes(){
const [recipeList,setRecipeList] = useState();

useEffect(()=>{
    const addref = firebase.database().ref('recipe');
    addref.on('value',(snapshot)=>{
        const recipes = snapshot.val();
        const recipeList = [];
        for(let id in recipes)
        {
         recipeList.push(recipes[id]);
        }
        setRecipeList(recipeList);
    });
},[]);

console.log({recipeList});

return(
    <div className="App">
        <div className="Card3">
        {recipeList ? recipeList.map((image)=> <di><img src = {image.img1}/><br/> <h1>{image.inp}</h1></di>) 
        : ''}
        </div>
    </div>
    
);

}


export default Firebase_Recipes;