// import the API handle
import { api } from "@/utils/apiHandle";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        const response = await api.rows({
            queryInput: {
                database: "mydb",
                sql: "SELECT * FROM todos;",
            },
        });

        console.log(response.results[0].rows);

        return NextResponse.json(
            {
                todos: response.results[0].rows,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: "Unable to fetch todos",
            },
            {
                status: 400,
            }
        );
    }
}
