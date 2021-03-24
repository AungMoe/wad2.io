import { Link } from "react-router-dom";

import {
  Jumbotron, Button
} from 'react-bootstrap';
export default function Report() {
  return (
    <Jumbotron>
      <h1>Report List</h1>
      <p>I was planning to get the data back from firebase to show the list but cound't do it</p>
      <Link to="/delete">
        <Button className="btn-secondary">Delete data</Button>
      </Link>
    </Jumbotron>
  )
}
