//import NotesAPI from "./NotesAPI.js"//functions
//import NotesView from "./NotesView.js"//rendering actions
import App from "./App.js"

var classes = JSON.parse('["HCI", "VLSI", "Design"]')
localStorage.setItem("Classes", JSON.stringify(classes)); 

//check for example element "app" in HTML
const root = document.getElementById("app")
//intialize app
const app = new App(root)
