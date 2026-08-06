import '../styles/NoteViewer.css'

export default function NoteViewer({ selectedNote, updateTitle, updateContent }){
    if(!selectedNote){
        return(
            <div className='empty-state'>
                <h2>No note selected</h2>
                <p>Select an existing note or create a new one using "+ New"</p>
            </div>
        )
    }
    return(
        <div className='note-viewer'>
            <input
                className="note-title"
                type="text"
                value={selectedNote.title}
                onChange={(event)=>updateTitle(event.target.value)}
                onBlur={()=>{
                    if(selectedNote.title.trim() === ''){
                        updateTitle("Untitled")
                    }
                }}
            />

            <textarea 
                className='text-area'
                value={selectedNote.content}
                onChange={(event)=>updateContent(event.target.value)}
            >
            </textarea>
        </div>
    )
}