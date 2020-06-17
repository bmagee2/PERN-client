import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 700,
        display: 'flex',
        flexWrap: 'wrap'
      },
    },
  }));

const AddMonologue = (props) => {

    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

    const [playTitle, setPlayTitle] = useState('');
    const [characterName, setCharacterName] = useState('');
    const [category, setCategory] = useState('');
    const [genre, setGenre] = useState('');
    const [sceneSynopsis, setSceneSynopsis] = useState('');
    const [monologue, setMonologue] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/monologue/post', {
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
            props.fetchWorkouts();
        })
    }

    return(

        <div className={classes.root} noValidate autoComplete="off">
        <h3>Add a Monologue</h3>
        <Form onSubmit={handleSubmit}>
            
            <TextField
                    id="outlined-multiline-static"
                    label="Character's Name"
                    multiline
                    rows={1}
                    defaultValue="Add Character"
                    variant="outlined"
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Title"
                    multiline
                    rows={1}
                    defaultValue="Add Title"
                    variant="outlined"
                />
                <FormGroup>
                <Label htmlFor="definition">Category</Label>
                <Input name="definition" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Classical">Classical</option>
                    <option value="Contemporary">Contemporary</option>
                    <option value="Shakespearean">Shakespearean</option>
                </Input>    
            </FormGroup>
                <TextField
                    id="outlined-multiline-static"
                    label="Scene"
                    multiline
                    rows={3}
                    defaultValue="Add Scene Synopsis"
                    variant="outlined"
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Monologue"
                    multiline
                    rows={6}
                    defaultValue="Add Monologue"
                    variant="outlined"
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Notes"
                    multiline
                    rows={3}
                    defaultValue="Add Notes"
                    variant="outlined"
                />
           
            <Button type="submit">Add Monologue</Button>
        </Form>
    </div>
)
}
//         <form className={classes.root} noValidate autoComplete="off">
//       <div>
//         <TextField
//           id="standard-multiline-flexible"
//           label="Multiline"
//           multiline
//           rowsMax={4}
//           value={value}
//           onChange={handleChange}
//         />
//         <TextField
//           id="standard-textarea"
//           label="Multiline Placeholder"
//           placeholder="Placeholder"
//           multiline
//         />
//         <TextField
//           id="standard-multiline-static"
//           label="Multiline"
//           multiline
//           rows={4}
//           defaultValue="Default Value"
//         />
//       </div>
//       <div>
//         <TextField
//           id="filled-multiline-flexible"
//           label="Multiline"
//           multiline
//           rowsMax={4}
//           value={value}
//           onChange={handleChange}
//           variant="filled"
//         />
//         <TextField
//           id="filled-textarea"
//           label="Multiline Placeholder"
//           placeholder="Placeholder"
//           multiline
//           variant="filled"
//         />
//         <TextField
//           id="filled-multiline-static"
//           label="Multiline"
//           multiline
//           rows={4}
//           defaultValue="Default Value"
//           variant="filled"
//         />
//       </div>
//       <div>
//         <TextField
//           id="outlined-multiline-flexible"
//           label="Multiline"
//           multiline
//           rowsMax={4}
//           value={value}
//           onChange={handleChange}
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-textarea"
//           label="Multiline Placeholder"
//           placeholder="Placeholder"
//           multiline
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-multiline-static"
//           label="Multiline"
//           multiline
//           rows={4}
//           defaultValue="Default Value"
//           variant="outlined"
//         />
//       </div>
//     </form>
//   );
// }



export default AddMonologue;