import Blog from "../models/blog.js"
import mongoose from "mongoose"


export const getBlogs = async (req,res)=>{
    const {page,perPage,value,sorted}=req.query
    try {
        const startIndex = (Number(page) - 1) * 8
        const total = await Blog.countDocuments({});
        const blogData = await Blog.aggregate([
            { $lookup:
                {
                   from: "comments",
                   localField: "_id",
                   foreignField: "blogId",
                   as: "comments"
                }
            },
            {
                $match:{title:new RegExp(value, "i")}
            },
            { $sort: { createdAt:sorted?Number(sorted):1 } },
            {$skip:perPage*(page-1)},
            {$limit:Number(perPage)}
        ])
        res.status(200).json({
            success:true,
            message:'get blog data success',
            data:blogData,
            currentPage:Number(page),
            numberOfPages: Math.ceil(total / perPage)
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
   
}
export const getBlogDetail = async (req, res) => { 
    const { id } = req.params;
    try {
        const blogDetail = await Blog.findById(id);
        
        res.status(200).json({
            success:true,
            message:'get blog detail success',
            data:blogDetail
        });
    } catch (error) {
        res.status(404).json({ 
            success:false,
            message: error.message 
        })
    }
}

export const createBlogs = async(req,res)=>{
    const { title, content, creator } = req.body;

    const newBlog = new Blog({ title, content,creator })

    try {
        await newBlog.save();

        res.status(201).json({
            success:true,
            message:'create new blog success',
            data:newBlog
        } );
    } catch (error) {
        res.status(409).json({
            success:false ,
            message: error.message 
        })
    }
}


export const updateBlog = async (req, res) => {
    const { id } = req.params;
    const { title, content, creator } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedBlog = { creator, title, content, _id: id,updatedAt:new Date() };
    try {
        await Blog.findByIdAndUpdate(id, updatedBlog, { new: true });

        res.status(200).json({
            success:true,
            message:'Update blog success',
           

        });
    } catch (error) {
        res.status(400).send({
            success:false,
            message:error.message
        })
    }
}

export const deleteBlog = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)
    try {
        await Blog.findByIdAndRemove(id);

        res.json({
            success:true,
            message: "Post deleted successfully." 
        });
    } catch (error) {
        res.status(404).json({
            success:false,
            message:error.message
        })
    }


}