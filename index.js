import express from 'express'
import http from 'http'
import path from 'path'

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { Server } from 'socket.io'

const app = express();

const server = http.createServer(app);

const io = new Server(server);

app.use(express.static("public"));

function updateOnlineUsers(){
    io.emit("online", io.engine.clientsCount)
}

io.on('connection', (socket)=>{
    updateOnlineUsers();
    socket.on("new-message", (data)=>{
        io.emit("message", {name: data.name, message: data.message, from: socket.id});
    })
    socket.on("disconnect", ()=>updateOnlineUsers());
})


app.get("/name", (req, res) => {
    res.sendFile(resolve(__dirname, "public", "name.html"));
});

app.get("/", (req, res) => {
    res.sendFile(resolve(__dirname, "public", "index.html"));
});

app.get("/clear", (req, res)=>{
    res.send(`<p>Cleared</p><script>localStorage.clear()</script>`)
})

server.listen(3000, ()=>{
    console.log("Serever is RUNNING at 3000")
})