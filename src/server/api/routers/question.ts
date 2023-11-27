import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const questionRouter = createTRPCRouter({
  getQuestionGroup: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.question.findMany({
      skip: 0,
      take: 5,
      include: {
        choices: true,
      },
    });
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.question.findMany();
  }),
});
