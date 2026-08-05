import '../styles/Sidebar.css'

export default function Toolbar({ createNewNote, deleteNote, selectedNote, setSelectedNote }){
    return(
        <div className="tools">
            <button className="add-btn" onClick={createNewNote}>+ New</button>
            <button className="pin-btn">📌 Pin</button>
            <button 
                className="delete-btn" 
                disabled={!selectedNote}
                onClick={()=>deleteNote(selectedNote.id)}
            >
                🗑 Delete
            </button>
        </div>
    )
}