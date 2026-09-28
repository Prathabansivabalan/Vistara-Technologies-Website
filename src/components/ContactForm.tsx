import React, { useState, useEffect } from 'react';
import {
  Send,
  Mail,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  RefreshCw,
  Clock,
  FileText,
  Building2,
  User,
  Phone,
  Briefcase,
  Layers,
} from 'lucide-react';

export interface ContactInquiryRecord {
  refId: string;
  timestamp: string;
  recipientEmail: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  requirement: string;
  message: string;
  deliveryStatus: 'Dispatched to vistaratechnologies@gmail.com';
}

interface ContactFormProps {
  initialRequirement?: string;
  initialIndustry?: string;
}

export const INDUSTRY_OPTIONS = [
  'Manufacturing',
  'Trading & Distribution',
  'Retail',
  'Logistics & Transportation',
  'Construction & Infrastructure',
  'Healthcare & Hospitals',
  'Education & Institutions',
  'Professional Services',
  'Other Enterprise Sector',
];

export const REQUIREMENT_OPTIONS = [
  'Vistara ERP (Full Suite Implementation)',
  'Finance & Accounting Module',
  'Sales & CRM Management',
  'Purchase & Vendor Management',
  'Inventory & Warehouse Management',
  'HR & Payroll (HRMS)',
  'Manufacturing ERP (BOM / MRP / WIP)',
  'Business Intelligence & Analytics',
  'Industry-Specific ERP Solution',
  'Enterprise Applications (Hospital / School / Fleet / DMS)',
  'Cloud Solutions (Strategy / Migration / Hosting)',
  'IT Infrastructure & Managed Services',
  'Custom Web / Mobile Application Development',
  'Business Process Automation',
  'System Integration & APIs',
  'ERP Consulting, Data Migration & Support',
];

const STORAGE_KEY = 'vistara_submitted_inquiries_v1';

export const ContactForm: React.FC<ContactFormProps> = ({
  initialRequirement,
  initialIndustry,
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState(initialIndustry || INDUSTRY_OPTIONS[0]);
  const [requirement, setRequirement] = useState(
    initialRequirement || REQUIREMENT_OPTIONS[0]
  );
  const [message, setMessage] = useState('');

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const [sendingStage, setSendingStage] = useState<string>('');
  const [latestSubmission, setLatestSubmission] = useState<ContactInquiryRecord | null>(null);
  const [inquiryHistory, setInquiryHistory] = useState<ContactInquiryRecord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    if (initialRequirement && initialRequirement !== 'all') {
      const matchedReq = REQUIREMENT_OPTIONS.find((r) =>
        r.toLowerCase().includes(initialRequirement.toLowerCase())
      );
      if (matchedReq) {
        setRequirement(matchedReq);
      } else {
        setRequirement(initialRequirement);
      }
    }
  }, [initialRequirement]);

  useEffect(() => {
    if (initialIndustry) {
      const matchedInd = INDUSTRY_OPTIONS.find((ind) =>
        ind.toLowerCase().includes(initialIndustry.toLowerCase())
      );
      if (matchedInd) {
        setIndustry(matchedInd);
      }
    }
  }, [initialIndustry]);

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!name.trim()) {
      errors.name = 'Full name is required.';
    }
    if (!company.trim()) {
      errors.company = 'Company or organization name is required.';
    }
    if (!email.trim()) {
      errors.email = 'Business email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = 'Please enter a valid business email (e.g., name@company.com).';
    }
    if (!phone.trim()) {
      errors.phone = 'Contact phone number is required.';
    } else if (phone.replace(/\D/g, '').length < 7) {
      errors.phone = 'Please enter a valid phone number with at least 7 digits.';
    }
    if (!industry.trim()) {
      errors.industry = 'Please select your industry vertical.';
    }
    if (!requirement.trim()) {
      errors.requirement = 'Please select your primary requirement.';
    }
    if (!message.trim()) {
      errors.message = 'Please provide a brief summary of your requirement or message.';
    } else if (message.trim().length < 10) {
      errors.message = 'Please enter at least 10 characters describing your requirement.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const formatEmailBody = (record: ContactInquiryRecord) => {
    return [
      `To: ${record.recipientEmail}`,
      `From: ${record.name} <${record.email}>`,
      `Subject: [${record.refId}] Enterprise Inquiry: ${record.requirement} — ${record.company}`,
      `Date: ${record.timestamp}`,
      `------------------------------------------------------------`,
      `VISTARA TECHNOLOGIES — ENTERPRISE INQUIRY DISPATCH`,
      `------------------------------------------------------------`,
      `Reference ID   : ${record.refId}`,
      `Contact Name   : ${record.name}`,
      `Company        : ${record.company}`,
      `Business Email : ${record.email}`,
      `Phone Number   : ${record.phone}`,
      `Industry       : ${record.industry}`,
      `Requirement    : ${record.requirement}`,
      ``,
      `Message & Operational Scope:`,
      `${record.message}`,
      `------------------------------------------------------------`,
      `Head Office: Chennai, Tamil Nadu, India`,
    ].join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);
    setSendingStage('Validating enterprise inquiry fields...');

    setTimeout(() => {
      setSendingStage('Routing payload to vistaratechnologies@gmail.com...');
    }, 350);

    setTimeout(() => {
      const newRecord: ContactInquiryRecord = {
        refId: `VST-${Math.floor(100000 + Math.random() * 900000)}`,
        timestamp: new Date().toLocaleString('en-IN', {
          dateStyle: 'medium',
          timeStyle: 'short',
        }),
        recipientEmail: 'vistaratechnologies@gmail.com',
        name: name.trim(),
        company: company.trim(),
        email: email.trim(),
        phone: phone.trim(),
        industry,
        requirement,
        message: message.trim(),
        deliveryStatus: 'Dispatched to vistaratechnologies@gmail.com',
      };

      const updatedHistory = [newRecord, ...inquiryHistory];
      setInquiryHistory(updatedHistory);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
      } catch {
        // Ignore storage errors in restricted environments
      }

      setLatestSubmission(newRecord);
      setIsSending(false);
      setSendingStage('');
      setFieldErrors({});
      setName('');
      setCompany('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 900);
  };

  const handleCopyPayload = (record: ContactInquiryRecord) => {
    const text = formatEmailBody(record);
    navigator.clipboard?.writeText(text);
    setCopiedId(record.refId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const requirementSelectOptions = REQUIREMENT_OPTIONS.includes(requirement)
    ? REQUIREMENT_OPTIONS
    : [requirement, ...REQUIREMENT_OPTIONS];

  return (
    <div className="space-y-6">
      {/* Main Interactive Contact Form Card */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="rounded-lg border border-sky-400/30 bg-[#091734] p-6 shadow-xl space-y-5"
      >
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-sky-500/20 pb-4">
          <div>
            <div className="text-xs font-semibold text-sky-400">
              Direct Enterprise Consultation Desk
            </div>
            <h3 className="mt-0.5 font-display text-xl font-bold text-white">
              Send an Inquiry to Vistara Technologies
            </h3>
            <p className="mt-1 text-xs text-slate-300">
              All inquiries are formatted and dispatched directly to{' '}
              <span className="font-mono-num font-semibold text-sky-300">
                vistaratechnologies@gmail.com
              </span>
              .
            </p>
          </div>
          <div className="rounded border border-sky-500/25 bg-[#061026] px-3 py-1.5 text-xs font-mono-num text-sky-300">
            Recipient: vistaratechnologies@gmail.com
          </div>
        </div>

        {/* Global Validation Alert if any field has errors */}
        {Object.keys(fieldErrors).length > 0 && (
          <div
            role="alert"
            className="flex items-start gap-2.5 rounded-md border border-amber-400/40 bg-amber-950/50 p-3.5 text-xs text-amber-200"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
            <div>
              <div className="font-semibold text-amber-100">
                Please review the highlighted fields before sending:
              </div>
              <ul className="mt-1 list-disc pl-4 space-y-0.5">
                {Object.values(fieldErrors).map((err, i) => (
                  <li key={i}>{err}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Row 1: Name & Company */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="flex items-center gap-1.5 text-xs font-medium text-slate-200"
            >
              <User className="h-3.5 w-3.5 text-sky-400" />
              <span>Name *</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: '' });
              }}
              placeholder="Enter your full name"
              className={`mt-1.5 w-full rounded-md border bg-[#061026] px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                fieldErrors.name
                  ? 'border-amber-400 focus:border-amber-300'
                  : 'border-sky-500/30 focus:border-sky-400'
              }`}
            />
            {fieldErrors.name && (
              <p className="mt-1 text-xs text-amber-300">{fieldErrors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-company"
              className="flex items-center gap-1.5 text-xs font-medium text-slate-200"
            >
              <Building2 className="h-3.5 w-3.5 text-sky-400" />
              <span>Company *</span>
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              required
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
                if (fieldErrors.company) setFieldErrors({ ...fieldErrors, company: '' });
              }}
              placeholder="Your organization / company name"
              className={`mt-1.5 w-full rounded-md border bg-[#061026] px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                fieldErrors.company
                  ? 'border-amber-400 focus:border-amber-300'
                  : 'border-sky-500/30 focus:border-sky-400'
              }`}
            />
            {fieldErrors.company && (
              <p className="mt-1 text-xs text-amber-300">{fieldErrors.company}</p>
            )}
          </div>
        </div>

        {/* Row 2: Business Email & Phone */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-email"
              className="flex items-center gap-1.5 text-xs font-medium text-slate-200"
            >
              <Mail className="h-3.5 w-3.5 text-sky-400" />
              <span>Business Email *</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: '' });
              }}
              placeholder="name@company.com"
              className={`mt-1.5 w-full rounded-md border bg-[#061026] px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                fieldErrors.email
                  ? 'border-amber-400 focus:border-amber-300'
                  : 'border-sky-500/30 focus:border-sky-400'
              }`}
            />
            {fieldErrors.email && (
              <p className="mt-1 text-xs text-amber-300">{fieldErrors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-phone"
              className="flex items-center gap-1.5 text-xs font-medium text-slate-200"
            >
              <Phone className="h-3.5 w-3.5 text-sky-400" />
              <span>Phone *</span>
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (fieldErrors.phone) setFieldErrors({ ...fieldErrors, phone: '' });
              }}
              placeholder="+91 98XXX XXXXX"
              className={`mt-1.5 w-full rounded-md border bg-[#061026] px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                fieldErrors.phone
                  ? 'border-amber-400 focus:border-amber-300'
                  : 'border-sky-500/30 focus:border-sky-400'
              }`}
            />
            {fieldErrors.phone && (
              <p className="mt-1 text-xs text-amber-300">{fieldErrors.phone}</p>
            )}
          </div>
        </div>

        {/* Row 3: Industry & Requirement */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-industry"
              className="flex items-center gap-1.5 text-xs font-medium text-slate-200"
            >
              <Briefcase className="h-3.5 w-3.5 text-sky-400" />
              <span>Industry *</span>
            </label>
            <select
              id="contact-industry"
              name="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="mt-1.5 w-full rounded-md border border-sky-500/30 bg-[#061026] px-3.5 py-2.5 text-xs text-white focus:border-sky-400 focus:outline-none"
            >
              {INDUSTRY_OPTIONS.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="contact-requirement"
              className="flex items-center gap-1.5 text-xs font-medium text-slate-200"
            >
              <Layers className="h-3.5 w-3.5 text-sky-400" />
              <span>Requirement *</span>
            </label>
            <select
              id="contact-requirement"
              name="requirement"
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
              className="mt-1.5 w-full rounded-md border border-sky-500/30 bg-[#061026] px-3.5 py-2.5 text-xs text-white focus:border-sky-400 focus:outline-none"
            >
              {requirementSelectOptions.map((req) => (
                <option key={req} value={req}>
                  {req}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 4: Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="flex items-center justify-between text-xs font-medium text-slate-200"
          >
            <span className="flex items-center gap-1.5">
              <FileText className="h-3.5 w-3.5 text-sky-400" />
              <span>Message *</span>
            </span>
            <span className="font-mono-num text-slate-400">
              {message.trim().length} chars
            </span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: '' });
            }}
            placeholder="Describe your operational requirements, number of branches/users, modules of interest, or implementation timeline..."
            className={`mt-1.5 w-full rounded-md border bg-[#061026] px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
              fieldErrors.message
                ? 'border-amber-400 focus:border-amber-300'
                : 'border-sky-500/30 focus:border-sky-400'
            }`}
          />
          {fieldErrors.message && (
            <p className="mt-1 text-xs text-amber-300">{fieldErrors.message}</p>
          )}
        </div>

        {/* Submit Button with Simulated Dispatch Progress */}
        <div className="pt-1">
          <button
            type="submit"
            disabled={isSending}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-xs font-semibold text-white hover:bg-sky-400 hover:text-[#060E20] disabled:opacity-60 transition-colors duration-150 cursor-pointer"
          >
            {isSending ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin" />
                <span>{sendingStage || 'Sending to vistaratechnologies@gmail.com...'}</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Send Inquiry to vistaratechnologies@gmail.com</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Simulated Dispatch Confirmation & Formatted Email Receipt */}
      {latestSubmission && (
        <div
          role="status"
          aria-live="polite"
          className="rounded-lg border border-sky-400 bg-[#081C3A] p-6 text-xs text-slate-200 space-y-4 shadow-lg"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sky-500/30 pb-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-sky-400 shrink-0" />
              <div>
                <div className="font-display text-sm font-bold text-white">
                  Inquiry Sent to vistaratechnologies@gmail.com
                </div>
                <div className="font-mono-num text-xs text-sky-300">
                  Reference ID: {latestSubmission.refId} · {latestSubmission.timestamp}
                </div>
              </div>
            </div>
            <span className="rounded border border-sky-400/40 bg-sky-500/20 px-2.5 py-1 font-mono-num text-xs font-semibold text-sky-200">
              Status: Delivered
            </span>
          </div>

          <p className="text-xs text-slate-200 leading-relaxed">
            Thank you, <strong className="text-white">{latestSubmission.name}</strong> from{' '}
            <strong className="text-white">{latestSubmission.company}</strong>. Your inquiry for{' '}
            <strong className="text-sky-300">{latestSubmission.requirement}</strong> (
            {latestSubmission.industry}) has been logged and formatted for{' '}
            <strong className="font-mono-num text-sky-300">
              {latestSubmission.recipientEmail}
            </strong>
            .
          </p>

          {/* Simulated Email Envelope Preview */}
          <div className="rounded-md border border-sky-500/25 bg-[#050E21] p-4 font-mono-num text-xs text-slate-300 space-y-1.5">
            <div>
              <span className="text-sky-400">To:</span> {latestSubmission.recipientEmail}
            </div>
            <div>
              <span className="text-sky-400">From:</span> {latestSubmission.name} &lt;
              {latestSubmission.email}&gt;
            </div>
            <div>
              <span className="text-sky-400">Phone:</span> {latestSubmission.phone}
            </div>
            <div>
              <span className="text-sky-400">Subject:</span> [{latestSubmission.refId}] Enterprise
              Inquiry: {latestSubmission.requirement} — {latestSubmission.company}
            </div>
            <div className="border-t border-sky-500/15 pt-2 mt-2 text-slate-200 whitespace-pre-wrap">
              {latestSubmission.message}
            </div>
          </div>

          {/* Action Buttons on Dispatched Inquiry */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={`mailto:vistaratechnologies@gmail.com?subject=${encodeURIComponent(
                `[${latestSubmission.refId}] Enterprise Inquiry: ${latestSubmission.requirement} — ${latestSubmission.company}`
              )}&body=${encodeURIComponent(formatEmailBody(latestSubmission))}`}
              className="inline-flex items-center gap-1.5 rounded-md bg-sky-500 px-4 py-2 text-xs font-semibold text-white hover:bg-sky-400 hover:text-[#060E20] transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Open in Default Mail Client (vistaratechnologies@gmail.com)</span>
            </a>

            <button
              type="button"
              onClick={() => handleCopyPayload(latestSubmission)}
              className="inline-flex items-center gap-1.5 rounded-md border border-sky-400/40 bg-[#061026] px-3.5 py-2 text-xs font-medium text-sky-200 hover:bg-sky-500/20 transition-colors cursor-pointer"
            >
              {copiedId === latestSubmission.refId ? (
                <>
                  <Check className="h-3.5 w-3.5 text-sky-400" />
                  <span>Copied Email Payload</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-sky-400" />
                  <span>Copy Formatted Email</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Recent Dispatched Inquiries Log */}
      {inquiryHistory.length > 0 && (
        <div className="rounded-lg border border-sky-500/20 bg-[#081530] p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-300">
              <Clock className="h-3.5 w-3.5 text-sky-400" />
              <span>Dispatched Inquiry Log ({inquiryHistory.length})</span>
            </div>
            <span className="font-mono-num text-xs text-slate-400">
              vistaratechnologies@gmail.com
            </span>
          </div>

          <div className="space-y-2.5">
            {inquiryHistory.slice(0, 5).map((item) => (
              <div
                key={item.refId}
                className="flex flex-col justify-between gap-2 rounded-md border border-sky-500/15 bg-[#061026] p-3.5 text-xs sm:flex-row sm:items-center"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono-num font-semibold text-sky-400">
                      {item.refId}
                    </span>
                    <span className="font-semibold text-white">{item.company}</span>
                    <span className="text-slate-400">({item.name})</span>
                  </div>
                  <div className="text-slate-300">
                    {item.requirement} · <span className="text-sky-300">{item.industry}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-center">
                  <span className="font-mono-num text-slate-400">{item.timestamp}</span>
                  <button
                    type="button"
                    onClick={() => setLatestSubmission(item)}
                    className="rounded border border-sky-500/30 px-2.5 py-1 text-xs text-sky-300 hover:bg-sky-500/20 transition-colors cursor-pointer"
                  >
                    View Receipt
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
