import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { auth, firebase } from '../services/firebase'

import illustrationImg  from  '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button';

import { TestContext } from '../App'

import '../styles/auth.scss';


export function Home(){
    const history = useHistory();
    const { value, setValue } = useContext(TestContext)

    function handleCreateRoom(){

        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then(result => {
            

            history.push('/rooms/new');
        })

    }
    return(
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie dalas de Q&amp;A ao-vivo</strong>
                <p>Tie as duvidas da sua audiencia em tempo real</p>
            </aside>
            <main>
                <h1>{value}</h1>
                <div className ='main-content'>
                    <img src={logoImg} alt="letmeask" />
                    <button onClick={handleCreateRoom} className="create-run">
                        <img src={googleIconImg} alt="çogo google" />
                        <p>Crie sua sala no Google</p>
                    </button>
                    <div className="saparator">
                        ou entre em uma sala
                    </div>
                    <form >
                        <input 
                        type="text" 
                        placeholder="digite o codigo da sala"
                        />
                        <Button type="submit">
                            Entre na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}