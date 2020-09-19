import React from 'react';

import Title from './Title';
import Form from './Form';
import List from './List';



const App = () => {
    const name = '悠輔';
    return (
        <>
            <Title name={name} />
            <List />
            <Form />
        </>
    );
};

export default App;