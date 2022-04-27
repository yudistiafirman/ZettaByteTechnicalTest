import express from 'express'
import { createComments, deleteComments,  getCommentByBlogId, updateComments } from '../controllers/comments.js'

const router = express.Router()

router.get('/all/:blogId',getCommentByBlogId)
router.post('/create',createComments)
router.delete('/delete/:id',deleteComments)
router.patch('/update/:id',updateComments)

export default router