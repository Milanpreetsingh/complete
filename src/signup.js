import React,{Component} from 'react';
//import  firebase from './utils/firebase.js';
import  firebase from './utils/firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
/*<span><div>Successfully Signed in</div>
                                          <button onClick={()=>{firebase.auth().signOut()}}> SignOut</button>
                                          <h1>{firebase.auth().currentUser.displayName}</h1>
                                          </span>
*/
/*firebase.initializeApp({
    apiKey:"AIzaSyAuzgnwssR7eim9P6ywZ6Q4BsBzr964EYA",
    authDomain:"easy-shop-2cab6.firebaseapp.com",
    databaseURL: "https://easy-shop-2cab6.firebaseio.com",
    projectId: "easy-shop-2cab6",
    storageBucket: "easy-shop-2cab6.appspot.com",
    messagingSenderId: "765315892371",
    appId: "1:765315892371:web:174b33c1a2b972da02f966",
    measurementId: "G-5T5LEWCVZQ"

});*/

class Signup extends Component
{
    state = {isSignedIn:false}

    uiConfig = {
        signInFlow:"popup",
        
        signInOptions:[
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],

        callbacks:{
            signInSuccess:()=>false
        }
    }

    componentDidMount=()=>{
           firebase.auth().onAuthStateChanged(user =>{
           this.setState({isSignedIn:!!user})
           console.log("user",user)
        })
    }

    
   render(){
    return(
        <div className = "App">
            {
                this.state.isSignedIn ? (this.props.history.push('/home1')
                                        )
                : (
                    <StyledFirebaseAuth
                    uiConfig = {this.uiConfig}
                    firebaseAuth = {firebase.auth()}
                    />
                )
            } 
        </div>
    )
    }
}


export default Signup;