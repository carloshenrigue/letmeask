import{ Link } from 'react-router-dom'

import illustrationImg  from  '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'


import { Button } from '../components/Button';
import '../styles/auth.scss';
export function NewRoom(){
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
                    <form >
                        <input 
                        type="text" 
                        placeholder="Nome da sala"
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala exixtente? <link to="/">Clique aqui</link>
                    </p>
                </div>
            </main>
        </div>
    )
}