import { db, COLLECTIONS } from '../config/firebase';
import { Timestamp } from 'firebase-admin/firestore';

export interface AssessmentResult {
  id?: string;
  email?: string;
  answers: Record<string, any>;
  recommendations: Array<{
    pathway: string;
    description: string;
    nextSteps: string[];
    link: string;
  }>;
  createdAt?: Timestamp;
}

class AssessmentModel {
  private collection = db.collection(COLLECTIONS.ASSESSMENT_RESULTS);

  async create(data: Omit<AssessmentResult, 'id' | 'createdAt'>): Promise<string> {
    const docRef = await this.collection.add({
      ...data,
      createdAt: Timestamp.now(),
    });
    return docRef.id;
  }

  async findById(id: string): Promise<AssessmentResult | null> {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as AssessmentResult;
  }

  async findAll(limit: number = 50): Promise<AssessmentResult[]> {
    const snapshot = await this.collection
      .orderBy('createdAt', 'desc')
      .limit(limit)
      .get();
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as AssessmentResult));
  }

  async getStats(): Promise<any> {
    const snapshot = await this.collection.get();
    const total = snapshot.size;
    
    const pathwayCounts: Record<string, number> = {};
    snapshot.docs.forEach(doc => {
      const data = doc.data();
      if (data.recommendations && Array.isArray(data.recommendations)) {
        data.recommendations.forEach((rec: any) => {
          pathwayCounts[rec.pathway] = (pathwayCounts[rec.pathway] || 0) + 1;
        });
      }
    });

    return {
      totalAssessments: total,
      pathwayDistribution: pathwayCounts,
    };
  }

  async delete(id: string): Promise<void> {
    await this.collection.doc(id).delete();
  }
}

export default new AssessmentModel();
