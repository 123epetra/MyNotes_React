
import React, {useEffect, useState} from 'react'
// import notes from '../assets/data'
import ListItem from '../component/ListItem'
import AddIcon from '../component/AddNote'

const NoteSection = () => {
    let [notes, setNotes] = useState([])

    useEffect(()=>{
        getNotes()
    }, [])

    let getNotes = async () =>{
        let response = await fetch('http://localhost:5000/notes')
        let data = await response.json()
        setNotes(data)
    }
  return (
    <div className='notes'>
        <div className='notes-header'>
            <h2 className='notes-title'>&#9782; Note </h2>
            <p className='notes-count'>{notes.length}</p>
        </div>
      <div className='notes-list'>
        {notes.map((note, index) => (
            <ListItem key={index}  note={note}/>
        ))}
      </div>
      <AddIcon />
    </div>
  )
}

export default NoteSection
