import { Router } from 'express';
import { getSuggestions } from '../../services/suggestionService';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const suggestions = await getSuggestions();
        res.json(suggestions);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch suggestions' });
    }
});

export default router;
