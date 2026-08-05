import '../styles/NoteViewer.css'

export default function NoteViewer({ selectedNote, updateTitle, updateContent }){
    if(!selectedNote){
        return(
            <div className='note-viewer'>
                <h4>No note selected</h4>
                <p>Select an existing note or create a new one using "+ New"</p>
            </div>
        )
    }
    return(
        <div className='note-viewer'>
            <input
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
                value={selectedNote.content}
                onChange={(event)=>updateContent(event.target.value)}
            >
            </textarea>
        </div>
    )
}