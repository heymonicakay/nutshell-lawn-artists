import { LoginForm } from "./auth/LoginForm.js"
import { Nutshell } from "./Nutshell.js"

const eventHub=document.querySelector(".container")

if (sessionStorage.getItem("activeUser")===null){
    LoginForm()
}else if(sessionStorage.getItem("activeUser")!==null){
    Nutshell()
}

eventHub.addEventListener("userAuthenticated",e=>{
    Nutshell()
})
/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/