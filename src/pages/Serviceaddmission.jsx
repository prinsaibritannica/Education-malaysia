import { useState } from 'react';
import {
  CheckCircle2,
  ListChecks,
  Clock,
  Check,
  FileText,
  Plane,
  ClipboardCheck,
  Shield,
  UserCheck,
  Calendar,
  AlertTriangle,
  AlertCircle
} from 'lucide-react';

// ✅ Checklist Section
function ChecklistSection({ items }) {
  const [checkedItems, setCheckedItems] = useState(new Set());

  const toggleItem = (index) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) newChecked.delete(index);
    else newChecked.add(index);
    setCheckedItems(newChecked);
  };

  const progress = Math.round((checkedItems.size / items.length) * 100);

  return (
    <div className="bg-blue-50 rounded-2xl shadow-lg border border-blue-200 p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl shadow-md">
            <ListChecks className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Summary Checklist</h2>
            <p className="text-slate-600 text-sm mt-1">Track your progress through the process</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-blue-600">{progress}%</div>
          <div className="text-sm text-slate-600">Complete</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6 bg-slate-100 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-green-500 to-emerald-500 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Checklist Items */}
      <div className="grid md:grid-cols-2 gap-3">
        {items.map((item, index) => {
          const isChecked = checkedItems.has(index);
          return (
            <button
              key={index}
              onClick={() => toggleItem(index)}
              className={`flex items-start gap-3 p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                isChecked
                  ? 'bg-green-50 border-green-300 shadow-sm'
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
              }`}
            >
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle2
                  className={`w-5 h-5 transition-colors duration-200 ${
                    isChecked ? 'text-green-600' : 'text-slate-300'
                  }`}
                />
              </div>
              <span
                className={`text-sm leading-relaxed transition-colors duration-200 ${
                  isChecked ? 'text-slate-700 font-medium' : 'text-slate-600'
                }`}
              >
                {item}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ✅ Process Step
function ProcessStep({ number, title, description, icon: Icon, color, duration, isLast }) {
  const colorClasses = {
    emerald: {
      bg: 'from-emerald-500 to-teal-500',
      border: 'border-emerald-200',
      text: 'text-emerald-700',
      bgLight: 'bg-emerald-50',
      iconBg: 'bg-emerald-100'
    },
    blue: {
      bg: 'from-blue-500 to-cyan-500',
      border: 'border-blue-200',
      text: 'text-blue-700',
      bgLight: 'bg-blue-50',
      iconBg: 'bg-blue-100'
    },
    amber: {
      bg: 'from-amber-500 to-orange-500',
      border: 'border-amber-200',
      text: 'text-amber-700',
      bgLight: 'bg-amber-50',
      iconBg: 'bg-amber-100'
    },
    teal: {
      bg: 'from-teal-500 to-cyan-500',
      border: 'border-teal-200',
      text: 'text-teal-700',
      bgLight: 'bg-teal-50',
      iconBg: 'bg-teal-100'
    },
    violet: {
      bg: 'from-violet-500 to-purple-500',
      border: 'border-violet-200',
      text: 'text-violet-700',
      bgLight: 'bg-violet-50',
      iconBg: 'bg-violet-100'
    },
    rose: {
      bg: 'from-rose-500 to-pink-500',
      border: 'border-rose-200',
      text: 'text-rose-700',
      bgLight: 'bg-rose-50',
      iconBg: 'bg-rose-100'
    },
    indigo: {
      bg: 'from-indigo-500 to-blue-500',
      border: 'border-indigo-200',
      text: 'text-indigo-700',
      bgLight: 'bg-indigo-50',
      iconBg: 'bg-indigo-100'
    }
  };

  const colors = colorClasses[color];

  return (
    <div className="relative">
      <div
        className={`bg-white rounded-xl shadow-md border ${colors.border} p-5 transition-all duration-300 hover:shadow-lg hover:scale-[1.005]`}
      >
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div
              className={`bg-gradient-to-br ${colors.bg} w-14 h-14 rounded-lg shadow-md flex items-center justify-center mb-2`}
            >
              <span className="text-xl font-bold text-white">{number}</span>
            </div>
            <div className={`${colors.iconBg} w-14 h-14 rounded-lg flex items-center justify-center`}>
              <Icon className={`w-7 h-7 ${colors.text}`} />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-lg font-bold text-slate-900 leading-tight">{title}</h3>
              <div className={`${colors.bgLight} px-2.5 py-1 rounded-lg flex items-center gap-1.5 flex-shrink-0`}>
                <Clock className={`w-3.5 h-3.5 ${colors.text}`} />
                <span className={`text-xs font-semibold ${colors.text}`}>{duration}</span>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>

      {!isLast && (
        <div className="flex justify-center py-1.5">
          <div className="w-0.5 h-4 bg-gradient-to-b from-slate-300 to-slate-200 rounded-full"></div>
        </div>
      )}
    </div>
  );
}

// ✅ Main App
export default function App() {
  const steps = [
    {
      number: 1,
      title: 'Obtain Offer from Malaysian Institution',
      description:
        'Apply to a recognised Malaysian institution registered with EMGS. Once accepted, you will receive an Offer Letter detailing your programme, duration, and tuition.',
      icon: FileText,
      color: 'emerald',
      duration: '2-4 weeks'
    },
    {
      number: 2,
      title: 'Prepare Required Documents',
      description:
        'Collect all necessary documents including passport, photographs, academic certificates, English proficiency certificates, health forms, and proof of financial capacity.',
      icon: ClipboardCheck,
      color: 'blue',
      duration: '1-2 weeks'
    },
    {
      number: 3,
      title: 'Institution Submits EMGS Application',
      description:
        'Your institution submits the student pass application on your behalf through the EMGS online portal. Track your application status online.',
      icon: Shield,
      color: 'amber',
      duration: '2-4 weeks'
    },
    {
      number: 4,
      title: 'Receive Visa Approval Letter (VAL)',
      description:
        'Once approved, EMGS issues a VAL necessary for travel and entry. Keep both printed and digital copies safe.',
      icon: Check,
      color: 'teal',
      duration: '1-2 days'
    },
    {
      number: 5,
      title: 'Apply for Entry Visa (if required)',
      description:
        'Depending on your nationality, obtain a Single-Entry Visa (SEV) from a Malaysian embassy or consulate before arrival.',
      icon: UserCheck,
      color: 'violet',
      duration: '1-2 weeks'
    },
    {
      number: 6,
      title: 'Travel to Malaysia & Medical Screening',
      description:
        'Travel with your passport, VAL, and SEV. Undergo medical screening at an EMGS-approved clinic within the first few days.',
      icon: Plane,
      color: 'rose',
      duration: '3-5 days'
    },
    {
      number: 7,
      title: 'Student Pass Endorsement',
      description:
        'After medical clearance, the Immigration Department endorses your Student Pass sticker in your passport, valid for one year.',
      icon: Calendar,
      color: 'indigo',
      duration: '1-2 weeks'
    }
  ];

  const checklistItems = [
    'Receive Offer Letter from recognised institution',
    'Prepare passport (18+ months validity)',
    'Passport-size photograph (white background)',
    'Academic certificates and transcripts',
    'English proficiency certificate (IELTS/TOEFL/PTE)',
    'Health Declaration Form',
    'Proof of financial capacity',
    'Institution submits via EMGS portal',
    'Pay processing fees',
    'Receive VAL',
    'Obtain Entry Visa/SEV (if required)',
    'Travel to Malaysia',
    'Complete medical screening',
    'Get Student Pass sticker endorsed'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-xl shadow-lg">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Malaysian Student Visa Process</h1>
              <p className="text-slate-600 mt-1">Complete guide to obtaining your student pass</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Important Notice */}
        <div className="mb-8 bg-blue-50 border border-blue-200 rounded-2xl p-5 flex gap-4 shadow-sm">
          <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">Important Information</h3>
            <p className="text-slate-800 leading-relaxed">
              Processing times are approximate. Maintain 80% attendance and satisfactory academic progress for annual renewals.
              Your Student Pass is valid for one year and must be renewed until programme completion.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold">STEP-BY-STEP</span>
            Process Flow
          </h2>
          <div className="space-y-3">
            {steps.map((step, index) => (
              <ProcessStep key={step.number} {...step} isLast={index === steps.length - 1} />
            ))}
          </div>
        </div>

        {/* Checklist */}
        <ChecklistSection items={checklistItems} />

        {/* Renewal Info */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl shadow-md">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Renewal & Variation</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Prior to expiry, your institution will submit a renewal application to EMGS. For programme changes,
                level variations, or stay extensions, updated documents must be submitted as per EMGS guidelines.
              </p>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">Note:</span> Ensure you start the renewal process
                  at least 2-3 months before your current pass expires to avoid complications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-center text-slate-600 text-sm">
            This guide provides general information about the Malaysian student visa process.
            Always verify specific requirements with your institution and EMGS.
          </p>
        </div>
      </footer>
    </div>
  );
}
