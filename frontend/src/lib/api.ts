// API client utilities for making requests to the backend

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  errors?: Array<{ msg: string; param: string }>;
}

class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public errors?: Array<{ msg: string; param: string }>
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Make a request to the API
 */
async function apiRequest<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_URL}${endpoint}`;
  
  const config: RequestInit = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new ApiError(
        data.error || 'An error occurred',
        response.status,
        data.errors
      );
    }

    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    // Network or other errors
    throw new ApiError(
      'Failed to connect to server. Please try again.',
      0
    );
  }
}

/**
 * Consultation API
 */
export const consultationApi = {
  /**
   * Submit a consultation booking request
   */
  async create(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    language: string;
    consultationType: string;
    preferredDate: string;
    preferredTime: string;
    alternateDate?: string;
    alternateTime?: string;
    caseType: string;
    urgency: string;
    description: string;
    hearAboutUs?: string;
  }): Promise<ApiResponse> {
    return apiRequest('/api/consultations', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Get consultation by ID (for future use)
   */
  async getById(id: string): Promise<ApiResponse> {
    return apiRequest(`/api/consultations/${id}`);
  },
};

/**
 * Contact API
 */
export const contactApi = {
  /**
   * Submit a contact form
   */
  async create(data: {
    name: string;
    email: string;
    phone?: string;
    language: string;
    subject: string;
    message: string;
  }): Promise<ApiResponse> {
    return apiRequest('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};

/**
 * Assessment API
 */
export const assessmentApi = {
  /**
   * Save assessment results
   */
  async create(data: {
    email?: string;
    answers: Record<string, any>;
    recommendations: Array<any>;
  }): Promise<ApiResponse> {
    return apiRequest('/api/assessments', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Get assessment statistics (for future analytics)
   */
  async getStats(): Promise<ApiResponse> {
    return apiRequest('/api/assessments/stats');
  },
};

/**
 * Health check
 */
export const healthApi = {
  async check(): Promise<ApiResponse> {
    return apiRequest('/health');
  },
};

export { ApiError };
export default {
  consultation: consultationApi,
  contact: contactApi,
  assessment: assessmentApi,
  health: healthApi,
};
