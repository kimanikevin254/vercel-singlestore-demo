"use client";

import React, { useEffect, useState } from "react";
import CreateTodo from "../components/CreateTodo";
import TodoList from "../components/TodoList";

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const retrieveTodos = async () => {
        setIsLoading(true);

        try {
            const res = await fetch("/api/todos/retrieve");
            const data = await res.json();
            setTodos(data.todos);
            console.log(data);
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        retrieveTodos();
    }, []);

    console.log(todos);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Todo App</h1>
            <CreateTodo retrieveTodos={retrieveTodos} />
            {isLoading ? (
                <p>Retrieving todos...</p>
            ) : (
                <TodoList todos={todos} />
            )}
        </div>
    );
};

export default Home;
