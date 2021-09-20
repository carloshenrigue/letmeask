
import { type } from 'os';
import { createContext, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { auth, firebase } from './services/firebase';

type AuthContext = {
  user: object;
  singnInWithGoogle: () => void;
}

export const AuthContext = createContext({} as AuthContext );

function App() {
  const [user, setUser] = useState();

  function singnInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result => {
      if (result.user) {
        //vai pegar todos os dados do loguin
        const {displayName, photoURL, uid } = result.user
        if (displayName || photoURL){
          throw new Error('veja suas informações do google Acconts')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }


      
    })
  }
  return (
    <BrowserRouter>
   <AuthContext.Provider value={{user, singnInWithGoogle}} >
    <Route path="/" exact component={Home} />
    <Route path="/rooms/new" component={NewRoom} />  
   </AuthContext.Provider>
   
    </BrowserRouter>
    );
}

export default App;