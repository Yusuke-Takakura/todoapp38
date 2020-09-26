import React, { useState } from 'react';
import shortid from 'shortid';

import Title from './Title';
import List from './List';
import Form from './Form';

//props:親から子にコンポーネントを渡す
//state:Reactの画面の変更をさせるための変数===画面の変更に伴う変数はstateで扱わなくてはならない

const App = () => {
    const [username, setUsername] = useState('悠輔');
    //const[stateの値,stateを変更する関数]=useState(初期値)
    const changeName = () => {
        setUsername('taro');
    };
    const [todos, setTodos] = useState([
        { content: '掃除', id: shortid.generate() },
        { content: '洗濯', id: shortid.generate() },
    ]);

    const addTodo = (text) => {
        setTodos([...todos, { content: text, id: shortid.generate() }]);
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    //stateを使わない
    /*
    let name = '悠輔';
    const changeName = () => {
        name = 'taro';
        console.log(name);
    }
    */
    return (
        <>
            <Title name={username} />
            <List deleteTodo={deleteTodo} todos={todos} />
            <Form addTodo={addTodo} />
            <button onClick={changeName}>名前が変わるボタン</button>
        </>
    );
};

export default App;