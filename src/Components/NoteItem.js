import React, { Component } from "react"
import * as firebase from "firebase"

class NoteItem extends Component {
    constructor(props) {
        super(props)
    }

    removeNote(id) {
    firebase.database().ref('notes').child(id).remove()
    }

    render() {
      return (
        <section className="notes-wrapper">
          <div className="notes">
            {this.props.notes.map(note => (
              <div className="note" key={note.id}>
                <img src="https://img.icons8.com/plasticine/48/000000/filled-trash.png"
                     alt="delete-note" 
                     className="remove" 
                     onClick={() => this.removeNote(note.id)} 
                  />
                <div className="note-content">
                  <p>{note.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        )
    }
}

export default NoteItem
