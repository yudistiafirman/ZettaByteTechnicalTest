import Comment from "../models/comments.js"
import mongoose from "mongoose"


export const getCommentByBlogId=async (req,res)=>{
    const {blogId}=req.params
    try {
        const allComments = await Comment.find({blogId:blogId})
        res.status(200).send({
            success:true,
            message:'get comments success',
            data:allComments
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
}

export const createComments=async(req,res)=>{
    const {blogId,comment,creator}=req.body

    const newComment = new Comment({blogId,comment,creator})
    try {
        await newComment.save();

        res.status(201).json({
            success:true,
            message:'create new comment success',
            data:newComment
        } );
    } catch (error) {
        res.status(409).json({
            success:false ,
            message: error.message 
        })
    }
}

export const deleteComments = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No comment with id: ${id}`);
    try {
        await Comment.findByIdAndRemove(id);

        res.json({
            success:true,
            message: "Comment deleted successfully." 
        });
    } catch (error) {
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
}

export const updateComments = async (req, res) => {
    const { id } = req.params;
    const { comment } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No comment with id: ${id}`);
    const updatedComment = { comment,updatedAt:new Date() };
    try {
        await Comment.findByIdAndUpdate(id, updatedComment, { new: true });

        res.status(200).json({
            success:true,
            message:'Update comment success',
           

        });
    } catch (error) {
        res.status(400).send({
            success:false,
            message:error.message
        })
    }

}