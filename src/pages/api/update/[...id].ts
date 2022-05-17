import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient()
  const { title } = req.body
  const { id } = req.query
  try {
    const newEntry = await prisma.bookSugesstion.update({
      where: {
        id: Number(id),
      },
      data: {
        bookTitle: title,
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
