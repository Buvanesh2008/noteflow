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
                <small>{note.createdAt.toLocaleString()}</small>
            </div>
        </li>
    );
}