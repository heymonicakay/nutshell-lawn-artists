import { getMessages, useMessages, saveMessage } from "./MessageProvider.js"
import { getUsers } from "../users/UserProvider.js"
import { getFriends } from "../friends/FriendProvider.js"
import { MessageCard } from "./MessageCard.js"

const contentTarget = document.querySelector(".content-right")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "message-submit-button") {
    const messageField = document.querySelector("#message-input")
    const newMessage = {
      userId: parseInt(sessionStorage.activeUser),
      message: messageField.value
    }
    saveMessage(newMessage)
  }
})

eventHub.addEventListener("messageChange", customEvent => {
  render()
})


export const ListMessages = () => {
  getMessages()
    .then(getUsers)
    .then(getFriends)
    .then(() => {
      render()
    })
}

const render = () => {
  const allMessages = useMessages()
  
  contentTarget.innerHTML = `
  ${allMessages.map(m => MessageCard(m)).join("")}
  ${messageForm()}
  `
}


const messageForm = () => {
  return `
  <input type="text" id="message-input"  placeHolder="...">
  <button id="message-submit-button">Send</button>
  `
}