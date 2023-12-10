import Router from "@koa/router";
import { RESP, USER } from "./types/user";
import { Context } from "koa";
import { PrismaClient, Prisma } from "@prisma/client";
import "koa-bodyparser";
interface userReq {
  name: string;
}
const rootRouter = new Router();
const prisma = new PrismaClient();
// rootRouter.get("/user", async (ctx) => {
//   const res: RESP<USER> = {
//     code: 0,
//     data: {
//       email: "nina",
//       posts: [],
//     },
//     msg: "succ",
//   };
//   ctx.body = res;
//   ctx.type = "application/json";
// });
rootRouter.get(`/post/:id`, async (ctx) => {
  const id = ctx.params.id;

  const post = await prisma.post.findUnique({
    where: { id: id },
  });
  ctx.body = post;
});
rootRouter.post("/adduser", async (ctx: Context) => {
  const { name } = ctx.request.body as userReq;
  console.log(name);
  const postData = {
    title: "good",
    content: "testtest",
  };
  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: "123@gmail.com",
      posts: {
        create: postData,
      },
    },
  });
  ctx.body = newUser;
});

export default rootRouter;
