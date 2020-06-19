import React, {useState, useEffect} from 'react';
import {FormGroup, Input} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
    margin-left: 40%;
    font-family: MOMCAKE-BOLD;
`;

const Form = styled.form`
    width: 80%;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: 60px;
    margin-right: 40px;
`;

const Label = styled.label`
    font-size: 25px;
    font-family: Colombia-Regular;
    margin-bottom: 2px;
`;



// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& .MuiTextField-root': {
//         margin: theme.spacing(1),
//         width: 700,
//         display: 'flex',
//         flexWrap: 'wrap'
//       },
//     },
//   }));

const AddMonologue = (props) => {

    // const classes = useStyles();
    // const [value, setValue] = React.useState('Controlled');


    const [playTitle, setPlayTitle] = useState('');
    const [characterName, setCharacterName] = useState('');
    const [category, setCategory] = useState('');
    const [genre, setGenre] = useState('');
    const [sceneSynopsis, setSceneSynopsis] = useState('');
    const [monologue, setMonologue] = useState('');
    const [notes, setNotes] = useState('');

    // POST
    const handleSubmit = (e) => {
        e.preventDefault();
        // fetch('http://localhost:4000/monologue/post'
        //fetch(`${APIURL}/monologue/post`
        fetch(`${APIURL}/monologue/post`, {
            method: 'POST',
            body: JSON.stringify({monologue: {
                playTitle: playTitle,
                characterName: characterName,
                category: category,
                genre: genre,
                sceneSynopsis: sceneSynopsis,
                monologue: monologue,
                notes: notes
            }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setPlayTitle('');
            setCharacterName('');
            setCategory('');
            setGenre('');
            setSceneSynopsis('');
            setMonologue('');
            setNotes('');
            props.fetchMonologues();
        })
    }


    return(

        // <div className={classes.root} noValidate autoComplete="off">
        <>    
            <Form onSubmit={handleSubmit}>
            <h3>Add a Monologue</h3>
                <FormGroup>
                    <Label htmlFor="characterName">Character Name:</Label>
                    <Input name="characterName" value={characterName} onChange={(e) => setCharacterName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="playTitle">Title of Play:</Label>
                    <Input name="playTitle" value={playTitle} onChange={(e) => setPlayTitle(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="category">Category:</Label>
                    <Input name="category" type="select" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option></option>
                        <option value='Classical'>Classical</option> 
                        <option value='Contemporary'>Contemporary</option>
                        <option value='Shakespearean'>Shakespearean</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                <Label htmlFor="genre">Genre:</Label>
                    <Input name="genre" type="select" value={genre} onChange={(e) => setGenre(e.target.value)}>
                        <option></option>
                        <option value="Drama">Drama</option>
                        <option value="Comedy">Comedy</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="sceneSynopsis">Scene Synopsis:</Label>
                    <Input size="lg" name="sceneSynopsis" value={sceneSynopsis} onChange={(e) => setSceneSynopsis(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="monologue">Monologue:</Label>
                    <Input size="lg" name="monologue" value={monologue} onChange={(e) => setMonologue(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="notes">Notes:</Label>
                    <Input name="notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
                </FormGroup>
                <br />
                <Button type="submit">Add Monologue!</Button>
            </Form>
        </>
)
}

export default AddMonologue;


