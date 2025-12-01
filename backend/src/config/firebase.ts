import { initializeApp, cert, ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Firebase Admin
const serviceAccount: ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

const app = initializeApp({
  credential: cert(serviceAccount),
});

// Get Firestore instance
export const db = getFirestore(app);

// Collection names
export const COLLECTIONS = {
  CONSULTATIONS: 'consultations',
  CONTACT_SUBMISSIONS: 'contact_submissions',
  ASSESSMENT_RESULTS: 'assessment_results',
  EMAIL_LOGS: 'email_logs',
};

// Test connection
export const testFirebaseConnection = async (): Promise<boolean> => {
  try {
    // Try to access Firestore
    await db.collection('_health_check').limit(1).get();
    console.log('✅ Firebase connection successful');
    return true;
  } catch (error) {
    console.error('❌ Firebase connection failed:', error);
    return false;
  }
};

export default db;
