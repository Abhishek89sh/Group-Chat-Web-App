const socket = io();

const messageInput = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn");
const msgContainer = document.getElementById("messageContainer");

const myName = localStorage.getItem("name");

if(!myName){
    window.location.href = "/name"
}

function sendMessage(){
    const msg = messageInput.value;
    messageInput.value = "";
    if(msg.trim().length === 0){
        alert("Message must not be empity");
        return;
    }
    socket.emit("new-message", {name: myName, message: msg});
}


socket.on("online", (count)=>{
    document.getElementById("online").textContent = "Online: "+count
})

socket.on("message", (data) => {
    const box = document.createElement("div");
    box.classList.add("msgBox");

    if (data.from == socket.id) {
        box.classList.add("me");
    } else {
        box.classList.add("other");
    }

    const user = document.createElement("p");
    user.classList.add("user");
    user.innerText = data.name;

    const msg = document.createElement("p");
    msg.classList.add("text");
    msg.innerText = data.message;

    box.appendChild(user);
    box.appendChild(msg);

    msgContainer.appendChild(box);

    msgContainer.scrollTop = msgContainer.scrollHeight;
});


window.addEventListener('keypress', (e)=>{
    if(e.key == "Enter"){
        sendMessage();
    }
})

sendBtn.addEventListener('click', sendMessage)
