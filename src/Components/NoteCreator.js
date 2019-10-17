import React, {Component} from "react"
import * as firebase from "firebase"

class NoteCreator extends Component {
		constructor() {
			super()
			this.state = {
				newNote: ""
			}
			this.handleChange = this.handleChange.bind(this)
			this.addNote = this.addNote.bind(this)
		}

		handleChange(event){
			const { name, value } = event.target
			this.setState({ [name]:value })
		}

		addNote(){
			if(this.state.newNote !== "") {
				firebase.database().ref("notes").push({
					note: this.state.newNote
				})
			this.setState({
            	newNote: ""
    			})
        	}
        	else {
        		alert("Please enter a note!")
        	}
	    }

	render() {
		return (
			<div className="creator-wrapper">
			<input
				name="newNote"
				type="text"
				className="note-input"
				placeholder="Write your note here..."
				onChange={this.handleChange}
				value={this.state.newNote}
			/>
			<button className="create-note" onClick={this.addNote}>Add a note</button>
			</div>
		)
	}
}

export default NoteCreator