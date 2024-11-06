"use client"
import axios from "axios"
import { useRouter } from "next/navigation"

type Manga = {
    id: number;
    title: string;
    author: string;
    description: string;
    imageUrl: string;
    chapters: number;
}

const DeleteManga = ({manga}: {manga: Manga}) => {
    const router =useRouter()


    const handleDelete = async (mangaId: number)=> {
        await axios.delete(`/api/manga/${mangaId}`)
        router.refresh()
    }

  return (
    <div>
        <button 
            onClick={() => handleDelete(manga.id)}
            className="btn bg-teal-200 px-2 py-1 text-black rounded-md"    
        >Delete</button>
    </div>
  )
}

export default DeleteManga