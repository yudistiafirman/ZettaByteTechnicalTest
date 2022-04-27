import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title :String,
    content: String,
    creator:String,
    createdAt:{
        type:Date,
        default:new Date()
    },
    updatedAt:{
        type:Date,
        default:new Date()
    }
})

const Blog = mongoose.model('Blog',blogSchema)

export default Blog