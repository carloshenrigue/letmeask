
import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg'

import { Button } from '../components/Button';
import { Question } from '../components/Question';

import {RoomCode} from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';

import '../styles/room.scss';



type RoomParams = {
    id: string;
}
export function AdminRoom() {
    const {user}  = useAuth();
    const parms = useParams<RoomParams>();
    const [newQuestion, setNewQuestion] = useState('');
    const roomId = parms.id;
    //o useEffect dispara uma função sempre q uma informação mudar


    const {title, questions} = useRoom(roomId)



    


    async function handleSendQuestion(event: FormEvent) {
        event.preventDefault();
        if(newQuestion.trim() === '') {
            return;
        }
        if(!user) {
            throw new Error('erro')
        }
        const question = {
            content: newQuestion,
            author: { 
                name: user?.name,
                avatar: user.avatar,
            },
            isHighlighted: false,
            isAnswered: false
        };
        await database.ref(`rooms/${roomId}/questions`).push(question);
         
        
        setNewQuestion('');
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="letmeast" />
                   <div>
                       <RoomCode code={roomId}/>
                   <Button>Encerrar sala</Button>
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
                            
                            />
                        )
                    })}
                    </div>
            </main>
        </div>
    );
}