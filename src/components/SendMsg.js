import React, {useState} from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase/compat/app'


function SendMsg({scroll}) {
    const [msg, setMsg] = useState("")

    async function sendMessage(e) {
        e.preventDefault()
        const{uid, photoURL} = auth.currentUser

        await db.collection("messages").add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg("")
        scroll.current.scrollIntoView({behavior:"smooth"})
    }


    return (
    <div>
        <form onSubmit={sendMessage}>
            <input value={msg} onChange={(e)=> setMsg(e.target.value)} placeholder='Mensaje...' style={{width: "70%"}}
            className="input-group-text d-inline-flex"></input>
            <button type="submit" style={{width: "25%"}} className='btn'>Enviar</button>
        </form>
    </div>
    
    )
}

export default SendMsg