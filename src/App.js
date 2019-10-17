import React, {Component} from "react"
import "./App.css"
import * as firebase from "firebase"
import Header from "./Components/Header"
import NoteCreator from "./Components/NoteCreator"
import NoteItem from "./Components/NoteItem"


class App extends Component {
  constructor() {
      super()  
      this.state = {
        notes: []
      }
  }

  componentDidMount() {
    this.db = firebase.database()
    this.listenForChange()
  }

  listenForChange() {
    this.db.ref("notes").on("child_added", snapshot => {
      let note = {
        id: snapshot.key,
        note: snapshot.val().note
      }

      let notes = this.state.notes
      notes.push(note)

      this.setState({
        notes: notes
      })
    })

    this.db.ref("notes").on("child_removed", snapshot => {
      let notes = this.state.notes
      notes = notes.filter(note => note.id !== snapshot.key)

      this.setState({
        notes: notes
      })
    })
  }

  render() {
    return (
      <div className="app">
          <Header />
          <NoteCreator />
          <NoteItem notes={this.state.notes} />
      </div>
    )
  }
}

export default App
