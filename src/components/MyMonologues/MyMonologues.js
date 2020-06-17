import React from 'react';
import {Table} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const MyMonologues = (props) => {

    const classes = useStyles();


    const monologueMapper = () => {
        // return props.workouts.map((workout, index) => {
            return(
                <tr>
                    <th>character</th>
                    <td>title</td>
                    <td>category</td>
                    <td>genre</td>
                    <td>
                        <Button variant="outlined" >View</Button>                        
                    </td>
                </tr>
            )
        // })
        
    }



    return(

        <>
        <h3>my monolgues</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>character</th>
                    <th>title</th>
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