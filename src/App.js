import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import { auth } from './firebase';
import { useAuthState } from "react-firebase-hooks/auth"
import SignOut from './components/SignOut';




function App() {
  const [user] = useAuthState(auth)
  return (
    <main className='d-flex justify-content-center'>
      <div className='card ' style={{ maxWidth: "90%", height: "90vh", "overflowY":"scroll"}}>
        {user ? <><Chat /><SignOut/>  </> : <SignIn /> }
      </div>
    </main>
  );
}

export default App;
