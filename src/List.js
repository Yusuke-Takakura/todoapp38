import React from 'react';
import Item from './Item';

const List = ({ todos, deleteTodo }) => {

    //{}中身はブーリアンは反映されない，配列は反映される
    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <Item
                        key={todo.id}
                        id={todo.id}
                        deleteTodo={deleteTodo}
                        content={todo.content}
                    />
                );
            })}
        </ul>
    );
};

export default List;