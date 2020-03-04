import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import Tasks from './Tasks';
import AddTask from './AddTask';

function ToDoList() {
    return (
        <Container className="text-center border border-light">
            <AddTask />
            <Tasks />
        </Container>
    );
}

export default ToDoList;
