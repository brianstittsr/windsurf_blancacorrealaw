import { db, COLLECTIONS } from '../config/firebase';
import { Timestamp } from 'firebase-admin/firestore';

export interface EmailLog {
  id?: string;
  emailType: 'consultation_confirmation' | 'contact_notification' | 'attorney_notification';
  recipient: string;
  subject: string;
  status: 'sent' | 'failed';
  error?: string;
  createdAt?: Timestamp;
}

class EmailLogModel {
  private collection = db.collection(COLLECTIONS.EMAIL_LOGS);

  async create(data: Omit<EmailLog, 'id' | 'createdAt'>): Promise<string> {
    const docRef = await this.collection.add({
      ...data,
      createdAt: Timestamp.now(),
    });
    return docRef.id;
  }

  async findById(id: string): Promise<EmailLog | null> {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as EmailLog;
  }

  async findAll(limit: number = 50): Promise<EmailLog[]> {
    const snapshot = await this.collection
      .orderBy('createdAt', 'desc')
      .limit(limit)
      .get();
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as EmailLog));
  }

  async findByType(emailType: string, limit: number = 50): Promise<EmailLog[]> {
    const snapshot = await this.collection
      .where('emailType', '==', emailType)
      .orderBy('createdAt', 'desc')
      .limit(limit)
      .get();
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as EmailLog));
  }
}

export default new EmailLogModel();
