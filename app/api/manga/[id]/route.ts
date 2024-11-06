import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient()

export const DELETE = async (request: Request, {params}: {params: {id: string}})=>{
    const manga = await prisma.manga.delete({
        where:{
            id: Number(params.id)
        }
    })
    return NextResponse.json(manga, {status: 200})
}
