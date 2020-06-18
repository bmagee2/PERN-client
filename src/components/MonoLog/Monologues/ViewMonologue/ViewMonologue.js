// import React, {useState} from 'react';
// import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';

// const ViewMonologue = (props)=>{


    


//     // GET -- MONOLOGUE BY CHARACTER NAME
//     const fetchOneMonologue = () => {
//     fetch(`http://localhost:4000/monologue/${monologue.id}`, {
//           method: 'GET',
//           headers: new Headers ({
//               'Content-Type': 'application/json',
//               'Authorization': props.token
//           })
//       })
//           .then((res) => res.json())
//           .then((logData) => {
//               console.log(logData.monologues)
//               setMonologues(logData.monologues)
//       })
//   }

//     return(
//         <Modal isOpen = {true}>
//             <ModalHeader>Your Monologue</ModalHeader>
//             <ModalBody>
//                 <Form >
//                     <FormGroup>
//                         <Label htmlFor = "characterName">Character Name:</Label>
//                         <Input name = "characterName" value = {characterName} onChange = {(e=>setEditCharacter(e.target.value))}/>
//                     </FormGroup>
//                     <FormGroup>
//                         <Label htmlFor = "playTitle">Title of Play:</Label>
//                         <Input name = "playTitle" value = {playTitle} onChange = {e=>setEditTitle(e.target.value)}/>
//                     </FormGroup>
//                     <FormGroup>
//                         <Label htmlFor = "category">Category:</Label>
//                         <Input name = "category" value = {category} type = "select" onChange = {e=>setEditCategory(e.target.value)}>
//                             {/* <option></option>
//                             <option value = "Classical">Classical</option>
//                             <option value = "Contemporary">Contemporary</option>
//                             <option value = "Shakespearean">Shakespearean</option> */}
//                         </Input>
//                     </FormGroup>
//                     <FormGroup>
//                         <Label htmlFor = "genre">Genre:</Label>
//                         <TextField name = "genre" value = {genre} type = "select" >
//                             {/* <option></option>
//                             <option value = "Drama">Drama</option>
//                             <option value = "Comedy">Comedy</option> */}
//                         </Input>
//                     </FormGroup>
//                     <FormGroup>
//                         <Label htmlFor = "sceneSynopsis">Scene Synopsis:</Label>
//                         <Input name = "sceneSynopsis" value = {sceneSynopsis} />
//                     </FormGroup>
//                     <FormGroup>
//                         <Label htmlFor = "monologue">Monologue:</Label>
//                         <Input name = "monologue" value = {monologue} />
//                     </FormGroup>
//                     <FormGroup>
//                         <Label htmlFor = "notes">Notes:</Label>
//                         <Input name = "notes" value = {notes} />
//                     </FormGroup>
//                     <Button type="submit">Close Monologue</Button>
//                 </Form>
//             </ModalBody>
//         </Modal>
//     )
// }

// export default ViewMonologue;
