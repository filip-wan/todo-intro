import React from 'react';
import { Container } from 'react-bootstrap';
import Tasks from './Tasks';
import AddTask from './AddTask';
import { TasksProvider } from '../contexts/TasksContext';

function App() {
    return (
        <TasksProvider>
            <Container>
                <AddTask />
                <Tasks />
            </Container>
        </TasksProvider>
    );
}

export default App;
