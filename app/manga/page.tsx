
import { PrismaClient } from '@prisma/client'
import DeleteManga from './DeleteManga'
import AddManga from './AddManga'
import Image from 'next/image'

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
        {mangas.map((manga) => (
          <li className="p-2 bg-slate-500 mx-2 text-white"key={manga.id}>
            <h2>{manga.title}</h2>
            <p>{manga.description}</p>
            <p>Author: {manga.author}</p>
            <Image
              src={manga.imageUrl}
              width={500}
              height={500}
              alt={manga.title}
            />
            <p>Chapters: {manga.chapters}</p>
            <div>
              <DeleteManga manga={manga}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}