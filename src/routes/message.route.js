import { Router } from 'express';
import messageController from '../controllers/message.controller.js';

const router = Router();

router.get('/:chatId', messageController.find);
router.post('/create', messageController.create);

export default router;
