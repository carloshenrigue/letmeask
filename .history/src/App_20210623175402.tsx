import firebase from 'firebase';
import { createContext, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";


export const AuthContext = createContext({} as any );

function App() {
  const [user, setUser] = useState();

  function singnInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result => {
      console.log(result);
    })
  }
  return (
    <BrowserRouter>
   <AuthContext.Provider value={{value, setValue}} >
    <Route path="/" exact component={Home} />
    <Route path="/rooms/new" component={NewRoom} />  
   </AuthContext.Provider>
   
    </BrowserRouter>
    );
}

export default App;
