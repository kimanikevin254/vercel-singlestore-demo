// import the API handle
import { api } from "@/utils/apiHandle";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    const { todo } = await req.json();

    try {
        const response = await api.exec({
            execInput: {
                database: "mydb",
                sql: "INSERT INTO todos (todo) VALUES (?)",
                args: [todo],
            },
        });

        return NextResponse.json(
            {
                result: response,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: "Unable to create todo",
            },
            {
                status: 400,
            }
        );
    }
}
