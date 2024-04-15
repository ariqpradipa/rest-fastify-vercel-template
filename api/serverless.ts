import * as dotenv from "dotenv";
dotenv.config();

// Require the framework
import fastify from "fastify";
import cors from '@fastify/cors';
import routes from "../src/app";

// Instantiate Fastify with some config
const app = fastify({
    logger: false,
});

// Register CORS
app.register(cors, {
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
});

// Register your application as a normal plugin.
app.register(routes, {
    prefix: "/",
});

export default async (req: any, res: any) => {
    await app.ready();
    app.server.emit("request", req, res);
};