import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    // Placeholder response
    res.json({ mood: 'happy' });
});

export default router;
