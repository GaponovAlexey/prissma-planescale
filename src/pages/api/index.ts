import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    return await addBook(req, res)
  } else if (req.method === 'GET') {
    return await readBooks(req, res)
  } else {
    return res
      .status(405)
      .json({ message: 'Method not allowed', success: false })
  }
}

async function addBook(req: NextApiRequest, res: NextApiResponse) {
  const { title, author, genre } = req.body
  try {
    const newEntry = await prisma.bookSugesstion.create({
      data: {
        bookTitle: title,
        bookAuthor: author,
        bookGenre: genre,
      },
    })
    return res.status(200).json(newEntry)
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error creating question', success: false })
  } finally {
    await prisma.$disconnect()
  }
}
async function readBooks(req: NextApiRequest, res: NextApiResponse) {
  try {
    const allBooks = await prisma.bookSugesstion.findMany()

    return res.status(200).json(allBooks)
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error creating question', success: false })
  } finally {
    await prisma.$disconnect()
  }
}
