import illustrationImg  from  '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
export function Home(){
    return(
        <div>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie dalas de Q&amp;A ao-vivo</strong>
                <p>Tie as duvidas da sua audiencia em tempo real</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="letmeask" />
                </div>
            </main>
        </div>
    )
}