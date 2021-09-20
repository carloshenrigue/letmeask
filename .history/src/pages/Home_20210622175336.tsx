import illustrationImg  from  '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
export function Home(){
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
                    <button>
                        <img src={googleIconImg} alt="çogo google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="saparator">
                        ou entre em uma sala
                    </div>
                    <form >
                        <input 
                        type="text" 
                        placeholder="digite o codigo da sala"
                        />
                        <button type="submit">
                            Entre na sala</button>
                    </form>
                </div>
            </main>
        </div>
    )
}