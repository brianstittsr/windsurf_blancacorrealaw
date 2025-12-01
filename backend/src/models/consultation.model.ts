import { db, COLLECTIONS } from '../config/firebase';
import { Timestamp } from 'firebase-admin/firestore';

export interface Consultation {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  language: 'en' | 'es';
  consultationType: 'in-person' | 'phone' | 'video';
  preferredDate: string;
  preferredTime: string;
  alternateDate?: string;
  alternateTime?: string;
  caseType: string;
  urgency: 'normal' | 'soon' | 'urgent' | 'emergency';
  description: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

class ConsultationModel {
  private collection = db.collection(COLLECTIONS.CONSULTATIONS);

  async create(data: Omit<Consultation, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    const docRef = await this.collection.add({
      ...data,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
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
      ...doc.data()
    } as Consultation));
  }

  async update(id: string, data: Partial<Consultation>): Promise<void> {
    await this.collection.doc(id).update({
      ...data,
      updatedAt: Timestamp.now(),
    });
  }

  async delete(id: string): Promise<void> {
    await this.collection.doc(id).delete();
  }
}

export default new ConsultationModel();
