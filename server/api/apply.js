import prisma from "~/server/db/prisma"
import dayjs from "dayjs";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log(body);
    const savedSched = await prisma.saved_schedule.create({
        data: {
          sched_name: body.schedName,
          start: body.startTime,
          duration: parseInt(body.duration),
        },
      })
});
