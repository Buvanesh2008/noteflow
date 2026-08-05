import './styles/App.css';
import Sidebar from './components/Sidebar.jsx';
import NoteViewer from './components/NoteViewer.jsx';
import NoteList from './components/NoteList.jsx';
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
    
    return [
      {
        id: 1,
        title: "React Basics",
        content: "Learned about components, props, and state. Next topic: useEffect.",
        createdAt: new Date("2026-08-01T09:30:00")
      },
      {
        id: 2,
        title: "MongoDB Setup",
        content: "Installed MongoDB Community Edition. Successfully connected using Mongoose.",
        createdAt: new Date("2026-08-01T10:15:00")
      },
      {
        id: 3,
        title: "CEG Admission",
        content: "Carry allotment order, community certificate, income certificate, passport-size photos, and medical fitness certificate.",
        createdAt: new Date("2026-08-01T11:00:00")
      },
      {
        id: 4,
        title: "Project Ideas",
        content: "Build a DevBoard after completing the Notes App. Later add authentication and Markdown support.",
        createdAt: new Date("2026-08-01T11:45:00")
      },
      {
        id: 5,
        title: "Express Notes",
        content: "Understand routing, middleware, REST APIs, and connect Express with MongoDB.",
        createdAt: new Date("2026-08-01T12:20:00")
      }
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
