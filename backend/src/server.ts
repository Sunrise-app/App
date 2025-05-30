import express from 'express';
import suggestionsRouter from '../routes/api/suggestions';
import moodRouter from '../routes/api/mood';
import onboardingRouter from '../routes/api/onboarding';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/suggestions', suggestionsRouter);
app.use('/api/mood', moodRouter);
app.use('/api/onboarding', onboardingRouter);

app.get('/', (req, res) => {
    res.send('Hello from backend!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
