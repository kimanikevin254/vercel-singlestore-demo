"use client";

import React, { useState } from "react";

const CreateTodo = ({ retrieveTodos }) => {
    const [todo, setTodo] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleAddTodo = async () => {
        if (todo.trim()) {
            setTodo("");

            setIsLoading(true);

            try {
                const res = await fetch("/api/todos/create", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        todo: todo,
                    }),
                });

                const data = await res.json();

                console.log(data);

                if (data.result.lastInsertId) {
                    alert("Todo added successfully");
                    retrieveTodos();
                }
            } catch (error) {
                alert("Unable to create todo");
                console.log(error);
            }

            setIsLoading(false);
        }
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter a new todo"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                className="ml-2 p-2 bg-blue-500 text-white rounded-md"
                onClick={handleAddTodo}
                disabled={isLoading}
            >
                {isLoading ? "Creating..." : "Add Todo"}
            </button>
        </div>
    );
};

export default CreateTodo;