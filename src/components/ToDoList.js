import React from 'react';
import { Container } from 'react-bootstrap';
import Tasks from './Tasks';
import AddTask from './AddTask';

function ToDoList() {
    return (
        <Container>
            <AddTask />
            <Tasks />
        </Container>
    );
}

export default ToDoList;
