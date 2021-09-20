

import { useParams } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg'
import deletImg from '../assets/images/delete.svg'
import { Button } from '../components/Button';
import { Question } from '../components/Question';

import {RoomCode} from '../components/RoomCode';
//import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';


import '../styles/room.scss';
import { database } from '../services/firebase';



type RoomParams = {
    id: string;
}
export function AdminRoom() {
   // const {user}  = useAuth();
    const parms = useParams<RoomParams>();
    const roomId = parms.id;
    //o useEffect dispara uma função sempre q uma informação mudar


    const {title, questions} = useRoom(roomId)

    async function handleDeleteQuestion(questionId: string){
        if(window.confirm('tem certeza que deseja excluir essa pergunta ?')){
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        } }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="letmeast" />
                   <div>
                       <RoomCode code={roomId}/>
                   <Button isOutlined>Encerrar sala</Button>
                   </div>
                </div>
            </header>
            <main className="content">
                <div className="room-title">
                    <h1> Sala {title}</h1>
                   { questions.length > 0 && <span> {questions.length} perguntas </span> }
                    </div> 


                    <div className ="question-list">
                    {questions.map(question =>{
                        return (
                            <Question 
                            key = {question.id}
                            content = {question.content}
                            author = {question.author}
                            >
                                <button
                                type="button"
                                onClick={() => handleDeleteQuestion(question.id)}>
                                    <img src={deletImg} alt="Remover pergunta" />
                                </button>
                               </ Question>
                        );
                    })}
                    </div>
            </main>
        </div>
    );
}