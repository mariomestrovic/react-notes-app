import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import * as firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyA3_F8l8fT0SaKP_rutpRNbeatt9q4TAQk",
    authDomain: "notes-react-app-60b02.firebaseapp.com",
    databaseURL: "https://notes-react-app-60b02.firebaseio.com",
    projectId: "notes-react-app-60b02",
    storageBucket: "",
    messagingSenderId: "889089091357",
    appId: "1:889089091357:web:c0e7adbe56833af9fda3f4"
  };
  firebase.initializeApp(firebaseConfig)
  
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
