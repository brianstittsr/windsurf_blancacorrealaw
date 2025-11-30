'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle, Heart, Briefcase, Flag, Shield, FileText } from 'lucide-react';

type Answer = string | string[];

interface AssessmentData {
  immigrationGoal?: string;
  currentStatus?: string;
  familyInUS?: string;
  familyRelationship?: string;
  hasJobOffer?: string;
  jobType?: string;
  education?: string;
  yearsAsResident?: string;
  marriedToCitizen?: string;
  needProtection?: string;
  protectionReason?: string;
}

export default function AssessmentPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AssessmentData>({});
  const [results, setResults] = useState<any>(null);

  const handleAnswer = (question: string, answer: Answer) => {
    setAnswers(prev => ({ ...prev, [question]: answer }));
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const calculateResults = async () => {
    const recommendations = [];

    // Family-based immigration
    if (answers.immigrationGoal === 'family' || answers.familyInUS === 'yes') {
      if (answers.familyRelationship === 'spouse-citizen' || 
          answers.familyRelationship === 'parent-citizen' || 
          answers.familyRelationship === 'child-citizen') {
        recommendations.push({
          pathway: 'Family-Based Immigration (Immediate Relative)',
          icon: Heart,
          priority: 'high',
          description: 'You may qualify as an immediate relative with no wait time for visa availability.',
          nextSteps: [
            'File Form I-130 (Petition for Alien Relative)',
            'Gather relationship documentation',
            'Prepare for adjustment of status or consular processing',
          ],
          link: '/pathways/family',
        });
      } else if (answers.familyInUS === 'yes') {
        recommendations.push({
          pathway: 'Family-Based Immigration (Preference Category)',
          icon: Heart,
          priority: 'medium',
          description: 'You may qualify under a family preference category, though wait times apply.',
          nextSteps: [
            'Determine your preference category',
            'File Form I-130',
            'Monitor visa bulletin for priority date',
          ],
          link: '/pathways/family',
        });
      }
    }

    // Employment-based immigration
    if (answers.immigrationGoal === 'work' || answers.hasJobOffer === 'yes') {
      if (answers.jobType === 'specialized' || answers.education === 'masters-phd') {
        recommendations.push({
          pathway: 'Employment-Based Immigration',
          icon: Briefcase,
          priority: 'high',
          description: 'Your education and job type suggest eligibility for employment-based visas.',
          nextSteps: [
            'Explore H-1B, L-1, or O-1 visa options',
            'Consider EB-2 or EB-1 green card categories',
            'Work with employer on sponsorship',
          ],
          link: '/pathways/employment',
        });
      } else if (answers.hasJobOffer === 'yes') {
        recommendations.push({
          pathway: 'Work Visa Options',
          icon: Briefcase,
          priority: 'medium',
          description: 'Several work visa options may be available based on your job offer.',
          nextSteps: [
            'Discuss visa sponsorship with employer',
            'Explore H-1B, TN, or other work visas',
            'Gather employment documentation',
          ],
          link: '/pathways/employment',
        });
      }
    }

    // Citizenship
    if (answers.immigrationGoal === 'citizenship' || answers.currentStatus === 'permanent-resident') {
      if (answers.yearsAsResident === '5+' || 
          (answers.yearsAsResident === '3-5' && answers.marriedToCitizen === 'yes')) {
        recommendations.push({
          pathway: 'U.S. Citizenship (Naturalization)',
          icon: Flag,
          priority: 'high',
          description: 'You appear to meet the basic requirements for naturalization.',
          nextSteps: [
            'Verify continuous residence and physical presence',
            'Prepare Form N-400',
            'Study for English and civics tests',
          ],
          link: '/pathways/citizenship',
        });
      } else if (answers.currentStatus === 'permanent-resident') {
        recommendations.push({
          pathway: 'Future Citizenship Eligibility',
          icon: Flag,
          priority: 'low',
          description: 'You may be eligible for citizenship in the future once you meet the residence requirement.',
          nextSteps: [
            'Maintain continuous residence',
            'Track your eligibility date',
            'Begin studying for citizenship tests',
          ],
          link: '/pathways/citizenship',
        });
      }
    }

    // Asylum/humanitarian
    if (answers.needProtection === 'yes' || answers.immigrationGoal === 'protection') {
      recommendations.push({
        pathway: 'Asylum & Humanitarian Relief',
        icon: Shield,
        priority: 'urgent',
        description: 'You may qualify for asylum or other forms of humanitarian protection.',
        nextSteps: [
          'Consult with attorney immediately',
          'Gather evidence of persecution or harm',
          'File asylum application within 1 year of arrival (if applicable)',
        ],
        link: '/services',
      });
    }

    // Default recommendation if no specific pathway identified
    if (recommendations.length === 0) {
      recommendations.push({
        pathway: 'Personalized Consultation Recommended',
        icon: FileText,
        priority: 'medium',
        description: 'Your situation requires a detailed review to identify the best immigration options.',
        nextSteps: [
          'Schedule a consultation',
          'Bring all relevant documentation',
          'Discuss your immigration history and goals',
        ],
        link: '/consultation',
      });
    }

    // Save results to backend (optional - don't block on failure)
    try {
      const { assessmentApi } = await import('@/lib/api');
      await assessmentApi.create({
        answers,
        recommendations,
      });
    } catch (error) {
      console.error('Failed to save assessment results:', error);
      // Continue anyway - don't block user from seeing results
    }

    setResults(recommendations);
    setStep(questions.length);
  };

  const questions = [
    {
      id: 'immigrationGoal',
      question: 'What is your primary immigration goal?',
      type: 'single',
      options: [
        { value: 'family', label: 'Reunite with family in the U.S.' },
        { value: 'work', label: 'Work and live in the U.S.' },
        { value: 'citizenship', label: 'Become a U.S. citizen' },
        { value: 'protection', label: 'Seek protection/asylum' },
        { value: 'other', label: 'Other/Not sure' },
      ],
    },
    {
      id: 'currentStatus',
      question: 'What is your current immigration status?',
      type: 'single',
      options: [
        { value: 'outside-us', label: 'Outside the U.S.' },
        { value: 'visitor', label: 'Visitor/Tourist visa' },
        { value: 'student', label: 'Student visa (F-1)' },
        { value: 'work-visa', label: 'Work visa (H-1B, L-1, etc.)' },
        { value: 'permanent-resident', label: 'Permanent resident (Green card)' },
        { value: 'undocumented', label: 'No current legal status' },
        { value: 'other', label: 'Other' },
      ],
    },
    {
      id: 'familyInUS',
      question: 'Do you have family members who are U.S. citizens or permanent residents?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
      ],
      showIf: (answers: AssessmentData) => 
        answers.immigrationGoal === 'family' || answers.immigrationGoal === 'other',
    },
    {
      id: 'familyRelationship',
      question: 'What is your relationship to your U.S. family member?',
      type: 'single',
      options: [
        { value: 'spouse-citizen', label: 'Spouse of U.S. citizen' },
        { value: 'spouse-resident', label: 'Spouse of permanent resident' },
        { value: 'parent-citizen', label: 'Parent of U.S. citizen (21+)' },
        { value: 'child-citizen', label: 'Child (under 21) of U.S. citizen' },
        { value: 'adult-child', label: 'Adult child of U.S. citizen' },
        { value: 'sibling', label: 'Sibling of U.S. citizen (21+)' },
        { value: 'other', label: 'Other relationship' },
      ],
      showIf: (answers: AssessmentData) => answers.familyInUS === 'yes',
    },
    {
      id: 'hasJobOffer',
      question: 'Do you have a job offer from a U.S. employer?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, I have a job offer' },
        { value: 'current', label: 'Yes, I currently work for a U.S. employer' },
        { value: 'no', label: 'No' },
      ],
      showIf: (answers: AssessmentData) => 
        answers.immigrationGoal === 'work' || answers.immigrationGoal === 'other',
    },
    {
      id: 'jobType',
      question: 'What type of position is it?',
      type: 'single',
      options: [
        { value: 'specialized', label: 'Specialized/Professional (requires degree)' },
        { value: 'executive', label: 'Executive/Managerial' },
        { value: 'skilled', label: 'Skilled worker' },
        { value: 'other', label: 'Other' },
      ],
      showIf: (answers: AssessmentData) => 
        answers.hasJobOffer === 'yes' || answers.hasJobOffer === 'current',
    },
    {
      id: 'education',
      question: 'What is your highest level of education?',
      type: 'single',
      options: [
        { value: 'high-school', label: 'High school or equivalent' },
        { value: 'bachelors', label: 'Bachelor\'s degree' },
        { value: 'masters-phd', label: 'Master\'s or Doctorate' },
        { value: 'other', label: 'Other' },
      ],
      showIf: (answers: AssessmentData) => 
        answers.immigrationGoal === 'work' || answers.hasJobOffer === 'yes',
    },
    {
      id: 'yearsAsResident',
      question: 'How long have you been a permanent resident?',
      type: 'single',
      options: [
        { value: 'less-3', label: 'Less than 3 years' },
        { value: '3-5', label: '3-5 years' },
        { value: '5+', label: 'More than 5 years' },
      ],
      showIf: (answers: AssessmentData) => 
        answers.currentStatus === 'permanent-resident' || answers.immigrationGoal === 'citizenship',
    },
    {
      id: 'marriedToCitizen',
      question: 'Are you married to a U.S. citizen?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes, for 3+ years' },
        { value: 'yes-recent', label: 'Yes, less than 3 years' },
        { value: 'no', label: 'No' },
      ],
      showIf: (answers: AssessmentData) => 
        answers.currentStatus === 'permanent-resident' && answers.yearsAsResident === '3-5',
    },
    {
      id: 'needProtection',
      question: 'Are you fleeing persecution or in need of humanitarian protection?',
      type: 'single',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
      ],
      showIf: (answers: AssessmentData) => 
        answers.immigrationGoal === 'protection' || answers.currentStatus === 'undocumented',
    },
  ];

  const visibleQuestions = questions.filter(q => 
    !q.showIf || q.showIf(answers)
  );

  const currentQuestion = visibleQuestions[step];
  const progress = ((step + 1) / (visibleQuestions.length + 1)) * 100;

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display font-bold text-neutral-900 mb-4">
              Immigration Pathway Assessment
            </h1>
            <p className="text-body text-neutral-700">
              Answer a few questions to discover which immigration options may be right for you.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      {!results && (
        <section className="bg-white border-b border-neutral-200 py-4">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-neutral-700">
                  Question {step + 1} of {visibleQuestions.length}
                </span>
                <span className="text-sm font-medium text-neutral-700">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Question or Results */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {!results ? (
              <div className="bg-white rounded-pathway shadow-card p-8">
                {currentQuestion && (
                  <>
                    <h2 className="text-h2 font-bold text-neutral-900 mb-8">
                      {currentQuestion.question}
                    </h2>

                    <div className="space-y-3 mb-8">
                      {currentQuestion.options.map((option) => (
                        <label
                          key={option.value}
                          className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            answers[currentQuestion.id as keyof AssessmentData] === option.value
                              ? 'border-primary bg-primary-50'
                              : 'border-neutral-200 hover:border-neutral-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name={currentQuestion.id}
                            value={option.value}
                            checked={answers[currentQuestion.id as keyof AssessmentData] === option.value}
                            onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                            className="w-5 h-5 text-primary"
                          />
                          <span className="text-neutral-900 font-medium">
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {step > 0 && (
                        <button
                          onClick={prevStep}
                          className="flex-1 btn-outline inline-flex items-center justify-center gap-2"
                        >
                          <ArrowLeft className="w-5 h-5" />
                          Previous
                        </button>
                      )}
                      
                      {step < visibleQuestions.length - 1 ? (
                        <button
                          onClick={nextStep}
                          disabled={!answers[currentQuestion.id as keyof AssessmentData]}
                          className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                        >
                          Next
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      ) : (
                        <button
                          onClick={calculateResults}
                          disabled={!answers[currentQuestion.id as keyof AssessmentData]}
                          className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                        >
                          See Results
                          <CheckCircle className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
            ) : (
              /* Results */
              <div className="space-y-8">
                <div className="bg-white rounded-pathway shadow-card p-8 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-h1 font-bold text-neutral-900 mb-4">
                    Your Assessment Results
                  </h2>
                  <p className="text-neutral-700 max-w-2xl mx-auto">
                    Based on your answers, here are the immigration pathways that may be available to you.
                  </p>
                </div>

                {results.map((result: any, index: number) => {
                  const Icon = result.icon;
                  const priorityColors = {
                    urgent: 'border-red-500 bg-red-50',
                    high: 'border-primary bg-primary-50',
                    medium: 'border-secondary bg-secondary-50',
                    low: 'border-neutral-300 bg-neutral-50',
                  };

                  return (
                    <div 
                      key={index}
                      className={`bg-white rounded-pathway shadow-card p-8 border-l-4 ${priorityColors[result.priority as keyof typeof priorityColors]}`}
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-soft">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-h3 font-bold text-neutral-900 mb-2">
                            {result.pathway}
                          </h3>
                          <p className="text-neutral-700">
                            {result.description}
                          </p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-neutral-900 mb-3">
                          Recommended Next Steps:
                        </h4>
                        <ul className="space-y-2">
                          {result.nextSteps.map((step: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-neutral-700">
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link 
                        href={result.link}
                        className="btn-primary inline-flex items-center gap-2"
                      >
                        Learn More
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  );
                })}

                <div className="bg-primary-50 rounded-lg p-8 text-center">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    Ready to Take the Next Step?
                  </h3>
                  <p className="text-neutral-700 mb-6">
                    This assessment provides general guidance. Schedule a consultation for a detailed 
                    evaluation of your specific situation and personalized legal advice.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/consultation" className="btn-primary inline-flex items-center justify-center gap-2">
                      Schedule Consultation
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <button
                      onClick={() => {
                        setStep(0);
                        setAnswers({});
                        setResults(null);
                      }}
                      className="btn-outline inline-flex items-center justify-center gap-2"
                    >
                      Start Over
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-neutral-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-neutral-600">
              <strong>Disclaimer:</strong> This assessment tool provides general information only and 
              does not constitute legal advice. Immigration law is complex and individual circumstances 
              vary. Please consult with an immigration attorney for advice specific to your situation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
