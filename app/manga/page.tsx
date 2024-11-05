import AddManga from './addManga'
import { PrismaClient } from '@prisma/client'
import DeleteManga from './deleteManga'

interface Manga {
  id: number
  title: string
  author: string
  description: string
  imageUrl: string
  chapters: number
}
const prisma = new PrismaClient()

const getMangas = async () => {
  const res = await prisma.manga.findMany({
    select: {
        id: true,
        title: true,
        author: true,
        description: true,
        imageUrl: true,
        chapters: true
    }
})
return res
}

export default  async function Home() {
  const [mangas] = await  Promise.all([getMangas()])  

  return (
    <div className='m-5'>
      <AddManga/>
      <hr />
      <h1 className='p-2 bg-slate-500 text-white mb-4'>Manga List</h1>
      <ul className='flex'>
        {mangas.map((manga, index) => (
          <li className="p-2 bg-slate-500 mx-2 text-white"key={manga.id}>
            <h2>{manga.title}</h2>
            <p>{manga.description}</p>
            <p>Author: {manga.author}</p>
            <img src={manga.imageUrl} alt={manga.title} width="100" />
            <p>Chapters: {manga.chapters}</p>
            {/* {/* <button onClick={() => router.push(`/manga/edit/${manga.id}`)}>Edit</button> */}
            {/* <button onClick={() => handleDelete(manga.id)}>Delete</button> */} 
            <div>
              <DeleteManga manga={manga}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}