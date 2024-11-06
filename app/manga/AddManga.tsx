"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { SyntheticEvent, useState } from 'react'

const AddManga = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [desc, setDesc] = useState("")
    const [image, setImge] = useState("")
    const [chap, setChap] = useState("")

    const router =useRouter()

    const createManga = async (e: SyntheticEvent) => {
        e.preventDefault()
        await axios.post('api/manga', {
          title: title,
          author: author,
          description: desc,
          imageUrl: image,
          chapters: Number(chap)
        })
        setTitle("")
        setAuthor("")
        setDesc("")
        setImge("")
        setChap("")
        router.refresh()
      }

  return (
    <div>
        <form className='m-2'>
        <h2>Add New Manga</h2>
            <input
                className='mr-3 border-2 border-gray-500 px-1 rounded-md'
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                className='mr-3 border-2 border-gray-500 px-1 rounded-md'
                type="text"
                placeholder="Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />
            <input
                className='mr-3 border-2 border-gray-500 px-1 rounded-md'
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <input
                className='mr-3 border-2 border-gray-500 px-1 rounded-md'
                type="text"
                placeholder="Cover URL"
                value={image}
                onChange={(e) => setImge(e.target.value)}
            />
            <input
                className='mr-3 border-2 border-gray-500 px-1 rounded-md'
                type="number"
                placeholder="chapter"
                value={chap}
                onChange={(e) => setChap(e.target.value)}
            />
            <button onClick={createManga}>Add Manga</button>
        </form>
      
    </div>
  )
}

export default AddManga