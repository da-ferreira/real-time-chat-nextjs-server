import { Router } from 'express';
import chatController from '../controllers/chat.controller.js';

const router = Router();

router.post('/create', chatController.create);
router.get('/:userId', chatController.find);

export default router;
