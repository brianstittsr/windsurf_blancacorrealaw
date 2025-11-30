import { db, COLLECTIONS } from '../config/firebase';
import { Timestamp, FieldValue } from 'firebase-admin/firestore';

export interface Consultation {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  language: 'en' | 'es';
  consultationType: 'phone' | 'video' | 'in-person';
  preferredDate: string;
  preferredTime: string;
  alternateDate?: string;
  alternateTime?: string;
  caseType: string;
  urgency: 'normal' | 'urgent' | 'emergency';
  description: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: Timestamp | FieldValue;
  updatedAt: Timestamp | FieldValue;
}

export class ConsultationModel {
  private collection = db.collection(COLLECTIONS.CONSULTATIONS);

  async create(data: Omit<Consultation, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    const consultation: Omit<Consultation, 'id'> = {
      ...data,
      status: 'pending',
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    };

    const docRef = await this.collection.add(consultation);
    return docRef.id;
  }

  async findById(id: string): Promise<Consultation | null> {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as Consultation;
  }

  async findAll(limit: number = 50): Promise<Consultation[]> {
    const snapshot = await this.collection
      .orderBy('createdAt', 'desc')
      .limit(limit)
      .get();

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Consultation[];
  }

  async update(id: string, data: Partial<Consultation>): Promise<void> {
    await this.collection.doc(id).update({
      ...data,
      updatedAt: FieldValue.serverTimestamp(),
    });
  }

  async delete(id: string): Promise<void> {
    await this.collection.doc(id).delete();
  }
}

export default new ConsultationModel();
