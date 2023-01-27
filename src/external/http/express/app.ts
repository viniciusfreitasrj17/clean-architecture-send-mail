import express, { Express } from 'express'
import { emailRouter } from './routes/email.routes'
export const app: Express = express()

app.use(express.json())
app.use('/emails', emailRouter)
