
//import { useContext } from 'react';
import{ Link } from 'react-router-dom'
//import { AuthContext } from '../contexts/AuthContext';
import { FormEvent, useState } from 'react'

import illustrationImg  from  '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'


import { Button } from '../components/Button';

import '../styles/auth.scss';


export function NewRoom(){
   // const { user } = useContext(AuthContext)

   const [newRoom, setNewRoom] = useState('');

   async function handleCreateRoom(event: FormEvent){
       event.preventDefault();
   }
   
    return(
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie dalas de Q&amp;A ao-vivo</strong>
                <p>Tie as duvidas da sua audiencia em tempo real</p>
            </aside>
            <main>
                <div className ='main-content'>
                    <img src={logoImg} alt="letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input 
                        type="text" 
                        placeholder="Nome da sala"
                        onChange = {event => setNewRoom(event.target.value)}
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala exixtente? 
                    </p>
                </div>
            </main>
        </div>
    )
}