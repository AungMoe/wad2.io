import { Link } from "react-router-dom";

import {
  Jumbotron, Button
} from 'react-bootstrap';

export default function Home() {
  return (
    <Jumbotron>
      <h1>SPR</h1>
      <p>Welcome to SMV's Parking Request(SPR) system.</p>
      <p>As we have limited parking spaces and our company would want most of them for the customers.
        But we also want to give the space to those who has to drive to work. So if you are driving to work,
         let us know by singing up here. 
      </p>
      <p>We wish you have a happy day!</p>
        
      <Link to="/register">
        <Button className="btn-secondary">Sign Up</Button>
      </Link>
    </Jumbotron>
  )
}
