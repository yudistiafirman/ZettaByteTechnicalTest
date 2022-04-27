import express from 'express'
import { getBlogs,createBlogs, getBlogDetail, updateBlog, deleteBlog } from '../controllers/posts.js'
const router = express.Router()

router.get('/all',getBlogs)
router.get('/details/:id',getBlogDetail)
router.post('/create',createBlogs)
router.patch('/update/:id',updateBlog)
router.delete('/delete/:id',deleteBlog)

export default router