import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import consultationModel from '../models/consultation.model';
import { sendConsultationEmail } from '../services/email.service';

const router = Router();

// Validation rules
const consultationValidation = [
  body('firstName').trim().notEmpty().withMessage('First name is required'),
  body('lastName').trim().notEmpty().withMessage('Last name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
  body('language').isIn(['en', 'es']).withMessage('Language must be en or es'),
  body('consultationType').isIn(['in-person', 'phone', 'video']).withMessage('Invalid consultation type'),
  body('preferredDate').isDate().withMessage('Valid date is required'),
  body('preferredTime').matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).withMessage('Valid time is required'),
  body('caseType').trim().notEmpty().withMessage('Case type is required'),
  body('urgency').isIn(['normal', 'soon', 'urgent', 'emergency']).withMessage('Invalid urgency level'),
  body('description').trim().notEmpty().withMessage('Description is required'),
];

// POST /api/consultations - Create new consultation request
router.post('/', consultationValidation, async (req: Request, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const {
      firstName, lastName, email, phone, language,
      consultationType, preferredDate, preferredTime,
      alternateDate, alternateTime, caseType, urgency, description,
    } = req.body;

    const consultationId = await consultationModel.create({
      firstName, lastName, email, phone, language,
      consultationType, preferredDate, preferredTime,
      alternateDate, alternateTime, caseType, urgency, description,
      status: 'pending',
    });

    sendConsultationEmail({
      firstName, lastName, email, phone, language,
      consultationType, preferredDate, preferredTime,
      caseType, urgency, description,
    }).catch((err: Error) => console.error('Email failed:', err));

    res.status(201).json({
      success: true,
      message: 'Consultation request submitted successfully',
      data: { id: consultationId },
    });
  } catch (error) {
    console.error('Error creating consultation:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit consultation request',
    });
  }
});

// GET /api/consultations/:id
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

// GET /api/consultations
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
