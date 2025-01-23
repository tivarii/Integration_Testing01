import { Prisma } from "../../db"
const prisma = Prisma.getInstant();
export default async () => {
    await prisma.$transaction([
        prisma.request.deleteMany(),
    ])
}