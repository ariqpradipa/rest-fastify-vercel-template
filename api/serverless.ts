import * as dotenv from "dotenv";
dotenv.config();

// Require the framework
import fastify from "fastify";
import cors from '@fastify/cors';
import app from "../src/app";

// Instantiate Fastify instance with configuration
const instance = fastify({
    logger: false,
});

// Register CORS
instance.register(cors, {
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
});

// Register app to use the routes
instance.register(app, {
    prefix: "/",
});

export default async (req: any, res: any) => {
    await instance.ready();
    instance.server.emit("request", req, res);
};