import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
    // Placeholder onboarding logic
    res.json({ message: 'Onboarding complete' });
});

export default router;
