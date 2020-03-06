import React from 'react';
import { Container } from 'react-bootstrap';
import { TasksProvider } from '../contexts/TasksContext';
import AddTask from './AddTask';
import Tasks from './Tasks';

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
