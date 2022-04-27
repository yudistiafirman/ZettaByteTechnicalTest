import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'
import commentRoutes from './routes/comment.js'


const app = express()
app.use(express.json())
app.use(cors())
app.use('/posts',postRoutes)
app.use('/comment',commentRoutes)


const CONNECTION_URL = 'mongodb+srv://Firman:Syartikaa28@cluster0.ophlw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = 5000

mongoose.connect(CONNECTION_URL,  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(()=> app.listen(PORT,()=>console.log(`server running in port`,{PORT})))
.catch((err)=>console.log(err.message) )