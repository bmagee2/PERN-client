import React, {useState} from 'react';
import {Form, FormGroup, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../../../../helpers/environment';


import styled from 'styled-components'

const Button = styled.button`
    margin-top: 1em;
    border: 2px solid black;
    border-radius: 2px;
    height: 50px;
    width: 200px;
    background-color: rgb(255, 255, 0);
    cursor: pointer;
    font-size: 20px;
    margin-left: 60px;
    font-family: MOMCAKE-BOLD;
`;

const Label = styled.label`
    font-size: 20px;
    font-weight: bold;
    font-family: Colombia-Regular;
    margin-bottom: 2px;
`;

const EditMonologue = (props)=>{
    console.log(props)

    const [editCharacter, setEditCharacter] = useState(props.monologueToUpdate.characterName);
    const [editTitle, setEditTitle] = useState(props.monologueToUpdate.playTitle);
    const [editCategory, setEditCategory] = useState(props.monologueToUpdate.category);
    const [editGenre, setEditGenre] = useState(props.monologueToUpdate.genre);
    const [editSynopsis, setEditSynopsis] = useState(props.monologueToUpdate.sceneSynopsis);
    const [editMonologue, setEditMonologue] = useState(props.monologueToUpdate.monologue);
    const [editNotes, setEditNotes] = useState(props.monologueToUpdate.notes);
    

    // PUT -- UPDATE
    const monologueEdit = (e,monologue)=>{
        e.preventDefault();
        const id = props.monologueToUpdate.id;
        //fetch(`http://localhost:4000/monologue/${id}`
        // fetch(`${APIURL}/monologue/${id}`
        fetch(`${APIURL}/monologue/${id}`,{
            method: "PUT",
            body: JSON.stringify({
                playTitle: editTitle,
                characterName: editCharacter,
                category: editCategory,
                genre: editGenre,
                sceneSynopsis: editSynopsis,
                monologue: editMonologue,
                notes: editNotes
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": props.token
            })
        })
        .then(res=>{
            props.fetchMonologues();
            props.updateOff();
        })
    }
    return(
        <Modal isOpen = {true}>
            <ModalHeader>Edit Your Monologue</ModalHeader>
            <ModalBody>
                <Form onSubmit = {monologueEdit}>
                    <FormGroup>
                        <Label htmlFor = "characterName">Edit Character Name:</Label>
                        <Input name = "characterName" value = {editCharacter} onChange = {(e=>setEditCharacter(e.target.value))}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = "playTitle">Edit Title of Play:</Label>
                        <Input name = "playTitle" value = {editTitle} onChange = {e=>setEditTitle(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = "category">Edit Category:</Label>
                        <Input name = "category" value = {editCategory} type = "select" onChange = {e=>setEditCategory(e.target.value)}>
                            <option></option>
                            <option value = "Classical">Classical</option>
                            <option value = "Contemporary">Contemporary</option>
                            <option value = "Shakespearean">Shakespearean</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = "genre">Edit Genre:</Label>
                        <Input name = "genre" value = {editGenre} type = "select" onChange = {e=>setEditGenre(e.target.value)}>
                            <option></option>
                            <option value = "Drama">Drama</option>
                            <option value = "Comedy">Comedy</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = "sceneSynopsis">Edit Scene Synopsis:</Label>
                        <Input name = "sceneSynopsis" value = {editSynopsis} onChange = {(e=>setEditSynopsis(e.target.value))}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = "monologue">Edit Monologue:</Label>
                        <Input name = "monologue" value = {editMonologue} onChange = {(e=>setEditMonologue(e.target.value))}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor = "notes">Edit Notes:</Label>
                        <Input name = "notes" value = {editNotes} onChange = {(e=>setEditNotes(e.target.value))}/>
                    </FormGroup>
                    <Button type="submit">Confirm Edits</Button>
                    {/* <Button>Delete Monologue</Button> */}
                    {/* <Button variant="outlined" onClick={() => {deleteMonologue(monologue)}}>Delete Monologue</Button> */}
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default EditMonologue;
