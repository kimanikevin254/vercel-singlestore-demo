import React from "react";

const Todo = ({ todo }) => {
    return (
        <div className="bg-white p-4 my-2 rounded-md shadow-md">
            <p className="text-lg">{todo.todo}</p>
        </div>
    );
};

export default Todo;