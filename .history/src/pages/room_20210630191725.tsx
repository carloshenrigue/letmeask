import { type } from 'os';
import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg'

import { Button } from '../components/Button';

import {RoomCode} from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

import '../styles/room.scss';
type FirebaseQuestions = Record<string, {
    author: {

    name: string,
    avatar: string;
}
    content: string,
    isAnswered: boolean,
    isHighlighted: boolean,
}>

type RoomParams = {
    id: string;
}
export function Room() {
    const {user}  = useAuth();
    const parms = useParams<RoomParams>();
    const [newQuestion, setNewQuestion] = useState('');



    const roomId = parms.id;
    //o useEffect dispara uma função sempre q uma informação mudar

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`);
        roomRef.once('value', room => {
            const databaseRoom = room.val();
            const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

            const parcedQuestions = Object.entries(firebaseQuestions).map(([key, value])=>{
                return{
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighlighted: value.isHighlighted,
                    isAnswered: value.isAnswered,
                }
            })
        })
    }, [roomId]);

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
                   <RoomCode code={parms.id}/>
                </div>
            </header>
            <main className="content">
                <div className="room-title">
                    <h1> Sala react</h1>
                    <span>4 perguntas </span>
                    </div> 
                    <form onSubmit={handleSendQuestion}>
                        <textarea 
                        placeholder="O que você quer perguntar"
                        onChange= {event => setNewQuestion(event.target.value)}
                        value={newQuestion}
                        />

                        <div className="form-footer">
                            { user ? (
                                <div className="user-info">
                                    <img src={user.avatar} alt={user.name} />
                                     <span>{user.name}</span>
                                     </div>
                            ) : (
                            <span>Para enviar uma pergunta, <button>faça login</button>.</span>
                            )}
                            <Button type="submit" disabled={!user}>Enviar uma pergunta</Button>
                        </div>
                    </form>

            </main>
        </div>
    );
}