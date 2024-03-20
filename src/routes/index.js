import { Router } from 'express';
import userRoute from './user.route.js';
import chatRoute from './chat.route.js';
import messageRoute from './message.route.js';

const router = Router();

router.use('/users', userRoute);
router.use('/chats', chatRoute);
router.use('/messages', messageRoute);

export default router;
