import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:3001")

function Waiting() {
    const [message, setMessage] = useState("");

    const sendMessage = () => {
        socket.emit("send_message", {message: {message} });
    }

    useEffect(() => {
    socket.on("receive_message", (data) =>{
    alert(data.message);
});
}, [socket]);
    
// socket.on("send message", (data) => {
//     socket.broadcast
// })

return (
    <div>
        <input placeholder="message" />
        <button onClick={sendMessage}> Send message</button>
    </div>
);
};