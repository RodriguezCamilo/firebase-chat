import React from 'react'
import {auth} from "../firebase.js"

function SignOut() {
    return (
        <button onClick={()=> auth.signOut()} className='btn btn-dark btn-outline-danger' style={{width: "100%"}}>SIGN OUT</button>
    )
}

export default SignOut
