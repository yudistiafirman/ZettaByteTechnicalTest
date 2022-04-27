import { ObjectId } from "bson";
import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    blogId:ObjectId,
    comment: String,
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

const Comment = mongoose.model('Comment',commentSchema)

export default Comment