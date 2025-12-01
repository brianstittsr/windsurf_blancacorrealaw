import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import consultationModel from '../models/consultation.model';
import { sendConsultationEmail } from '../services/email.service';

const router = Router();

const consultationValidation = [
  body('firstName').trim().notEmpty(),
  body('lastName').trim().notEmpty(),
  body('email').isEmail().normalizeEmail(),
  body('phone').trim().notEmpty(),
  body('language').isIn(['en', 'es']),
  body('consultationType').isIn(['in-person', 'phone', 'video']),
  body('preferredDate').isDate(),
  body('preferredTime').matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
  body('caseType').trim().notEmpty(),
  body('urgency').isIn(['normal', 'soon', 'urgent', 'emergency']),
  body('description').trim().notEmpty(),
];

router.post('/', consultationValidation, async (req: Request, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }
    const { firstName, lastName, email, phone, language, consultationType, preferredDate, preferredTime, alternateDate, alternateTime, caseType, urgency, description } = req.body;
    const consultationId = await consultationModel.create({ firstName, lastName, email, phone, language, consultationType, preferredDate, preferredTime, alternateDate, alternateTime, caseType, urgency, description, status: 'pending' });
    sendConsultationEmail({ firstName, lastName, email, phone, language, consultationType, preferredDate, preferredTime, caseType, urgency, description }).catch((err: Error) => console.error('Email failed:', err));
    res.status(201).json({ success: true, message: 'Consultation request submitted successfully', data: { id: consultationId } });
  } catch (error) {
    console.error('Error creating consultation:', error);
    res.status(500).json({ success: false, error: 'Failed to submit consultation request' });
  }
});

router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const consultation = await consultationModel.findById(req.params.id);
    if (!consultation) {
      res.status(404).json({ success: false, error: 'Consultation not found' });
      return;
    }
    res.json({ success: true, data: consultation });
  } catch (error) {
    console.error('Error fetching consultation:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch consultation' });
  }
});

router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const consultations = await consultationModel.findAll(50);
    res.json({ success: true, data: consultations });
  } catch (error) {
    console.error('Error fetching consultations:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch consultations' });
  }
});

export default router;
