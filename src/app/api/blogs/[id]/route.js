import connect from "@/db/dbConnect";
import Blog from "../../../../models/BlogSchema"
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {

    const { id } = params;
    try {
        await connect();
        const blog = await Blog.findById(id);
        return new NextResponse(JSON.stringify(blog), { status: 200 });
    }
    catch (err) {
        return new NextResponse("database error", { status: 500 })
    }
}

export const DELETE = async (req, { params }) => {
    const { id } = params;

    try {
        await connect();
        const blog = await Blog.findByIdAndDelete(id);
        return new NextResponse("içerik silindi")
    }
    catch (err) {
        return new NextResponse("database error")
    }
}

export const UPDATE = async (req, { params }) => {

}