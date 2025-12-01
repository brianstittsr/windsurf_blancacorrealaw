import { db, COLLECTIONS } from '../config/firebase';
import { Timestamp } from 'firebase-admin/firestore';

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone: string;
  language: 'en' | 'es';
  subject: string;
  message: string;
  status: 'new' | 'read' | 'responded';
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

class ContactModel {
  private collection = db.collection(COLLECTIONS.CONTACT_SUBMISSIONS);

  async create(data: Omit<ContactSubmission, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    const docRef = await this.collection.add({
      ...data,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return docRef.id;
  }

  async findById(id: string): Promise<ContactSubmission | null> {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as ContactSubmission;
  }

  async findAll(limit: number = 50): Promise<ContactSubmission[]> {
    const snapshot = await this.collection
      .orderBy('createdAt', 'desc')
      .limit(limit)
      .get();
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as ContactSubmission));
  }

  async update(id: string, data: Partial<ContactSubmission>): Promise<void> {
    await this.collection.doc(id).update({
      ...data,
      updatedAt: Timestamp.now(),
    });
  }

  async delete(id: string): Promise<void> {
    await this.collection.doc(id).delete();
  }
}

export default new ContactModel();
