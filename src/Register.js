import React, { useState, useEffect, useRef } from 'react';
import {  Container, Row, Col, Button} from 'react-bootstrap';
import { useForm } from "react-hook-form";

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0vuGzKidqW9Hp3PjqRMtOPnyCz20GphA",
  authDomain: "wadf-6b0c6.firebaseapp.com",
  databaseURL: "https://wadf-6b0c6-default-rtdb.firebaseio.com",
  projectId: "wadf-6b0c6",
  storageBucket: "wadf-6b0c6.appspot.com",
  messagingSenderId: "802125222623",
  appId: "1:802125222623:web:341d7f71dd644a99174f6a",
  measurementId: "G-WCPXQMG6X9"
};

firebase.initializeApp(firebaseConfig)

function writeData(){
  firebase.database().ref("User").set({
    name: document.getElementById("name").nodeValue.anchor,
    phno: document.getElementById("phno").nodeValue.anchor,
    aTime: document.getElementById("aTime").nodeValue.anchor,
    dTime: document.getElementById("dTime").nodeValue.anchor,
    reason: document.getElementById("reason").nodeValue.anchor
  });
}
function getData() {
  firebase.database().ref('/').once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot){
      var childKey =childSnapshot.apiKey;
      var childData = childSnapshot.val();
      document.getElementById("data").innerHTML = childData['name'] + ", " + childData['age']; 
    })
  })
}

export default function Register() {
  const [amphurList, setAmphurList] = useState([])
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <h1>Member Registration</h1>
        <Container>
          <Row>
            <Col>Name</Col>
            <Col><input type="text" name="name" ref={register} /></Col>
          </Row>
          <Row>
            <Col>Phone Number</Col>
            <Col><input type="number" name="phno" ref={register} /></Col>
          </Row>
          <Row>
            <Col>Arrival Time</Col>
            <Col><input type="text" name="aTime" ref={register} /></Col>
          </Row>
          <Row>
            <Col>Departure Time</Col>
            <Col><input type="text" name="dTime" ref={register} /></Col>
          </Row>
          <Row>
            <Col>Reason</Col>
            <Col><input type="text" name="reason" ref={register} /></Col>
          </Row>
          <Button variant="outline-dark" type="submit">Register</Button>
        </Container>
      </Container>
    </form>
  )
  // function ChatRoom() {
  //   const dummy = useRef();
  //   const messagesRef = firestore.collection('messages');
  //   const query = messagesRef.orderBy('createdAt', 'asc').limitToLast(25);
  //   const [messages] = useCollectionData(query, { idField: 'id' });
  //   const [formValue, setFormValue] = useState('');
  
  //   const scrollToBottom = () => {
  //     dummy.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  
  //   useEffect(scrollToBottom, [messages]);
  
  //   const sendMessage = async (e) => {
  //     e.preventDefault();
  
  //     const { displayName, uid, photoURL } = auth.currentUser;
  
  //     await messagesRef.add({
  //       user: displayName,
  //       body: formValue,
  //       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  //       uid: uid,
  //       photoURL: photoURL
  //     })
  
  //     setFormValue('');
  //     dummy.current.scrollIntoView({ behavior: 'smooth' });
  //   }

}
