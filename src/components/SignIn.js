import React from 'react'
import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {auth} from "../firebase.js"

function SignIn() {
    function signInGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <div>
            <button onClick={signInGoogle} className='btn btn-dark btn-outline-success' style={{width: "100%"}}>Entra con Gugl mi pana</button>
        </div>
    )
}

export default SignIn