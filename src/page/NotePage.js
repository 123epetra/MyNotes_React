import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = (  ) => {
//   let note_id = match.params.id; // Corrected from 'param' to 'params'
    const navigate= useNavigate();
    const { id } = useParams();

    let [note, setNotes] = useState([])

    useEffect(()=>{
        getNotes()

    },[id])

    let getNotes = async ()=>{
        if(id==='new') return
        let response = await fetch(`http://localhost:5000/notes/${id}`)
        let data = await response.json()
        setNotes(data)
    }

    
    let updateNote = async() =>{
        await fetch(`http://localhost:5000/notes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...note, 'updated': new Date()})

        })
    }
    let createNote = async() =>{
        await fetch(`http://localhost:5000/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...note, 'updated': new Date()})

        })
    }
    let deleteNote = async() =>{
        await fetch(`http://localhost:5000/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)

        })
        navigate('/')
    }

    let handleSubmit = () => {
        if (id !== 'new' && !note.body){
            deleteNote()
        }
        else if ( id !== 'new'){
            updateNote()

        }
        else if (id === 'new' && note !== null){
            createNote()
        }
        
        navigate('/')

    }


  return (
    
    <div className='note'>
        <div className='note-header'>
            <h3>
                <Link to='/' >
                    <ArrowLeft  onClick={handleSubmit}/>
                    

                </Link>
            </h3>
            {id !== 'new' ? (
                <button onClick={deleteNote}> Delete </button>
            ): (
                <button onClick={handleSubmit}> Done </button>
            )}
            
            
        

        </div>
        <textarea onChange={(e) => {setNotes({...note, 'body': e.target.value})}} value={note?.body || ''}>

        </textarea>
        
        
    </div>
  );
}

export default NotePage;
