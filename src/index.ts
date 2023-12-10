import Koa from "koa";
import bodyParser from "koa-bodyparser";
import rootRouter from "./route";

const app = new Koa();
const PORT = process.env.PORT || 8008;
app.use(bodyParser());
app.use(rootRouter.routes()).use(rootRouter.allowedMethods());
// const prisma = new PrismaClient()
app.listen(PORT, () => {
  console.log(`服务器运行在 ${PORT} 端口`);
});
