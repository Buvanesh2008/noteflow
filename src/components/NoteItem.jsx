import '../styles/Sidebar.css'

export default function NoteItem({ note, selectedNote, setSelectedNote }) {
    return (
        <li className={`notes-list ${
                selectedNote && selectedNote.id === note.id ? "active" : ""
            }`} 
            id='note-item'
            onClick={()=>setSelectedNote(note)}>
            <div className='notes-list'>
                <p>{note.title}</p>
                <small>{new Date(note.createdAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    })}
                </small>
            </div>
        </li>
    );
}