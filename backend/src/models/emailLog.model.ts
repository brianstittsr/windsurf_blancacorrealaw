import { db, COLLECTIONS } from '../config/firebase';
import { Timestamp, FieldValue } from 'firebase-admin/firestore';

export interface EmailLog {
  id?: string;
  emailType: 'consultation_confirmation' | 'consultation_notification' | 'contact_notification';
  recipient: string;
  subject: string;
  status: 'sent' | 'failed';
  error?: string;
  createdAt: Timestamp | FieldValue;
}

export class EmailLogModel {
  private collection = db.collection(COLLECTIONS.EMAIL_LOGS);

  async create(data: Omit<EmailLog, 'id' | 'createdAt'>): Promise<string> {
    const log: Omit<EmailLog, 'id'> = {
      ...data,
      createdAt: FieldValue.serverTimestamp(),
    };

    const docRef = await this.collection.add(log);
    return docRef.id;
  }

  async findById(id: string): Promise<EmailLog | null> {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as EmailLog;
  }

  async findAll(limit: number = 100): Promise<EmailLog[]> {
    const snapshot = await this.collection
      .orderBy('createdAt', 'desc')
      .limit(limit)
      .get();

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as EmailLog[];
  }

  async getStats(): Promise<any> {
    const snapshot = await this.collection.get();
    const total = snapshot.size;

    let sent = 0;
    let failed = 0;

    snapshot.docs.forEach(doc => {
      const data = doc.data();
      if (data.status === 'sent') sent++;
      if (data.status === 'failed') failed++;
    });

    return {
      total,
      sent,
      failed,
      successRate: total > 0 ? ((sent / total) * 100).toFixed(2) + '%' : '0%',
    };
  }
}

export default new EmailLogModel();
