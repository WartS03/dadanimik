import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import type { Manga } from "@prisma/client";
const prisma = new PrismaClient()

export const POST = async (request:Request)=>{
    const body:Manga = await request.json()
    const newManga = await prisma.manga.create({
        data:{
            title: body.title,
            author: body.author,
            description: body.description,
            imageUrl: body.imageUrl,
            chapters: Number(body.chapters),
        }
    })
    return NextResponse.json(newManga, {status: 201})
}
