import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function (
  req: NextApiRequest,
  res: NextApiResponse
) {
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
