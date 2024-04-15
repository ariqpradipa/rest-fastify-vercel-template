import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  FastifyServerOptions,
} from "fastify";

async function app(
  instance: FastifyInstance,
  opts: FastifyServerOptions,
  done: any
) {
  instance.get("/", async (req: FastifyRequest, res: FastifyReply) => {
    res.status(200).send({
      hello: "World",
    });
  });
  done();
}

export default app;