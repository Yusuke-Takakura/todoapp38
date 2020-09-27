import React, { useState } from 'react';

//入力内容が送信されたらリセットして欲しい
//空では送信できないようにする

const Form = ({ addTodo }) => {
    const [text, setText] = useState('');
    const handleTextChange = (e) => {
        setText(e.target.value);
    };
    console.log(text)

    const handleSubmit = (e) => {
        e.preventDefault()
        //tirm()は空欄を認識しないプロパティ
        if (text.trim().length !== 0) {
            addTodo(text);
            setText('');
        } else {
            alert('うんち')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={handleTextChange} />
            <button>送信</button>
        </form>
    )
}

export default Form;