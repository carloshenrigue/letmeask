import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.css';
export function RoomCode(){
    return(
        <button className="room-code">
            <div>
                <img src={copyImg} alt="copy room code" />
            </div>
            <span> Sala #ff3tf</span>
        </button>

    )
}