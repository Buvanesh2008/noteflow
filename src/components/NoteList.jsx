import NoteItem from "./NoteItem";
import "../styles/Sidebar.css"

export default function NoteList({notes,selectedNote ,setSelectedNote}) {
    return (
        <ul className="note-list">
            {
                notes.map((note)=>(
                    <NoteItem key={note.id} note={note} selectedNote={selectedNote} setSelectedNote={setSelectedNote}/>
                ))
            }
        </ul>
    );
}