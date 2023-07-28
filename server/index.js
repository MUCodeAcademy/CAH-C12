require('dotenv').config();
const express = require('express');
const authRoutes = require("../server/routes/auth");
const lobbyRoutes = require("../server/routes/lobby");
const cors = require('cors');
const app = express();
const port = 8080;
const server = require("http").createServer(app);  
const io = require("socket.io")(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true
    }
});


app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/lobby', lobbyRoutes);

//-------------------------------------------------------------------------------
//CONNECTING

// io.on("connection", (socket) => {
//     console.log(`New Client Connected: ${socket.id}`);

//WEBSOCKETS SERVER SIDE TEMPLATE COMMENTED OUT BELOW FROM LINE 32 TO 100 TO NOT INTERFERE WITH DEVELOPMENT.

// socket.on("chat message", (msg) => {
//     io.emit("chat message", msg);
// });


//------------------------------------------------------------------------------------     
//START GAME    
  
// socket.on("start-game", (cards) => {
//     console.log(cards)
//     //socket.broadcast.emit will send to every client but the sender
//     //io.emit will send to every single client including the sender
//    io.emit("deal-cards", cards); //function to deal cards
//    });


// //---------------------------------------------------------------------------
// //CHOOSE CARD CZAR/DEALER

// socket.on("set-dealer", (dealer) => {
//     console.log(dealer)
//     //socket.broadcast.emit will send to every client but the sender
//     //io.emit will send to every single client including the sender
//    io.emit("dealer-choice", dealer);
//    }); 

// //---------------------------------------------------------------------------
// //DEALER PLAYS

// socket.on("dealer-play", (dealerPlay) => {
//     console.log(dealerPlay)
//     //socket.broadcast.emit will send to every client but the sender
//     //io.emit will send to every single client including the sender
//    io.emit("black-card", dealerPlay);
//    }); 

// //---------------------------------------------------------------------------
// //PLAYERS PLAY

// socket.on("player-play", (playerPlay) => {
//     console.log(playerPlay)
//     //socket.broadcast.emit will send to every client but the sender
//     //io.emit will send to every single client including the sender
//    io.emit("white-card", playerPlay);
//    }); 

// //---------------------------------------------------------------------------  
// //DEALERS FAVORITE WHITE CARD

// socket.on("dealers-favorite", (dealersFavorite) => {
//     console.log(dealersFavorite)
//     //socket.broadcast.emit will send to every client but the sender
//     //io.emit will send to every single client including the sender
//    io.emit("winning-card", dealersFavorite);
//    }); 

// //--------------------------------------------------------------------------- 
// //NEW ROUND/DEALER/CARD CZAR

// //select "select-dealer" socket above

// //--------------------------------------------------------------------------- 
// //SELECT WINNER

// socket.on("winner", (suspectedWinner) => {
//     console.log(suspectedWinner)
//     //socket.broadcast.emit will send to every client but the sender
//     //io.emit will send to every single client including the sender
//    io.emit("winner-of-game", suspectedWinner);
//    }); 

  
// //--------------------------------------------------------------------------- 
// //IN APP CHAT MESSAGING
//    socket.on("join_room", (data) => {
//     socket.join(data);
//   });

// socket.on("send_message", (data) => {
//     socket.broadcast.emit("receive_message", data);
// });

//--------------------------------------------------------------------------- 
//LOBBY PAGE


//--------------------------------------------------------------------------- 
//DISCONNECTING 
   socket.on("disconnect", () => {
        console.log("Client Disconnected");
    });
  });
  server.listen(8080);

// server.listen(port, () => {
//     console.log("App is listening at: " + port);
// });