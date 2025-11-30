'use client';

import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';

export default function ConsultationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    language: 'en',
    
    // Consultation Details
    consultationType: '',
    preferredDate: '',
    preferredTime: '',
    alternateDate: '',
    alternateTime: '',
    
    // Case Information
    caseType: '',
    urgency: 'normal',
    description: '',
    
    // Additional
    hearAboutUs: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Import API client dynamically
      const { consultationApi } = await import('@/lib/api');
      
      // Submit to backend API
      const response = await consultationApi.create(formData);
      
      if (response.success) {
        setStep(4); // Go to confirmation
      } else {
        // Handle error - could add error state here
        console.error('Submission failed:', response.error);
        alert('Failed to submit consultation request. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to connect to server. Please try again.');
    }
  };

  const consultationTypes = [
    { value: 'in-person', label: 'In-Person Consultation', description: 'Meet at our Raleigh office' },
    { value: 'phone', label: 'Phone Consultation', description: 'Convenient phone call' },
    { value: 'video', label: 'Video Consultation', description: 'Virtual meeting via Zoom' },
  ];

  const caseTypes = [
    'Family-Based Immigration',
    'Employment Visa',
    'Citizenship/Naturalization',
    'Asylum/Humanitarian Relief',
    'Deportation Defense',
    'Other',
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-display font-bold text-neutral-900 mb-4">
              Schedule Your Consultation
            </h1>
            <p className="text-body text-neutral-700">
              Take the first step toward your immigration goals. Schedule a personalized 
              consultation to discuss your case and explore your options.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Indicator */}
      {step < 4 && (
        <section className="bg-white border-b border-neutral-200 py-6">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between">
                {[1, 2, 3].map((stepNum) => (
                  <div key={stepNum} className="flex items-center flex-1">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                        step >= stepNum 
                          ? 'bg-primary text-white' 
                          : 'bg-neutral-200 text-neutral-600'
                      }`}>
                        {step > stepNum ? <CheckCircle className="w-6 h-6" /> : stepNum}
                      </div>
                      <span className={`ml-3 font-medium hidden sm:inline ${
                        step >= stepNum ? 'text-neutral-900' : 'text-neutral-500'
                      }`}>
                        {stepNum === 1 && 'Personal Info'}
                        {stepNum === 2 && 'Consultation Details'}
                        {stepNum === 3 && 'Case Information'}
                      </span>
                    </div>
                    {stepNum < 3 && (
                      <div className={`flex-1 h-1 mx-4 ${
                        step > stepNum ? 'bg-primary' : 'bg-neutral-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Form Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {step < 4 ? (
              <div className="bg-white rounded-pathway shadow-card p-8">
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Personal Information */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-h2 font-bold text-neutral-900 mb-2">
                          Personal Information
                        </h2>
                        <p className="text-neutral-600">
                          Let us know how to reach you.
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-semibold text-neutral-900 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          />
                        </div>

                        <div>
                          <label htmlFor="lastName" className="block text-sm font-semibold text-neutral-900 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-neutral-900 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="language" className="block text-sm font-semibold text-neutral-900 mb-2">
                          Preferred Language *
                        </label>
                        <select
                          id="language"
                          name="language"
                          required
                          value={formData.language}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                          <option value="en">English</option>
                          <option value="es">Español</option>
                        </select>
                      </div>

                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="w-full btn-primary"
                      >
                        Continue
                      </button>
                    </div>
                  )}

                  {/* Step 2: Consultation Details */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-h2 font-bold text-neutral-900 mb-2">
                          Consultation Details
                        </h2>
                        <p className="text-neutral-600">
                          Choose your preferred consultation format and time.
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-900 mb-3">
                          Consultation Type *
                        </label>
                        <div className="space-y-3">
                          {consultationTypes.map((type) => (
                            <label
                              key={type.value}
                              className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                formData.consultationType === type.value
                                  ? 'border-primary bg-primary-50'
                                  : 'border-neutral-200 hover:border-neutral-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name="consultationType"
                                value={type.value}
                                checked={formData.consultationType === type.value}
                                onChange={handleChange}
                                className="mt-1"
                              />
                              <div>
                                <div className="font-semibold text-neutral-900">{type.label}</div>
                                <div className="text-sm text-neutral-600">{type.description}</div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="preferredDate" className="block text-sm font-semibold text-neutral-900 mb-2">
                            Preferred Date *
                          </label>
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            required
                            value={formData.preferredDate}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          />
                        </div>

                        <div>
                          <label htmlFor="preferredTime" className="block text-sm font-semibold text-neutral-900 mb-2">
                            Preferred Time *
                          </label>
                          <select
                            id="preferredTime"
                            name="preferredTime"
                            required
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          >
                            <option value="">Select a time</option>
                            <option value="09:00">9:00 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="13:00">1:00 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="15:00">3:00 PM</option>
                            <option value="16:00">4:00 PM</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="alternateDate" className="block text-sm font-semibold text-neutral-900 mb-2">
                            Alternate Date
                          </label>
                          <input
                            type="date"
                            id="alternateDate"
                            name="alternateDate"
                            value={formData.alternateDate}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          />
                        </div>

                        <div>
                          <label htmlFor="alternateTime" className="block text-sm font-semibold text-neutral-900 mb-2">
                            Alternate Time
                          </label>
                          <select
                            id="alternateTime"
                            name="alternateTime"
                            value={formData.alternateTime}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          >
                            <option value="">Select a time</option>
                            <option value="09:00">9:00 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="13:00">1:00 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="15:00">3:00 PM</option>
                            <option value="16:00">4:00 PM</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="flex-1 btn-outline"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="flex-1 btn-primary"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Case Information */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-h2 font-bold text-neutral-900 mb-2">
                          Case Information
                        </h2>
                        <p className="text-neutral-600">
                          Tell us about your immigration needs.
                        </p>
                      </div>

                      <div>
                        <label htmlFor="caseType" className="block text-sm font-semibold text-neutral-900 mb-2">
                          Type of Immigration Case *
                        </label>
                        <select
                          id="caseType"
                          name="caseType"
                          required
                          value={formData.caseType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                          <option value="">Select case type</option>
                          {caseTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="urgency" className="block text-sm font-semibold text-neutral-900 mb-2">
                          Urgency Level *
                        </label>
                        <select
                          id="urgency"
                          name="urgency"
                          required
                          value={formData.urgency}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                          <option value="normal">Normal - No immediate deadline</option>
                          <option value="soon">Soon - Within 1-3 months</option>
                          <option value="urgent">Urgent - Within 1 month</option>
                          <option value="emergency">Emergency - Immediate attention needed</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="description" className="block text-sm font-semibold text-neutral-900 mb-2">
                          Brief Description of Your Case *
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          required
                          value={formData.description}
                          onChange={handleChange}
                          rows={6}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                          placeholder="Please provide a brief overview of your immigration situation and what you hope to achieve..."
                        />
                      </div>

                      <div>
                        <label htmlFor="hearAboutUs" className="block text-sm font-semibold text-neutral-900 mb-2">
                          How did you hear about us?
                        </label>
                        <select
                          id="hearAboutUs"
                          name="hearAboutUs"
                          value={formData.hearAboutUs}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                          <option value="">Select an option</option>
                          <option value="google">Google Search</option>
                          <option value="referral">Referral from friend/family</option>
                          <option value="social">Social Media</option>
                          <option value="community">Community Organization</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="flex-1 btn-outline"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="flex-1 btn-primary"
                        >
                          Submit Request
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            ) : (
              /* Confirmation */
              <div className="bg-white rounded-pathway shadow-card p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-h1 font-bold text-neutral-900 mb-4">
                  Consultation Request Received!
                </h2>
                <p className="text-neutral-700 mb-8 max-w-2xl mx-auto">
                  Thank you for requesting a consultation with Blanca Correa Law. We've received 
                  your information and will contact you within 24 hours to confirm your appointment.
                </p>
                <div className="bg-primary-50 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-neutral-900 mb-3">What happens next?</h3>
                  <ul className="text-left space-y-2 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>We'll review your consultation request</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>A team member will contact you to confirm your appointment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>You'll receive a confirmation email with preparation instructions</span>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => window.location.href = '/'}
                  className="btn-primary"
                >
                  Return to Homepage
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
