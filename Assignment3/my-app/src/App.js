import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useHistory } from "react-router-dom";
import {useState} from 'react';
import './App.css';
import Restaurants from './components/Restaurants';
import Restaurant from './components/Restaurant';
import NotFound from './components/NotFound';
import About from './components/About'

function App() { 
  const [searchString, setSearchString] = useState(""); 
  let history = useHistory();
  function handleSubmit(e){
      e.preventDefault();            
      history.push(`/restaurants?borough=${searchString}`);
      setSearchString("");     
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>New York Restaurants</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/restaurants">
              <Nav.Link>Full List</Nav.Link>
            </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav>
        <Form onSubmit={handleSubmit} inline>
          <FormControl type="text" placeholder="Borough" className="mr-sm-2" value={searchString} onChange={(e) => setSearchString(e.target.value)} />
          <Button type="submit" variant="outline-success">Search</Button>
        </Form>
        </Navbar.Collapse>
      </Navbar>
      <br />
      <Container>
        <Row>
          <Col>
            <Switch>                
                <Route exact path="/" render={() => ( <Redirect push to="/Restaurants" />)} />
                <Route exact path="/about" render={()=>(<About />)} />
                <Route exact path="/Restaurants" render={(props)=>(<Restaurants query={props.location.search}/>)} />
                <Route path="/Restaurant/:id" render={(props)=>(<Restaurant id={props.match.params.id} />)} />
                <Route render={()=>(<NotFound />)} />
            </Switch>
          </Col>
        </Row>
      </Container>
      <br />      
    </>
  );
}

export default App;
