import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = 'edge'

const app = new Hono().basePath('/')

app.get('/', c => c.json({
    message: 'Hello World!'
}))

export const GET = handle(app)