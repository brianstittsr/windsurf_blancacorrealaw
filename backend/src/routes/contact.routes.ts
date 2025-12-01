import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import contactModel from '../models/contact.model';
import { sendContactNotification } from '../services/email.service';

const router = Router();

const contactValidation = [
  body('name').trim().notEmpty(),
  body('email').isEmail().normalizeEmail(),
  body('phone').trim().notEmpty(),
  body('language').isIn(['en', 'es']),
  body('subject').trim().notEmpty(),
  body('message').trim().notEmpty().isLength({ min: 10 }),
];

router.post('/', contactValidation, async (req: Request, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
    const { name, email, phone, language, subject, message } = req.body;
    const submissionId = await contactModel.create({ name, email, phone, language, subject, message, status: 'new' });
    sendContactNotification({ name, email, phone, language, subject, message }).catch((err: Error) => console.error('Email failed:', err));
    res.status(201).json({ success: true, message: 'Contact form submitted successfully', data: { id: submissionId } });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ success: false, error: 'Failed to submit contact form' });
  }
});

router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const submissions = await contactModel.findAll(50);
    res.json({ success: true, data: submissions });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch contact submissions' });
  }
});

export default router;
