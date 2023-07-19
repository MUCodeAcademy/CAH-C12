
require('dotenv').config();
const express = require('express');
const authRoutes = require("../server/routes/auth");
const cors = require('cors');
const app = express();
const port = process.env.DB_PORT;
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    }
});

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);

io.on("connection", (socket) => {
    console.log("New Client Connected");

    socket.on("message", (msg) => {
        io.emit("message", msg);
    }); 
    
    socket.on("disconnect", () => {
        console.log("Client Disconnected");
    });
});

app.listen(port, () => {
    console.log("App is listening at: " + port);
});