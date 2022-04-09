import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { auth, db } from '../firebase'
import SendMsg from './SendMsg'

function Chat() {
    const [messages, setMessages] = useState()
    const scroll = useRef()

    useEffect(() => {
        db.collection("messages").orderBy("createdAt").limitToLast(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    

    return (
        <div className='card'>
            <div className='card-body'>
            {messages?.map(({ id, text, photoURL, uid }) => (
                <>
                {
                    uid == auth.currentUser.uid
                    ?  <div style={{maxWidth: "100%"}} className="d-flex flex-row justify-content-end mb-4" key={id}>
                        <div className='p-3 me-3 border' style={{"border-radius": "15px", "backgroundColor": "rgba(190, 247, 175,.2)", maxWidth:"90%"}}>
                    <p className="small mb-0"> {text}</p>
                    </div>
                    <img src={photoURL} style={{ maxHeight: "45px","border-radius":"50%",width:"45px" ,minWidth:"20px"}} className="d-inline-flex align-self-center" alt=""></img>
                </div>
                    : <div style={{maxWidth: "100%"}} className="d-flex flex-row justify-content-start mb-4" key={id}>
                    <img src={photoURL} style={{ maxHeight: "45px","border-radius":"50%",width:"45px" ,minWidth:"20px"}} className="d-inline-flex align-self-center" alt=""></img>
                    <div className='p-3 ms-3' style={{"border-radius": "15px", "backgroundColor": "rgba(57, 192, 237,.2)", maxWidth:"90%"}}>
                    <p className="small mb-0"> {text}</p>
                    </div>
                </div>
                }
                
                </>
            ))}

            <SendMsg scroll={scroll}/>
            <div ref={scroll} > </div>
            </div>
        </div>
    )
}

export default Chat