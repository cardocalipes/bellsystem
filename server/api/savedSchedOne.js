import prisma from "~/server/db/prisma"

export default defineEventHandler(async () => {
    return await prisma.saved_schedule.findMany();
});