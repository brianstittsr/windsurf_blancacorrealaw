import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import assessmentModel from '../models/assessment.model';

const router = Router();

const assessmentValidation = [
  body('answers').isObject().withMessage('Answers must be an object'),
  body('recommendations').isArray().withMessage('Recommendations must be an array'),
];

router.post('/', assessmentValidation, async (req: Request, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { email, answers, recommendations } = req.body;

    const assessmentId = await assessmentModel.create({ email, answers, recommendations });

    res.status(201).json({
      success: true,
      message: 'Assessment results saved successfully',
      data: { id: assessmentId },
    });
  } catch (error) {
    console.error('Error saving assessment:', error);
    res.status(500).json({ success: false, error: 'Failed to save assessment results' });
  }
});

router.get('/stats', async (_req: Request, res: Response): Promise<void> => {
  try {
    const stats = await assessmentModel.getStats();
    res.json({ success: true, data: stats });
  } catch (error) {
    console.error('Error fetching assessment stats:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch assessment statistics' });
  }
});

router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const assessments = await assessmentModel.findAll(50);
    res.json({ success: true, data: assessments });
  } catch (error) {
    console.error('Error fetching assessments:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch assessments' });
  }
});

export default router;
