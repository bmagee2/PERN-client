import React, {useState} from 'react';
import {Table, Button} from 'reactstrap';
import MonologueModal from './MonologueModal';
// import APIURL from '../../helpers/environment';      // import environment.js


// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//   }));

const MyMonologues = (props) => {

    // const classes = useStyles();
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    // DELETE
    const deleteMonologue = (monologue) => {
        fetch(`http://localhost:4000/monologue/${monologue.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchMonologues())
    }

    // ********
    const monologueMapper = () => {
        return props.monologues.map((monologue, index) => {
            return(
                <tr key={index}>
                    <th>{monologue.characterName}</th>
                    <td>{monologue.playTitle}</td>
                    {/* <button onClick={toggle}>See more Information</button> */}
                    <MonologueModal toggle={toggle} modal={modal} monologue={monologue.monologue}/>
                    <td>{monologue.category}</td>
                    <td>{monologue.genre}</td>
                    <td>
                        {/* <Button variant="outlined">Update Monologue</Button> */}
                        {/* <Button variant="outlined" onClick={() => {editMonologue(monologue); props.updateOn()}}>Update Monologue</Button> */}

                        {/* <Button variant="outlined">View Monologue</Button> */}
                        {/* <Button variant="outlined" onClick={() => {viewMonologue(monologue)}}>View Monologue</Button> */}
                        <Button color="warning" onClick={() => {props.editUpdateMonologue(monologue); props.updateOn()}}>Update</Button>
                        {/* <Button color="warning" onClick={() => {props.editUpdateMonologue(monologue); props.updateOn()}}>Update</Button> */}
                        
                        <Button color="danger" onClick={() => {deleteMonologue(monologue)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
        
    }
   

    return(

        <>
        <h3>my monolgues</h3>
        <hr/>
        <Table >
            <thead>
                <tr>
                    <th>character</th>
                    <th>title</th>
                    <th>Monologue</th>
                    <th>category</th>
                    <th>genre</th>
                </tr>
            </thead>
            <tbody>

               {monologueMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default MyMonologues;