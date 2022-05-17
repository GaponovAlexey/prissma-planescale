import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

export default async function (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient()
  const { id } = req.query 

  try {
    const book = await prisma.bookSugesstion.delete({
      where: {
        id: Number(id),
      },
    })
    return res.status(200).json(book)
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error creating question', success: false })
  } finally {
    await prisma.$disconnect()
  }
}