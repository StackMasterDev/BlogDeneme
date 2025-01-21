import connect from "@/db/dbConnect";
import Blog from "../../../models/BlogSchema"
import { NextResponse } from "next/server";

export const GET = async (request) => {
    try {
        await connect();
        const blogs = await Blog.find();
        return new NextResponse(JSON.stringify(blogs), { status: 200 });
    }
    catch (err) {
        return new NextResponse("database error", { status: 500 })
    }
}

export const POST = async (request) => {
    try {
        await connect();
        const body = await request.json(); 
        const blog = await Blog.create(body);
        return new NextResponse("Ekleme başarılı", { status: 201 });
    } catch (err) {
        console.error("Hata Detayı:", err);
        return new NextResponse("Hata var", { status: 500 });
    }
};
