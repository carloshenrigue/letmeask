import copyImg from '../assets/images/copy.svg';
export function RoomCode(){
    return(
        <button className="room-code">
            <div>
                <img src={copyImg} alt="copy room code" />
            </div>
            <span> Sala #ff3f</span>
        </button>
        
    )
}