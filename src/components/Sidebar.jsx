import '../styles/Sidebar.css'
import Header from './Header'
import NoteList from './NoteList'
import SearchBar from './SearchBar'
import Toolbar from './Toolbar'

export default function Sidebar({notes, selectedNote ,setSelectedNote, createNewNote, deleteNote, searchQuery, setSearchQuery }){
    return(
        <div className="side-bar">
            <Header />
            <SearchBar 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            <Toolbar 
                createNewNote={createNewNote} 
                deleteNote={deleteNote} 
                selectedNote={selectedNote} 
                setSelectedNote={setSelectedNote}
            />

            <NoteList 
                notes={notes} 
                selectedNote={selectedNote} 
                setSelectedNote={setSelectedNote}
            />
        </div>
    )
}