import './styles/App.css';
import Sidebar from './components/Sidebar.jsx';
import NoteViewer from './components/NoteViewer.jsx';
import { useState, useEffect, useRef } from 'react';



function App() {

  const [notes, setNotes] = useState(()=>{

    //loading the existing notes from the local storage
    const savedNotes = localStorage.getItem("notes")
    // console.log(savedNotes);

    if(savedNotes !== null){
      return (JSON.parse(savedNotes))
      // console.log("Loaded from localStorage");
    }
    
    return[
  {
    id: 1,
    title: "👋 Welcome to NoteFlow",
    content: `Thanks for trying NoteFlow!

Here's what you can do:

• Create notes using the New button.
• Edit the title and content instantly.
• Search notes by title.
• Delete notes you no longer need.
• Your notes are automatically saved in your browser.

Happy note-taking!`,
    createdAt: new Date("2026-08-06T10:00:00"),
  },

  {
    id: 2,
    title: "⌨️ Keyboard Tips",
    content: `• Click any note to start editing.
• Titles update instantly.
• Notes are saved automatically.
• Refresh the page anytime without losing your work.`,
    createdAt: new Date("2026-08-06T10:05:00"),
  },

  {
    id: 3,
    title: "🛒 Shopping List",
    content: `• Coffee
• Bread
• Milk
• USB-C Cable
• Notebook`,
    createdAt: new Date("2026-08-06T10:10:00"),
  },

  {
    id: 4,
    title: "⚛️ React Concepts",
    content: `✔ Components
✔ Props
✔ useState
✔ useEffect
✔ Local Storage
✔ Conditional Rendering`,
    createdAt: new Date("2026-08-06T10:15:00"),
  },

  {
    id: 5,
    title: "🚀 Future Plans",
    content: `• Pin notes
• Tags & categories
• Responsive mobile layout
• Express backend
• MongoDB database
• User authentication`,
    createdAt: new Date("2026-08-06T10:20:00"),
  },
]
    }


  
  );

  //****************************************************/

  //creating, updating notes

  const [selectedNote, setSelectedNote] = useState(null); 

  function createNewNote(){
    const newNote = {
      id: crypto.randomUUID(),
      title: "untitled",
      content: "",
      createdAt: new Date(),
    }
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
    setSearchQuery("")
  }

  function updateTitle(newTitle) {

  

    const updatedNotes = notes.map((note)=>{

      if(note.id === selectedNote.id){
        
        return{
          ...note,
          title: newTitle,
        }
      }
      return note
    })
    setNotes(updatedNotes)
    setSelectedNote(
      updatedNotes.find((note)=>note.id === selectedNote.id)
    )
    
  }

  function updateContent(newContent) {
    const updatedNotes = notes.map((note)=>{
      if(note.id === selectedNote.id){
        return{
          ...note,
          content: newContent,
        }
      }
      return note
    })
    setNotes(updatedNotes)
    setSelectedNote(
      updatedNotes.find((note)=>note.id === selectedNote.id)
    )
  }

  function deleteNote(id) {
    const updatedNotes = notes.filter((note) => {
      return note.id !== id;
    });

    setNotes(updatedNotes)

    if(selectedNote && selectedNote.id === id){
      setSelectedNote(null)
    }
  }



  //****************************************************/

  //searching

  const [searchQuery, setSearchQuery] = useState('')

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
  )
  //****************************************************/


  useEffect(()=>{
    //save the current notes after modification

    //console.log("Saving...", notes);

    localStorage.setItem("notes" ,JSON.stringify(notes))
  }, [notes])

  return (
    <div className='app'>
      <Sidebar 
        notes={filteredNotes} 
        selectedNote={selectedNote} 
        setSelectedNote={setSelectedNote}
        createNewNote={createNewNote}
        deleteNote={deleteNote}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <NoteViewer 
        selectedNote={selectedNote} 
        updateTitle={updateTitle}
        updateContent={updateContent}
      />
      
    </div>
  )
}

export default App
