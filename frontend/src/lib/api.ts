// API client utilities - simplified for static deployment
// Forms submit to external services or show success message

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
 * Simulate API request for static deployment
 * In production, replace with actual form submission service (Formspree, Netlify Forms, etc.)
 */
async function apiRequest<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  // Simulate successful submission for static deployment
  console.log('Form submission:', endpoint, options.body);
  
  // Return success response
  return {
    success: true,
    message: 'Your submission has been received. We will contact you shortly.',
    data: {} as T,
  };
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
