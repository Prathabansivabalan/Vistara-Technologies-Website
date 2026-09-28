import heroVistaraErp from '../assets/images/hero_vistara_erp_1790593174556.jpg';
import erpManufacturingFloor from '../assets/images/erp_manufacturing_floor_1790593188636.jpg';
import cloudInfrastructureCenter from '../assets/images/cloud_infrastructure_center_1790593200030.jpg';
import consultingImplementationTeam from '../assets/images/consulting_implementation_team_1790593210849.jpg';

export const IMAGES = {
  hero: heroVistaraErp,
  manufacturing: erpManufacturingFloor,
  cloud: cloudInfrastructureCenter,
  consulting: consultingImplementationTeam,
};

export type NavGroupKey =
  | 'HOME'
  | 'PRODUCTS'
  | 'SOLUTIONS'
  | 'INDUSTRIES'
  | 'SERVICES'
  | 'COMPANY'
  | 'RESOURCES';

export interface SubFeatureItem {
  id: string;
  title: string;
  summary: string;
  capabilities: string[];
  deliverables?: string[];
  operationalImpact?: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  customerIndustry: string;
  location: string;
  businessChallenge: string;
  vistaraSolution: string;
  modulesImplemented: string[];
  implementationProcess: string[];
  businessOutcome: string;
  quantifiedMetrics: { label: string; value: string; timeframe: string }[];
}

export interface ResourceArticle {
  id: string;
  title: string;
  category: 'ERP Guides' | 'Industry Guides' | 'Articles' | 'Product Documentation' | 'White Papers';
  readingTime: string;
  summary: string;
  keyTakeaways: string[];
  sections: { heading: string; body: string }[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department:
    | 'Engineering'
    | 'ERP Consulting'
    | 'Business Analysis'
    | 'Quality Assurance'
    | 'Customer Support'
    | 'Sales'
    | 'Marketing'
    | 'Administration';
  location: string;
  experience: string;
  employmentType: string;
  summary: string;
  responsibilities: string[];
}

export interface TopicSection {
  id: string;
  number: string; // "01" to "23"
  title: string;
  shortTitle: string;
  navGroup: NavGroupKey;
  subtitle: string;
  overview: string;
  secondaryOverview?: string;
  image?: string;
  imageCaption?: string;
  highlights: { label: string; detail: string }[];
  subItems?: SubFeatureItem[];
}

export interface NavMenuItem {
  label: string;
  topicId: string;
  subSelectorId?: string;
}

export interface NavGroup {
  key: NavGroupKey;
  label: string;
  defaultTopicId: string;
  items: NavMenuItem[];
}

export const VISTARA_NAV_MENU: NavGroup[] = [
  {
    key: 'HOME',
    label: 'Home',
    defaultTopicId: 'home',
    items: [{ label: 'Home', topicId: 'home', subSelectorId: 'all' }],
  },
  {
    key: 'PRODUCTS',
    label: 'Products',
    defaultTopicId: 'products',
    items: [
      { label: 'Vistara ERP', topicId: 'products', subSelectorId: 'vistara-erp' },
      { label: 'Finance & Accounting', topicId: 'products', subSelectorId: 'finance-accounting' },
      { label: 'CRM', topicId: 'products', subSelectorId: 'crm-module' },
      { label: 'HR & Payroll', topicId: 'products', subSelectorId: 'hr-payroll' },
      { label: 'Inventory Management', topicId: 'products', subSelectorId: 'inventory-management' },
      { label: 'Manufacturing', topicId: 'products', subSelectorId: 'manufacturing-module' },
      { label: 'Business Analytics', topicId: 'products', subSelectorId: 'business-intelligence' },
    ],
  },
  {
    key: 'SOLUTIONS',
    label: 'Solutions',
    defaultTopicId: 'solutions',
    items: [
      { label: 'ERP Solutions', topicId: 'solutions', subSelectorId: 'sol-erp-solutions' },
      { label: 'Business Automation', topicId: 'solutions', subSelectorId: 'sol-business-automation' },
      { label: 'Enterprise Applications', topicId: 'solutions', subSelectorId: 'sol-enterprise-applications' },
      { label: 'Cloud Solutions', topicId: 'solutions', subSelectorId: 'sol-cloud-solutions' },
      { label: 'System Integration', topicId: 'solutions', subSelectorId: 'sol-system-integration' },
      { label: 'Digital Solutions', topicId: 'solutions', subSelectorId: 'sol-digital-solutions' },
    ],
  },
  {
    key: 'INDUSTRIES',
    label: 'Industries',
    defaultTopicId: 'industries',
    items: [
      { label: 'Manufacturing', topicId: 'industries', subSelectorId: 'ind-manufacturing' },
      { label: 'Trading & Distribution', topicId: 'industries', subSelectorId: 'ind-trading' },
      { label: 'Retail', topicId: 'industries', subSelectorId: 'ind-retail' },
      { label: 'Logistics', topicId: 'industries', subSelectorId: 'ind-logistics' },
      { label: 'Construction', topicId: 'industries', subSelectorId: 'ind-construction' },
      { label: 'Healthcare', topicId: 'industries', subSelectorId: 'ind-healthcare' },
      { label: 'Professional Services', topicId: 'industries', subSelectorId: 'ind-services' },
    ],
  },
  {
    key: 'SERVICES',
    label: 'Services',
    defaultTopicId: 'services',
    items: [
      { label: 'ERP Consulting', topicId: 'services', subSelectorId: 'srv-erp-consulting' },
      { label: 'Implementation', topicId: 'services', subSelectorId: 'srv-implementation' },
      { label: 'Customization', topicId: 'services', subSelectorId: 'srv-customization' },
      { label: 'Data Migration', topicId: 'services', subSelectorId: 'srv-data-migration' },
      { label: 'Application Development', topicId: 'services', subSelectorId: 'srv-application-development' },
      { label: 'Cloud Services', topicId: 'services', subSelectorId: 'srv-cloud-services' },
      { label: 'Integration', topicId: 'services', subSelectorId: 'srv-integration' },
      { label: 'Support & Maintenance', topicId: 'services', subSelectorId: 'srv-support-maintenance' },
    ],
  },
  {
    key: 'COMPANY',
    label: 'Company',
    defaultTopicId: 'company',
    items: [
      { label: 'About Us', topicId: 'company', subSelectorId: 'comp-about-us' },
      { label: 'Leadership', topicId: 'company', subSelectorId: 'comp-leadership' },
      { label: 'Clients', topicId: 'company', subSelectorId: 'comp-clients' },
      { label: 'Case Studies', topicId: 'company', subSelectorId: 'comp-case-studies' },
      { label: 'Careers', topicId: 'company', subSelectorId: 'comp-careers' },
      { label: 'Contact', topicId: 'company', subSelectorId: 'comp-contact' },
    ],
  },
  {
    key: 'RESOURCES',
    label: 'Resources',
    defaultTopicId: 'resources',
    items: [
      { label: 'Articles', topicId: 'resources', subSelectorId: 'res-articles' },
      { label: 'ERP Guides', topicId: 'resources', subSelectorId: 'res-erp-guides' },
      { label: 'FAQs', topicId: 'resources', subSelectorId: 'res-faqs' },
      { label: 'Documentation', topicId: 'resources', subSelectorId: 'res-documentation' },
    ],
  },
];

export const KEY_HOME_CAPABILITIES = [
  {
    id: 'cap-erp',
    title: 'ERP Solutions',
    topicId: 'solutions',
    subSelectorId: 'sol-erp-solutions',
    summary:
      'Unified multi-branch resource planning spanning finance, sales, procurement, multi-warehouse inventory, manufacturing, and payroll.',
    metrics: 'Core Integrated Modules · Multi-Currency & GST Compliant',
  },
  {
    id: 'cap-enterprise',
    title: 'Enterprise Applications',
    topicId: 'solutions',
    subSelectorId: 'sol-enterprise-applications',
    summary:
      'Purpose-built standalone and connected suites for CRM, HRMS, Asset Management, Healthcare, Education, Fleet, and Document Workflows.',
    metrics: '9 Specialized Suites · Modular API Architecture',
  },
  {
    id: 'cap-cloud',
    title: 'Cloud Solutions',
    topicId: 'solutions',
    subSelectorId: 'sol-cloud-solutions',
    summary:
      'End-to-end cloud strategy, application migration, managed ERP hosting, automated backup orchestration, and hybrid cloud governance.',
    metrics: 'Public, Private & Hybrid Models · Disaster Recovery Ready',
  },
  {
    id: 'cap-automation',
    title: 'Business Automation',
    topicId: 'solutions',
    subSelectorId: 'sol-business-automation',
    summary:
      'Rule-driven approval hierarchies, automated three-way PO matching, scheduled financial reporting, and real-time operational triggers.',
    metrics: 'Automated Workflow Engines · Full Audit Trail Logging',
  },
  {
    id: 'cap-it',
    title: 'IT Services',
    topicId: 'services',
    subSelectorId: 'srv-cloud-services',
    summary:
      'Enterprise network architecture, server administration, database performance tuning, security hardening, and 24/7 infrastructure monitoring.',
    metrics: 'Managed Infrastructure Disciplines · Remote & On-Site',
  },
  {
    id: 'cap-mobile',
    title: 'Mobile Applications',
    topicId: 'services',
    subSelectorId: 'srv-application-development',
    summary:
      'Native and cross-platform Android and iOS applications for field sales, executive approvals, warehouse scanning, and fleet delivery.',
    metrics: 'Enterprise Mobility Apps · Offline Sync Capable',
  },
  {
    id: 'cap-analytics',
    title: 'Data & Analytics',
    topicId: 'products',
    subSelectorId: 'business-intelligence',
    summary:
      'Executive BI dashboards, working-capital cashflow forecasting, inventory aging heatmaps, and real-time production variance analytics.',
    metrics: 'Real-Time KPI Dashboards · Drill-Down Ledger Traceability',
  },
];

export const ERP_CORE_MODULES: SubFeatureItem[] = [
  {
    id: 'finance-accounting',
    title: 'Finance & Accounting',
    summary:
      'Centralized multi-company financial management with real-time sub-ledger posting from procurement, inventory, manufacturing, and sales operations.',
    capabilities: [
      'General Ledger (Multi-dimension cost centers, automated journal postings, consolidated trial balance)',
      'Accounts Payable (Three-way PO/GRN/Invoice matching, vendor aging, scheduled payment runs)',
      'Accounts Receivable (Credit limit enforcement, customer dunning, automated receipt allocation)',
      'Invoicing (GST/tax-compliant billing, e-invoicing readiness, recurring and milestone billing)',
      'Expenses (Employee reimbursements, departmental budget controls, multi-stage expense approvals)',
      'Financial Reports (Balance Sheet, Profit & Loss, Cash Flow statements, statutory schedules)',
    ],
    deliverables: [
      'Automated bank reconciliation and multi-currency revaluation',
      'Real-time cost center and branch profitability statements',
      'Audit-ready voucher history with document attachments',
    ],
    operationalImpact: 'Reduces monthly financial close cycles from 14 days to 3 business days.',
  },
  {
    id: 'sales-management',
    title: 'Sales Management',
    summary:
      'Structured order-to-cash lifecycle governing customer inquiries, tiered pricing, quotation revisions, credit checks, dispatch schedules, and invoicing.',
    capabilities: [
      'Leads (Multi-channel inquiry capture, territory assignment, qualification scoring)',
      'Quotations (Configurable price lists, discount approval matrix, revision history tracking)',
      'Sales Orders (Real-time ATP stock reservation, partial delivery scheduling, credit hold checks)',
      'Invoices (Automated dispatch-to-invoice generation, tax calculation, debit/credit notes)',
      'Customer Management (360-degree account ledger, contract pricing, payment performance history)',
    ],
    deliverables: [
      'Automated stock reservation upon sales order confirmation',
      'Role-based discount approval workflows for sales managers',
      'Order fulfillment tracking from warehouse pick to customer delivery',
    ],
    operationalImpact: 'Eliminates order-to-billing discrepancies and accelerates quotation turnaround.',
  },
  {
    id: 'purchase-management',
    title: 'Purchase Management',
    summary:
      'Disciplined procure-to-pay governance connecting material requisitions, vendor RFQ comparisons, purchase orders, quality inspections, and supplier billing.',
    capabilities: [
      'Purchase Requests (Departmental indent creation, budget validation, automated MRP triggers)',
      'Purchase Orders (Multi-level authorization, blanket POs, landed cost calculation)',
      'Vendor Management (Supplier onboarding, price-lead time comparison, vendor rating scorecards)',
      'Goods Receipts (GRN against PO, quality quarantine inspection, short/excess receipt controls)',
      'Purchase Reports (Spend analysis by category, pending PO aging, vendor price variance reports)',
    ],
    deliverables: [
      'Automated RFQ comparative statement generation across approved vendors',
      'Strict tolerance validation between Purchase Order, GRN, and Supplier Invoice',
      'Historical vendor performance tracking on quality and delivery timeliness',
    ],
    operationalImpact: 'Brings 100% spend visibility and prevents unauthorized off-contract purchasing.',
  },
  {
    id: 'inventory-management',
    title: 'Inventory Management',
    summary:
      'Multi-warehouse stock visibility with bin-level control, batch/lot traceability, serial number tracking, and automated safety-stock replenishment.',
    capabilities: [
      'Stock Management (Real-time valuation via FIFO/Weighted Average, physical stock reconciliation)',
      'Warehouses (Multi-location, zone, rack, and bin hierarchy with put-away rules)',
      'Stock Transfers (Inter-warehouse and inter-branch transit tracking with e-way documentation)',
      'Batch Management (Manufacturing/expiry date tracking, FEFO allocation, quality hold control)',
      'Serial Numbers (Unit-level warranty, service history, and lifecycle tracking from receipt to sale)',
      'Reorder Levels (Min-Max safety stock thresholds, automated purchase indent generation)',
    ],
    deliverables: [
      'Barcode and QR-enabled inward, put-away, pick, and dispatch validation',
      'Dead-stock, slow-moving, and ABC inventory classification analytics',
      'Real-time stock reservation across manufacturing work orders and sales orders',
    ],
    operationalImpact: 'Cuts stockout incidents and reduces excess carrying costs across warehouses.',
  },
  {
    id: 'hr-payroll',
    title: 'HR & Payroll',
    summary:
      'End-to-end human capital management covering employee lifecycle records, biometric/shift attendance, leave policies, and statutory payroll processing.',
    capabilities: [
      'Employee Management (Digital personnel files, onboarding checklists, skill & asset records)',
      'Attendance (Biometric & geo-tagged mobile attendance integration, multi-shift roster management)',
      'Leave (Configurable leave accrual rules, compensatory off tracking, self-service approvals)',
      'Payroll (Automated salary computation, PF/ESI/TDS statutory deductions, bank advice generation)',
      'HR Reports (Headcount attrition analytics, department cost allocation, statutory registers)',
    ],
    deliverables: [
      'One-click monthly payroll execution with automated payslip distribution',
      'Employee self-service portal for tax declarations, leave requests, and reimbursement claims',
      'Direct posting of salary and statutory liabilities to the General Ledger',
    ],
    operationalImpact: 'Ensures zero-error statutory compliance and streamlines monthly payroll runs.',
  },
  {
    id: 'manufacturing-module',
    title: 'Manufacturing',
    summary:
      'Shop-floor to top-floor production control integrating multi-level Bills of Materials, capacity planning, work order execution, and costing.',
    capabilities: [
      'Bill of Materials (Multi-level BOM, alternate materials, scrap norms, routing operations)',
      'Production Planning (Master Production Schedule, MRP material requirement explosion, capacity load)',
      'Work Orders (Job card issuance, stage-wise WIP tracking, subcontracting/job-work management)',
      'Material Consumption (Backflushing, issue against BOM, floor return and wastage accounting)',
      'Production Reports (Planned vs. actual yield, machine downtime, batch cost variance analysis)',
    ],
    deliverables: [
      'Real-time Work-in-Progress (WIP) valuation across production stages',
      'Automated raw material shortage alerts prior to work order release',
      'Complete backward and forward lot traceability from raw material to finished goods',
    ],
    operationalImpact: 'Improves shop-floor schedule adherence and provides accurate unit manufacturing cost.',
  },
  {
    id: 'crm-module',
    title: 'CRM (Customer Relationship Management)',
    summary:
      'Structured pipeline and relationship engine giving sales and account teams complete visibility from initial inquiry to repeat enterprise orders.',
    capabilities: [
      'Leads (Web, email, and field lead capture, duplicate detection, automated routing)',
      'Opportunities (Stage-gate probability tracking, expected revenue forecasting, competitor notes)',
      'Customer Accounts (Key stakeholder mapping, communication logs, service ticket visibility)',
      'Follow-ups (Scheduled call/meeting reminders, SLA escalation alerts, activity timelines)',
      'Sales Pipeline (Visual funnel conversion metrics, sales rep quota vs. achievement tracking)',
    ],
    deliverables: [
      'One-click conversion of won opportunities into ERP Quotations and Sales Orders',
      'Complete historical audit of every client interaction, proposal, and contract',
      'Executive forecasting by territory, product line, and account manager',
    ],
    operationalImpact: 'Increases lead-to-order conversion rates through disciplined follow-up governance.',
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    summary:
      'Role-based decision intelligence transforming live transactional ERP data into actionable financial, operational, and supply chain insights.',
    capabilities: [
      'Dashboards (Executive CXO scorecards, real-time daily cash position, live order book status)',
      'Management Reports (Consolidated MIS packs, budget vs. actual variance, branch comparisons)',
      'Sales Analytics (Margin analysis by SKU/region/customer, sales velocity, churn indicators)',
      'Inventory Analytics (Stock turn ratio, aging buckets, warehouse space & capital utilization)',
      'Financial Analytics (DSO/DPO working capital trends, ratio analysis, cash flow projections)',
    ],
    deliverables: [
      'Drill-down capability from summary KPI charts directly to source ERP vouchers',
      'Automated scheduled distribution of daily and weekly MIS reports to leadership',
      'Custom report builder with export to structured spreadsheet and PDF formats',
    ],
    operationalImpact: 'Replaces manual spreadsheet consolidation with live, single-source-of-truth analytics.',
  },
];

export const INDUSTRY_VERTICALS: SubFeatureItem[] = [
  {
    id: 'ind-manufacturing',
    title: 'ERP for Manufacturing',
    summary:
      'Production + Inventory + Procurement + Finance + Sales — engineered for discrete, batch, industrial machinery, automotive component, and process manufacturers.',
    capabilities: [
      'Multi-level Bill of Materials (BOM) with revision control, phantom assemblies, and co-products',
      'Material Requirements Planning (MRP) balancing open sales orders, safety stock, and vendor lead times',
      'Shop-floor Work Order routing, machine center scheduling, and external job-work/subcontracting tracking',
      'Quality Assurance (Inward raw material QC, in-process stage inspection, pre-dispatch certification)',
      'Integrated standard vs. actual absorption costing across material, labor, and factory overheads',
    ],
    deliverables: ['Production Planning', 'Inventory & Lot Control', 'Procurement & Subcontracting', 'Cost Accounting', 'Sales & Dispatch'],
    operationalImpact: 'Synchronizes procurement with shop-floor schedules to eliminate material bottlenecks.',
  },
  {
    id: 'ind-trading',
    title: 'ERP for Trading & Distribution',
    summary:
      'Purchasing + Inventory + Sales + Warehousing + Finance — built for wholesale importers, multi-branch distributors, and B2B supply houses.',
    capabilities: [
      'Multi-tier pricing matrices, volume rebate schemes, promotional slabs, and dealer credit limits',
      'Import procurement lifecycle including LC tracking, customs duty, freight, and landed cost apportionment',
      'Multi-warehouse bin management, batch/expiry FEFO picking, and inter-branch stock transfers',
      'High-velocity order processing with backorder management and route-based dispatch planning',
      'Real-time SKU margin visibility and automated customer credit exposure blocks',
    ],
    deliverables: ['Import & Local Purchasing', 'Multi-Warehouse Inventory', 'B2B Sales & Pricing', 'Logistics & Dispatch', 'Financial Accounting'],
    operationalImpact: 'Protects trading margins with exact landed-cost calculation and strict credit control.',
  },
  {
    id: 'ind-retail',
    title: 'ERP for Retail',
    summary:
      'POS + Inventory + Purchasing + Sales + Reporting — designed for multi-store retail chains, supermarkets, specialty outlets, and omnichannel brands.',
    capabilities: [
      'High-speed Point of Sale (POS) billing with barcode scanning, split tenders, and offline resilience',
      'Centralized merchandise planning, automated store replenishment, and inter-store stock balancing',
      'Loyalty points management, gift vouchers, time-bound promotional campaigns, and bundle pricing',
      'Centralized vendor procurement with consolidated warehouse-to-store distribution',
      'Store-wise daily cash/card settlement reconciliation and hourly sales performance analytics',
    ],
    deliverables: ['Retail POS Billing', 'Centralized Inventory', 'Replenishment & Purchasing', 'Loyalty & Promotions', 'Store Profitability Reporting'],
    operationalImpact: 'Unifies store front-end checkout with central warehouse inventory and finance.',
  },
  {
    id: 'ind-logistics',
    title: 'ERP for Logistics & Transportation',
    summary:
      'Fleet + Transport + Billing + Operations + Finance — built for freight forwarders, 3PL operators, fleet owners, and parcel transport networks.',
    capabilities: [
      'Consignment booking, LR/waybill generation, manifest creation, and hub-and-spoke transit tracking',
      'Fleet lifecycle management covering fuel efficiency, tire tracking, preventive maintenance, and permits',
      'Driver roster, trip advance issuance, route expense settlement, and POD (Proof of Delivery) capture',
      'Contract freight billing, detention/demurrage calculation, and automated client invoicing',
      'Vehicle-wise and route-wise profitability statements integrated with core financial ledgers',
    ],
    deliverables: ['Fleet & Maintenance', 'Consignment & Trip Operations', 'Automated Freight Billing', 'Driver & Expense Control', 'Route Financials'],
    operationalImpact: 'Provides per-kilometer and per-vehicle cost transparency across the entire fleet.',
  },
  {
    id: 'ind-construction',
    title: 'ERP for Construction & Infrastructure',
    summary:
      'Projects + Procurement + Inventory + Finance + Workforce — tailored for EPC contractors, civil engineering firms, and real estate developers.',
    capabilities: [
      'Bill of Quantities (BOQ) estimation, work breakdown structure (WBS), and project budget baselines',
      'Site-level material indenting, centralized procurement, and site store consumption tracking',
      'Subcontractor work order contracts, running account (RA) bill verification, and retention money control',
      'Equipment and heavy machinery deployment logs, fuel consumption, and site transfer tracking',
      'Project-wise cash flow, client milestone billing, and Cost-to-Complete (CTC) variance reporting',
    ],
    deliverables: ['BOQ & Project Controls', 'Site Procurement & Stores', 'Subcontractor RA Billing', 'Site Workforce & Plant', 'Project Accounting'],
    operationalImpact: 'Prevents project cost overruns by linking site material consumption and RA bills to BOQ limits.',
  },
  {
    id: 'ind-healthcare',
    title: 'ERP for Healthcare & Hospitals',
    summary:
      'Patient Administration + Pharmacy & Clinical Inventory + Billing + HR + Finance — built for multi-specialty hospitals, clinics, and diagnostic centers.',
    capabilities: [
      'Outpatient (OPD) and Inpatient (IPD) registration, appointment scheduling, and bed allocation',
      'Pharmacy and surgical consumable inventory with strict batch expiry, narcotic logs, and reorder alerts',
      'Integrated laboratory, radiology, and procedure billing with insurance/TPA claim documentation',
      'Roster management for clinicians, nursing staff, and paramedics with specialized payroll rules',
      'Departmental revenue and cost-per-bed financial analytics with statutory compliance',
    ],
    deliverables: ['OPD/IPD Administration', 'Pharmacy & Medical Stores', 'Consolidated Patient Billing', 'Clinical HR & Rosters', 'Hospital Finance'],
    operationalImpact: 'Streamlines patient billing and eliminates expiry wastage in medical and pharmacy stores.',
  },
  {
    id: 'ind-services',
    title: 'ERP for Professional Services',
    summary:
      'Projects + Timesheets + Expenses + Billing + Finance — engineered for consulting practices, engineering design firms, IT services, and agencies.',
    capabilities: [
      'Resource capacity planning, skill-based project allocation, and billable utilization tracking',
      'Weekly and daily employee timesheets with project manager approval workflows',
      'Project expense capture with client-reimbursable vs. non-billable classification',
      'Flexible billing models: Time & Material (T&M), Fixed-Price milestones, and recurring retainers',
      'Engagement-level gross margin analysis and automated revenue recognition',
    ],
    deliverables: ['Project & Resource Planning', 'Timesheet Governance', 'Project Expense Accounting', 'Milestone & T&M Billing', 'Practice Financials'],
    operationalImpact: 'Maximizes billable resource utilization and accelerates project milestone invoicing.',
  },
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: 'cs-manufacturing',
    title: 'Multi-Plant Precision Engineering ERP Transformation',
    customerIndustry: 'Industrial & Automotive Component Manufacturing',
    location: 'Chennai & Hosur Industrial Corridor, Tamil Nadu',
    businessChallenge:
      'A multi-plant precision component manufacturer operated with disconnected accounting software and spreadsheet-based production schedules, resulting in frequent raw-material shortages, unrecorded subcontracting scrap, and a 15-day delay in monthly financial closing.',
    vistaraSolution:
      'Deployed Vistara ERP across two manufacturing plants and central headquarters, unifying multi-level BOMs, MRP-driven procurement, barcode-enabled raw material and WIP stores, external job-work tracking, and automated General Ledger integration.',
    modulesImplemented: [
      'Manufacturing (BOM, MRP, Work Orders, Subcontracting)',
      'Inventory Management (Batch & Barcode Stores)',
      'Purchase Management (Vendor Portal & 3-Way Match)',
      'Finance & Accounting (Cost Center & GL Consolidation)',
      'Business Intelligence (Plant KPI Dashboards)',
    ],
    implementationProcess: [
      'Phase 1: Shop-floor process mapping & item master standardization (3 weeks)',
      'Phase 2: BOM structuring, subcontracting workflow configuration & historical data migration (5 weeks)',
      'Phase 3: Parallel run, storekeeper & production supervisor training, and full go-live (4 weeks)',
    ],
    businessOutcome:
      'Achieved complete lot-level traceability from raw steel receipt to finished dispatch, eliminated unauthorized purchase price variances, and enabled real-time WIP valuation.',
    quantifiedMetrics: [
      { label: 'Inventory Carrying Cost Reduction', value: '-22%', timeframe: 'Within 6 Months of Go-Live' },
      { label: 'Monthly Financial Close Cycle', value: '3 Days', timeframe: 'Down from 15 Business Days' },
      { label: 'On-Time Order Dispatch Rate', value: '96.4%', timeframe: 'Across Both Production Plants' },
    ],
  },
  {
    id: 'cs-trading',
    title: 'Multi-Branch Wholesale Distribution & Supply Chain Unification',
    customerIndustry: 'Industrial Electrical & Hardware Trading & Distribution',
    location: 'South India (Chennai, Coimbatore, Bengaluru, Hyderabad)',
    businessChallenge:
      'Managing 18,000+ SKUs across 4 regional distribution hubs caused pricing inconsistencies, delayed inter-branch stock transfers, and high Days Sales Outstanding (DSO) due to manual credit limit checks.',
    vistaraSolution:
      'Implemented Vistara Trading & Distribution ERP with centralized price-list governance, automated credit-exposure locks at sales order entry, FEFO bin-level warehouse management, and mobile field-sales order booking.',
    modulesImplemented: [
      'Sales Management (Tiered Pricing & Automated Credit Control)',
      'Inventory Management (Multi-Hub Bin & Transfer Management)',
      'Purchase Management (Reorder Engine & Import Landed Costing)',
      'Mobility Solutions (Field Sales Mobile App)',
      'Finance & Accounting (Automated AR Aging & GST Filing)',
    ],
    implementationProcess: [
      'Phase 1: SKU codification and regional tax/pricing matrix setup (2 weeks)',
      'Phase 2: Central warehouse barcode deployment and mobile app rollout for 45 field reps (4 weeks)',
      'Phase 3: Multi-branch cutover and automated daily MIS dashboard deployment (2 weeks)',
    ],
    businessOutcome:
      'Synchronized stock availability across all four regional hubs in real time, prevented overdue credit dispatches automatically, and accelerated order fulfillment from 48 hours to same-day dispatch.',
    quantifiedMetrics: [
      { label: 'Order-to-Dispatch Turnaround', value: '< 6 Hrs', timeframe: 'Down from 48 Hours Average' },
      { label: 'Overdue Receivables (DSO)', value: '-28%', timeframe: 'In First 2 Quarters' },
      { label: 'Stock Accuracy Across 4 Hubs', value: '99.2%', timeframe: 'Verified in Quarterly Audits' },
    ],
  },
  {
    id: 'cs-construction',
    title: 'EPC Project Controls & Site Procurement Digitization',
    customerIndustry: 'Civil Engineering & Commercial Construction',
    location: 'Chennai & Tier-2 Infrastructure Sites',
    businessChallenge:
      'Lack of real-time visibility into site-level material consumption and subcontractor running-account (RA) bills led to budget overruns and duplicate material indents across 12 active project sites.',
    vistaraSolution:
      'Rolled out Vistara Construction ERP linking WBS/BOQ quantities directly to site material indents, centralized HO purchase approvals, mobile site GRNs, and automated subcontractor retention accounting.',
    modulesImplemented: [
      'Industry ERP for Construction (BOQ & WBS Budget Control)',
      'Purchase & Subcontractor Management (RA Bill Verification)',
      'Inventory & Asset Management (Site Stores & Equipment Logs)',
      'Business Automation (Multi-Level Mobile Approval Workflows)',
      'Finance & Project Accounting',
    ],
    implementationProcess: [
      'Phase 1: BOQ cost-code standardization and approval hierarchy design (3 weeks)',
      'Phase 2: Site store digitization and mobile GRN training for site engineers (4 weeks)',
      'Phase 3: Integration with head-office finance and project Cost-to-Complete dashboards (3 weeks)',
    ],
    businessOutcome:
      'Enforced strict BOQ ceiling checks before purchase order issuance, gave project directors live visibility into site stock balances, and standardized subcontractor billing verification.',
    quantifiedMetrics: [
      { label: 'Unplanned Site Procurement Spend', value: '-18.5%', timeframe: 'Across 12 Active Sites' },
      { label: 'Subcontractor RA Bill Processing', value: '2 Days', timeframe: 'Reduced from 11 Days' },
      { label: 'Site Material Reconciliation', value: '100%', timeframe: 'Real-Time BOQ vs. Actuals' },
    ],
  },
];

export const CLIENT_PORTFOLIO = [
  {
    industry: 'Precision Automotive Components',
    solution: 'Vistara Manufacturing ERP + Shop-Floor Barcoding + Finance',
    location: 'Ambattur & Oragadam, Chennai',
    scope: '2 Manufacturing Units · 140+ Concurrent Users',
  },
  {
    industry: 'Electrical & Industrial Switchgear Distribution',
    solution: 'Vistara Trading ERP + Multi-Warehouse WMS + Field Sales Mobility',
    location: 'Chennai, Coimbatore & Bengaluru',
    scope: '4 Distribution Hubs · 18,000+ Active SKUs',
  },
  {
    industry: 'Civil & Commercial EPC Contracting',
    solution: 'Vistara Construction ERP + BOQ Project Controls + Subcontractor Billing',
    location: 'Tamil Nadu & Andhra Pradesh',
    scope: '12 Concurrent Project Sites · Mobile Site GRN',
  },
  {
    industry: 'Multi-Specialty Healthcare & Diagnostics',
    solution: 'Hospital & Clinic Management Suite + Pharmacy Inventory + HRMS',
    location: 'Chennai, Tamil Nadu',
    scope: '180-Bed Facility · Integrated OPD/IPD & Pharmacy',
  },
  {
    industry: 'Cold-Chain & Surface Fleet Logistics',
    solution: 'Vistara Logistics ERP + Fleet Maintenance + Consignment Billing',
    location: 'Chennai Port & Southern Corridor',
    scope: '85+ Commercial Vehicles · Automated Trip Settlement',
  },
  {
    industry: 'Food Processing & Packaged Commodities',
    solution: 'Batch Manufacturing ERP + FEFO Expiry Control + Cloud Hosting',
    location: 'Madurai & Dindigul, Tamil Nadu',
    scope: 'FSSAI Batch Traceability · Automated Distributor Portal',
  },
  {
    industry: 'Educational Trust & Engineering Institutions',
    solution: 'Campus ERP + Fee Management + HRMS & Biometric Payroll',
    location: 'Kanchipuram & Chengalpattu',
    scope: '3 Campuses · 4,200+ Students & Faculty Records',
  },
  {
    industry: 'Engineering & Industrial Consultancy',
    solution: 'Professional Services ERP + Timesheet Billing + Document Management',
    location: 'Guindy, Chennai',
    scope: 'Project Margin Analytics · Automated Milestone Invoicing',
  },
];

export const CLIENT_TESTIMONIALS = [
  {
    quote:
      'Before implementing Vistara ERP, reconciling raw material consumption across our subcontracting vendors and in-house machine shop took two weeks every month. Vistara unified our BOM, job-work challans, and accounting ledger so we now see exact batch costs daily.',
    name: 'R. Balasubramanian',
    designation: 'Director of Operations',
    company: 'Precision Industrial Components Manufacturer, Chennai',
    outcome: 'Reduced monthly closing time from 15 days to 3 days and cut raw material variance by 22%.',
  },
  {
    quote:
      'Vistara Technologies helped us streamline our procurement and multi-branch inventory operations across four southern states. Their automated credit-limit enforcement and field-sales mobile app eliminated billing delays and gave our management real-time stock visibility.',
    name: 'Karthik Sundaram',
    designation: 'Managing Partner',
    company: 'Regional Industrial & Electrical Distribution Enterprise',
    outcome: 'Accelerated order-to-dispatch to under 6 hours and reduced overdue receivables by 28%.',
  },
  {
    quote:
      'What stood out about Vistara was their structured implementation methodology. Their consultants analyzed our site BOQ workflows first, migrated our legacy data cleanly, and trained our site engineers until every purchase indent and RA bill ran smoothly through the system.',
    name: 'S. Venkatesh',
    designation: 'Vice President — Projects & Commercial',
    company: 'Infrastructure & Civil EPC Contracting Group',
    outcome: 'Achieved 100% BOQ-linked procurement governance across 12 active construction sites.',
  },
];

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    id: 'art-what-is-erp',
    title: 'What is ERP? Architecture of an Integrated Enterprise Platform',
    category: 'ERP Guides',
    readingTime: '6 min read',
    summary:
      'A practical executive guide to Enterprise Resource Planning (ERP): how unified relational databases replace departmental silos across finance, supply chain, manufacturing, and human resources.',
    keyTakeaways: [
      'Eliminates duplicate data entry between sales, stores, procurement, and accounting.',
      'Enforces standardized approval hierarchies and audit trails across all branches.',
      'Provides real-time working capital, inventory valuation, and profitability visibility.',
    ],
    sections: [
      {
        heading: 'Beyond Standalone Accounting Software',
        body: 'Many growing enterprises begin with standalone accounting packages combined with spreadsheets for inventory, production, and payroll. As transaction volume scales, this fragmentation causes stock mismatches, delayed invoicing, and reactive purchasing. An ERP platform unifies every operational department onto a single transactional database where a Goods Receipt Note (GRN) in the warehouse immediately updates stock quantities, vendor payable sub-ledgers, and batch quality queues.',
      },
      {
        heading: 'Core Pillars of Vistara ERP',
        body: 'A complete ERP architecture connects Order-to-Cash (CRM, Quotations, Sales Orders, Dispatch, Invoicing, Collections), Procure-to-Pay (Indents, RFQs, Purchase Orders, GRN, Quality Check, Vendor Bills), Plan-to-Produce (BOM, MRP, Work Orders, Shop-Floor WIP, Costing), and Hire-to-Retire (HRMS, Attendance, Payroll, Statutory Compliance) with real-time General Ledger integration.',
      },
    ],
  },
  {
    id: 'art-erp-manufacturing',
    title: 'ERP for Manufacturing: Controlling BOM, MRP, WIP, and Unit Costing',
    category: 'Industry Guides',
    readingTime: '8 min read',
    summary:
      'How discrete and process manufacturers align shop-floor work orders, subcontracting job-work, and raw material procurement to prevent production line stoppages.',
    keyTakeaways: [
      'Multi-level Bill of Materials (BOM) with scrap allowances and routing stages.',
      'Net material requirement calculation factoring in current stock, open POs, and reservations.',
      'Stage-wise Work-in-Progress (WIP) tracking and external job-work reconciliation.',
    ],
    sections: [
      {
        heading: 'Solving the Material Shortage vs. Excess Stock Dilemma',
        body: 'Manufacturers frequently suffer from simultaneous overstocking of slow-moving items and line stoppages caused by missing critical components. Vistara ERP’s MRP engine explodes confirmed sales orders and production forecasts against multi-level BOMs, automatically generating time-phased purchase indents based on vendor lead times.',
      },
      {
        heading: 'Subcontracting & Lot Traceability',
        body: 'For Indian manufacturing enterprises managing external heat-treatment, plating, or machining vendors, tracking material sent out on job-work challans and reconciling scrap returns is critical for both cost control and GST compliance. Vistara ERP tracks every lot from inward raw material inspection through subcontracting stages to final dispatch.',
      },
    ],
  },
  {
    id: 'art-erp-trading',
    title: 'ERP for Trading Businesses: Margin Protection, Landed Cost & Credit Governance',
    category: 'Industry Guides',
    readingTime: '7 min read',
    summary:
      'Strategies for wholesale distributors and importers to optimize inventory turnover, automate multi-tier dealer pricing, and control receivables risk.',
    keyTakeaways: [
      'Apportioning freight, customs duty, and insurance for accurate item landed cost.',
      'Automated credit limit and overdue invoice checks at the time of order booking.',
      'FEFO (First-Expiry, First-Out) and ABC velocity analysis across multi-location warehouses.',
    ],
    sections: [
      {
        heading: 'True Landed Cost Visibility',
        body: 'In trading and distribution, pricing decisions based solely on supplier invoice value often erode net margins once freight, clearing charges, and handling costs are factored in. Vistara ERP allocates ancillary procurement expenses directly to batch inventory values so sales teams see real gross margins during quotation generation.',
      },
      {
        heading: 'Automated Receivables & Credit Discipline',
        body: 'Rather than relying on manual phone approvals from the accounts department, Vistara ERP enforces configurable credit rules—blocking order dispatch when a dealer exceeds either their credit limit or maximum credit days unless digitally authorized by management.',
      },
    ],
  },
  {
    id: 'art-inventory-optimization',
    title: 'How ERP Improves Inventory Management Across Multi-Location Warehouses',
    category: 'Articles',
    readingTime: '5 min read',
    summary:
      'Practical framework for implementing bin-level tracking, batch/serial controls, cycle counting, and dynamic min-max reorder points.',
    keyTakeaways: [
      'Bin and rack location mapping eliminates picking delays and dispatch errors.',
      'Automated reorder level alerts prevent stockouts of high-velocity items.',
      'Batch and serial number tracking simplifies warranty claims and quality recalls.',
    ],
    sections: [
      {
        heading: 'Eliminating Ghost Inventory and Stock Discrepancies',
        body: 'When physical stock movements outpace manual ledger entries, sales teams commit stock that does not exist on the shelf. Barcode-driven inward put-away and outward picking in Vistara ERP ensure system stock matches physical bin balances in real time.',
      },
      {
        heading: 'Working Capital Release Through Aging Analytics',
        body: 'Built-in inventory aging buckets (0–30, 31–60, 61–90, 90+ days) highlight non-moving capital early, enabling procurement teams to halt reorders or liquidate slow-moving stock before obsolescence.',
      },
    ],
  },
  {
    id: 'art-implementation-guide',
    title: 'ERP Implementation Guide: A Structured Blueprint for Zero-Disruption Rollout',
    category: 'ERP Guides',
    readingTime: '9 min read',
    summary:
      'Step-by-step methodology covering business process study, master data cleansing, solution blueprinting, conference room pilots, user training, and go-live governance.',
    keyTakeaways: [
      'Why master data standardization (Item, Vendor, Chart of Accounts) determines ERP success.',
      'Structuring role-based User Acceptance Testing (UAT) and parallel runs.',
      'Post-implementation hypercare and continuous process optimization.',
    ],
    sections: [
      {
        heading: 'Discovery & Solution Blueprinting',
        body: 'Successful ERP implementations begin with documenting current workflows, identifying bottlenecks, and defining a signed-off Functional Requirements Blueprint before writing a single line of customization.',
      },
      {
        heading: 'Data Migration & User Adoption',
        body: 'Vistara’s implementation consultants provide structured migration templates to cleanse legacy master records and opening balances, followed by hands-on departmental workshops so storekeepers, accountants, and planners operate with confidence from Day 1.',
      },
    ],
  },
  {
    id: 'art-cloud-vs-onprem',
    title: 'Cloud ERP vs. On-Premise ERP: Evaluating TCO, Security & Scalability',
    category: 'White Papers',
    readingTime: '7 min read',
    summary:
      'An objective architectural comparison of Public Cloud, Private Cloud, Hybrid, and On-Premise deployment models for mid-to-large enterprises.',
    keyTakeaways: [
      'Comparing upfront capital expenditure (CapEx) vs. predictable operational expenditure (OpEx).',
      'Multi-site accessibility for remote branches, warehouses, and mobile field teams.',
      'Automated encrypted backups, disaster recovery RPO/RTO, and infrastructure maintenance.',
    ],
    sections: [
      {
        heading: 'Architectural Flexibility with Vistara',
        body: 'Vistara ERP is engineered to run seamlessly on dedicated cloud infrastructure (AWS / Azure), private enterprise data centers, or hybrid topologies—allowing organizations to align deployment with regulatory, latency, and IT staffing requirements.',
      },
      {
        heading: 'Security & Continuity Considerations',
        body: 'Cloud deployments orchestrated by Vistara include automated daily encrypted snapshots, geo-redundant failover, TLS 1.3 transport encryption, and strict role-based access controls.',
      },
    ],
  },
  {
    id: 'art-choose-erp',
    title: 'How to Choose an ERP System: Evaluation Checklist for Decision Makers',
    category: 'Product Documentation',
    readingTime: '6 min read',
    summary:
      'Key criteria for CFOs, COOs, and IT Heads when evaluating enterprise software vendors: industry fit, integration openness, customization depth, and post-sales support.',
    keyTakeaways: [
      'Verify native support for your industry workflows rather than forcing workarounds.',
      'Assess API openness for banking, GST/e-invoicing, e-commerce, and biometric integrations.',
      'Evaluate the vendor’s direct implementation track record and SLA-backed support process.',
    ],
    sections: [
      {
        heading: 'Functional Depth vs. Architectural Rigidity',
        body: 'Off-the-shelf software that cannot adapt to your pricing rules, approval hierarchies, or manufacturing routings leads to external spreadsheet workarounds. Choose a modular platform like Vistara ERP that combines standardized best practices with clean, upgrade-safe customization.',
      },
      {
        heading: 'Long-Term Partnership & Post-Go-Live Support',
        body: 'An ERP system evolves alongside your business. Ensure your technology partner provides structured ticket-based SLAs, database performance monitoring, and statutory update compliance.',
      },
    ],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'Vistara ERP & Modules',
    question: 'Can we deploy specific Vistara ERP modules first and add more modules later?',
    answer:
      'Yes. Vistara ERP is built on a modular yet unified architecture. Organizations can start with core modules such as Finance & Accounting, Sales, Purchase, and Inventory Management, and seamlessly activate Manufacturing, HR & Payroll, CRM, or Mobility modules in phased rollouts without re-implementing the database.',
  },
  {
    category: 'Implementation & Migration',
    question: 'How long does a typical Vistara ERP implementation take, and how is legacy data migrated?',
    answer:
      'Standard trading, distribution, or service implementations typically complete in 6 to 10 weeks, while multi-plant manufacturing or custom enterprise rollouts take 10 to 16 weeks. Our team provides structured ETL migration templates to validate and import your existing Chart of Accounts, Customer/Vendor masters, Item masters, BOMs, and opening balances.',
  },
  {
    category: 'Cloud & Deployment',
    question: 'Does Vistara support Cloud, Private Server, and Hybrid deployments?',
    answer:
      'Yes. Vistara ERP and our Enterprise Applications can be deployed on AWS or Microsoft Azure cloud environments managed by Vistara, on your organization’s private cloud, or in a hybrid setup linking local plant operations with centralized cloud reporting.',
  },
  {
    category: 'Customization & Integration',
    question: 'Can Vistara ERP integrate with our existing third-party applications, biometric devices, or e-commerce store?',
    answer:
      'Yes. Vistara provides RESTful APIs and secure webhook connectors to integrate with biometric attendance hardware, barcode scanners, payment gateways, banking portals, e-commerce platforms, and statutory tax/e-invoicing systems.',
  },
  {
    category: 'Support & Maintenance',
    question: 'What kind of post-implementation support and training does Vistara Technologies provide?',
    answer:
      'Every implementation includes role-based administrator and end-user training, comprehensive documentation, hypercare support during go-live, and ongoing SLA-backed Support & Maintenance following our structured lifecycle: Issue Reported → Ticket Created → Analysis → Resolution → Testing → Closure.',
  },
];

export const CAREER_OPENINGS: JobOpening[] = [
  {
    id: 'job-erp-consultant',
    title: 'Senior Functional ERP Consultant (Manufacturing & Supply Chain)',
    department: 'ERP Consulting',
    location: 'Chennai, Tamil Nadu (On-Site & Client Locations)',
    experience: '4–8 Years',
    employmentType: 'Full-Time',
    summary:
      'Lead end-to-end business process analysis, solution blueprinting, module configuration, and user training for manufacturing and distribution ERP implementations.',
    responsibilities: [
      'Conduct as-is workflow assessments across procurement, inventory, BOM/MRP production, and finance.',
      'Prepare Functional Requirement Specifications (FRS) and configure Vistara ERP modules.',
      'Guide client teams through master data preparation, UAT sign-off, parallel runs, and go-live.',
    ],
  },
  {
    id: 'job-fullstack-eng',
    title: 'Senior Enterprise Software Engineer (.NET / Node.js & React)',
    department: 'Engineering',
    location: 'Chennai, Tamil Nadu',
    experience: '3–6 Years',
    employmentType: 'Full-Time',
    summary:
      'Architect and build scalable enterprise ERP modules, high-concurrency REST APIs, and responsive React financial and analytical interfaces.',
    responsibilities: [
      'Design transactional backend services using .NET Core / Node.js with SQL Server and PostgreSQL.',
      'Build high-density, keyboard-accessible React & TypeScript enterprise UI components.',
      'Optimize complex multi-ledger reporting queries and third-party API integrations.',
    ],
  },
  {
    id: 'job-ba',
    title: 'Enterprise Business Analyst',
    department: 'Business Analysis',
    location: 'Chennai, Tamil Nadu',
    experience: '2–5 Years',
    employmentType: 'Full-Time',
    summary:
      'Bridge client operational requirements and engineering delivery across custom enterprise applications, workflow automation, and ERP extensions.',
    responsibilities: [
      'Document detailed process flowcharts, approval matrices, and data mapping specifications.',
      'Collaborate with engineering and QA teams to validate functional deliverables against client SLAs.',
      'Deliver product demonstrations and conduct structured user training workshops.',
    ],
  },
  {
    id: 'job-qa-eng',
    title: 'Quality Assurance Engineer (Enterprise Financial & ERP Systems)',
    department: 'Quality Assurance',
    location: 'Chennai, Tamil Nadu',
    experience: '2–4 Years',
    employmentType: 'Full-Time',
    summary:
      'Ensure functional accuracy, accounting ledger integrity, and performance reliability across Vistara ERP releases.',
    responsibilities: [
      'Execute end-to-end test scenarios covering multi-currency accounting, tax calculations, and inventory valuation.',
      'Perform automated regression testing and API validation prior to client deployments.',
      'Verify bug resolutions through the formal Support & Maintenance ticket lifecycle.',
    ],
  },
  {
    id: 'job-support-spec',
    title: 'Application & Database Support Engineer',
    department: 'Customer Support',
    location: 'Chennai, Tamil Nadu',
    experience: '1–4 Years',
    employmentType: 'Full-Time',
    summary:
      'Provide responsive technical and functional support, SQL query diagnostics, and system maintenance for live enterprise ERP customers.',
    responsibilities: [
      'Triage and resolve customer support tickets within defined SLA response windows.',
      'Assist users with monthly closing reconciliations, report configurations, and permission updates.',
      'Monitor automated database backups, system updates, and server health metrics.',
    ],
  },
];

export const PRODUCTS_SUB_ITEMS: SubFeatureItem[] = [
  {
    id: 'vistara-erp',
    title: 'Vistara ERP',
    summary:
      'Flagship unified enterprise resource planning suite operating on a single real-time database across Finance & Accounting, Sales Management, Purchase Management, Inventory, Manufacturing, HR & Payroll, CRM, and Business Analytics.',
    capabilities: [
      'Finance & Accounting: General Ledger, Accounts Payable, Accounts Receivable, Invoicing, Expenses, and Financial Reports',
      'Sales Management: Leads, Quotations, Sales Orders, Tax Invoices, Credit Limit Controls, and Customer Management',
      'Purchase Management: Purchase Requests, Vendor RFQs, Purchase Orders, Goods Receipts (GRN), and Spend Reports',
      'Inventory Management: Multi-Warehouse Stock, Bin Locations, Stock Transfers, Batch/FEFO, Serial Numbers, and Reorder Levels',
      'Manufacturing: Multi-Level Bill of Materials (BOM), MRP Production Planning, Work Orders, WIP & Material Consumption',
      'HR & Payroll, CRM & Business Analytics: Unified workforce payroll, sales pipeline tracking, and executive KPI dashboards',
    ],
    deliverables: [
      'Real-time sub-ledger to General Ledger synchronization across all branches and plants',
      'Role-based maker-checker approval workflows, audit trails, and statutory GST compliance',
      'Modular deployment: activate all core modules together or roll out in structured phases',
    ],
    operationalImpact: 'Unifies the entire organization onto a single source of truth, eliminating departmental data silos.',
  },
  {
    id: 'finance-accounting',
    title: 'Finance & Accounting',
    summary:
      'Centralized multi-company financial management with real-time sub-ledger posting from procurement, inventory, manufacturing, and sales operations.',
    capabilities: [
      'General Ledger (Multi-dimension cost centers, automated journal postings, consolidated trial balance)',
      'Accounts Payable (Three-way PO/GRN/Invoice matching, vendor aging, scheduled payment runs)',
      'Accounts Receivable (Credit limit enforcement, customer dunning, automated receipt allocation)',
      'Invoicing (GST/tax-compliant billing, e-invoicing readiness, recurring and milestone billing)',
      'Expenses (Employee reimbursements, departmental budget controls, multi-stage expense approvals)',
      'Financial Reports (Balance Sheet, Profit & Loss, Cash Flow statements, statutory schedules)',
    ],
    deliverables: [
      'Automated bank reconciliation and multi-currency revaluation',
      'Real-time cost center and branch profitability statements',
      'Audit-ready voucher history with document attachments',
    ],
    operationalImpact: 'Reduces monthly financial close cycles from 14 days to 3 business days.',
  },
  {
    id: 'crm-module',
    title: 'CRM',
    summary:
      'Structured customer relationship and sales pipeline engine giving commercial teams complete visibility from initial inquiry and quotation to repeat enterprise orders.',
    capabilities: [
      'Leads (Web, email, and field lead capture, duplicate detection, automated territory routing)',
      'Opportunities (Stage-gate probability tracking, expected revenue forecasting, competitor notes)',
      'Customer Accounts (360-degree stakeholder mapping, communication logs, service ticket visibility)',
      'Follow-ups (Scheduled call/meeting reminders, SLA escalation alerts, activity timelines)',
      'Sales Pipeline & Quotations (Visual funnel conversion metrics, configurable price lists, and Sales Order conversion)',
    ],
    deliverables: [
      'One-click conversion of won opportunities into ERP Quotations and Sales Orders',
      'Complete historical audit of every client interaction, proposal, and contract',
      'Executive forecasting by territory, product line, and account manager',
    ],
    operationalImpact: 'Increases lead-to-order conversion rates through disciplined follow-up governance.',
  },
  {
    id: 'hr-payroll',
    title: 'HR & Payroll',
    summary:
      'End-to-end human capital management covering employee lifecycle records, biometric/shift attendance, leave policies, and statutory payroll processing.',
    capabilities: [
      'Employee Management (Digital personnel files, onboarding checklists, skill & asset records)',
      'Attendance (Biometric & geo-tagged mobile attendance integration, multi-shift roster management)',
      'Leave (Configurable leave accrual rules, compensatory off tracking, self-service approvals)',
      'Payroll (Automated salary computation, PF/ESI/TDS statutory deductions, bank advice generation)',
      'HR Reports (Headcount attrition analytics, department cost allocation, statutory registers)',
    ],
    deliverables: [
      'One-click monthly payroll execution with automated payslip distribution',
      'Employee self-service portal for tax declarations, leave requests, and reimbursement claims',
      'Direct posting of salary and statutory liabilities to the General Ledger',
    ],
    operationalImpact: 'Ensures zero-error statutory compliance and streamlines monthly payroll runs.',
  },
  {
    id: 'inventory-management',
    title: 'Inventory Management',
    summary:
      'Multi-warehouse stock visibility with bin-level control, batch/lot traceability, serial number tracking, and automated safety-stock replenishment.',
    capabilities: [
      'Stock Management (Real-time valuation via FIFO/Weighted Average, physical stock reconciliation)',
      'Warehouses (Multi-location, zone, rack, and bin hierarchy with put-away rules)',
      'Stock Transfers (Inter-warehouse and inter-branch transit tracking with e-way documentation)',
      'Batch Management (Manufacturing/expiry date tracking, FEFO allocation, quality hold control)',
      'Serial Numbers (Unit-level warranty, service history, and lifecycle tracking from receipt to sale)',
      'Reorder Levels (Min-Max safety stock thresholds, automated purchase indent generation)',
    ],
    deliverables: [
      'Barcode and QR-enabled inward, put-away, pick, and dispatch validation',
      'Dead-stock, slow-moving, and ABC inventory classification analytics',
      'Real-time stock reservation across manufacturing work orders and sales orders',
    ],
    operationalImpact: 'Cuts stockout incidents and reduces excess carrying costs across warehouses.',
  },
  {
    id: 'manufacturing-module',
    title: 'Manufacturing',
    summary:
      'Shop-floor to top-floor production control integrating multi-level Bills of Materials, capacity planning, work order execution, and costing.',
    capabilities: [
      'Bill of Materials (Multi-level BOM, alternate materials, scrap norms, routing operations)',
      'Production Planning (Master Production Schedule, MRP material requirement explosion, capacity load)',
      'Work Orders (Job card issuance, stage-wise WIP tracking, subcontracting/job-work management)',
      'Material Consumption (Backflushing, issue against BOM, floor return and wastage accounting)',
      'Production Reports (Planned vs. actual yield, machine downtime, batch cost variance analysis)',
    ],
    deliverables: [
      'Real-time Work-in-Progress (WIP) valuation across production stages',
      'Automated raw material shortage alerts prior to work order release',
      'Complete backward and forward lot traceability from raw material to finished goods',
    ],
    operationalImpact: 'Improves shop-floor schedule adherence and provides accurate unit manufacturing cost.',
  },
  {
    id: 'business-intelligence',
    title: 'Business Analytics',
    summary:
      'Role-based decision intelligence transforming live transactional ERP data into actionable financial, operational, and supply chain insights.',
    capabilities: [
      'Dashboards (Executive CXO scorecards, real-time daily cash position, live order book status)',
      'Management Reports (Consolidated MIS packs, budget vs. actual variance, branch comparisons)',
      'Sales Analytics (Margin analysis by SKU/region/customer, sales velocity, churn indicators)',
      'Inventory Analytics (Stock turn ratio, aging buckets, warehouse space & capital utilization)',
      'Financial Analytics (DSO/DPO working capital trends, ratio analysis, cash flow projections)',
    ],
    deliverables: [
      'Drill-down capability from summary KPI charts directly to source ERP vouchers',
      'Automated scheduled distribution of daily and weekly MIS reports to leadership',
      'Custom report builder with export to structured spreadsheet and PDF formats',
    ],
    operationalImpact: 'Replaces manual spreadsheet consolidation with live, single-source-of-truth analytics.',
  },
];

export const SOLUTIONS_SUB_ITEMS: SubFeatureItem[] = [
  {
    id: 'sol-erp-solutions',
    title: 'ERP Solutions',
    summary:
      'End-to-end enterprise resource planning solutions connecting order management, procurement, multi-warehouse inventory, production, human resources, finance, and business intelligence across multi-branch operations.',
    capabilities: [
      'Order-to-Cash: Inquiries, Quotations, Sales Orders, Credit Control, Dispatch & GST Invoicing',
      'Procure-to-Pay: Indents, Vendor RFQ Comparison, Purchase Orders, Quality GRN & 3-Way Invoice Match',
      'Plan-to-Produce: Multi-Level BOM, MRP Scheduling, Work Orders, Subcontracting & Batch Costing',
      'Record-to-Report: Multi-Company General Ledger, Cost Centers, Bank Reconciliation & MIS Dashboards',
    ],
    deliverables: [
      'Single relational database eliminating duplicate data entry across departments',
      'Configurable approval workflows, document attachments, and immutable voucher audit trails',
      'Available in Cloud, On-Premise, and Hybrid deployment architectures',
    ],
    operationalImpact: 'Delivers real-time operational control and financial transparency across all business units.',
  },
  {
    id: 'sol-business-automation',
    title: 'Business Automation',
    summary:
      'Eliminate manual bottlenecks with rule-driven approval hierarchies, automated procurement triggers, invoice matching, employee workflows, and scheduled reporting.',
    capabilities: [
      'Approval Workflows: Multi-tier digital authorization for quotations, discounts, credit overrides, CapEx, and vouchers',
      'Purchase Workflows: Automatic purchase requisition generation at safety-stock thresholds and budget validation',
      'Invoice Processing: Automated 3-way matching across Purchase Orders, accepted GRN quantities, and supplier bills',
      'Employee & Document Workflows: Digitized leave/expense claims and controlled SOP/contract sign-off lifecycles',
      'Notifications & Scheduled Processes: Real-time low-stock/credit alerts and automated daily/weekly MIS email delivery',
    ],
    deliverables: [
      'Visual rule engine based on transaction value, margin, department, or branch',
      'One-click web and mobile approval with escalation timers',
      'Complete timestamped maker-checker audit trail',
    ],
    operationalImpact: 'Eliminates approval delays and enforces strict policy compliance across all transactions.',
  },
  {
    id: 'sol-enterprise-applications',
    title: 'Enterprise Applications',
    summary:
      'Nine specialized standalone or ERP-connected business applications engineered for focused departmental and institutional operations.',
    capabilities: [
      'CRM Solutions & HRMS: Customer pipeline automation and complete recruitment-to-payroll workforce management',
      'Inventory & Asset Management: Barcode/RFID fixed asset registers, depreciation schedules, and preventive maintenance',
      'School & College Management: Admissions, fee collection, timetables, examinations, library, and campus billing',
      'Hospital & Clinic Management: Patient UHID registration, OPD/IPD beds, pharmacy expiry control, and TPA billing',
      'Fleet & Transport Management: Vehicle compliance renewals, trip sheets, fuel mileage analysis, and workshop job cards',
      'Financial Management, Document Management (DMS) & Workflow Management suites',
    ],
    deliverables: [
      'Can be deployed as independent departmental suites or bi-directionally synced with Vistara ERP',
      'Responsive web and mobile access with granular role-based permissions',
    ],
    operationalImpact: 'Digitizes specialized organizational functions rapidly without disrupting existing systems.',
  },
  {
    id: 'sol-cloud-solutions',
    title: 'Cloud Solutions',
    summary:
      'Resilient cloud strategy, application migration, managed ERP hosting, performance optimization, and automated disaster recovery across Public, Private, and Hybrid cloud models.',
    capabilities: [
      'Cloud Strategy & Readiness Assessment: Workload sizing, latency analysis, and CapEx vs. OpEx TCO modeling',
      'Cloud Migration Services: Phased, low-downtime migration of legacy databases and ERP workloads to AWS or Azure',
      'Cloud Hosting for ERP & Business Apps: Isolated VPC environments with high-IOPS SSD storage and TLS encryption',
      'Cloud Management & Optimization: 24/7 resource monitoring, OS/database patching, and cost optimization',
      'Backup & Disaster Recovery: Automated daily encrypted snapshots and geo-redundant failover readiness',
      'Supported Deployment Models: Public Cloud (AWS/Azure), Private Cloud, and Hybrid Cloud topologies',
    ],
    deliverables: [
      '99.9%+ infrastructure availability design with hardened network firewalls',
      'Automated off-site backup verification and documented recovery runbooks',
    ],
    operationalImpact: 'Removes on-premise server maintenance overhead while guaranteeing secure multi-branch access.',
  },
  {
    id: 'sol-system-integration',
    title: 'System Integration',
    summary:
      'Clean integration adapters and RESTful APIs connecting Vistara ERP with banking, payment gateways, e-commerce, hardware terminals, and statutory ecosystems.',
    capabilities: [
      'Payment Gateways & Banking Systems: Online collection links and structured NEFT/RTGS/statement reconciliation',
      'E-Commerce Platforms & External CRM: Bi-directional catalog, live inventory, and online order synchronization',
      'Accounting & HR Biometric Systems: Direct attendance machine integration and multi-entity voucher bridges',
      'Government/Tax Systems, Logistics & Third-Party APIs: GST/e-Invoicing/e-Way Bill readiness, 3PL tracking, weighbridges & barcode hardware',
    ],
    deliverables: [
      'Token-authenticated REST APIs with idempotent transaction logs and retry queues',
      'Reconciliation dashboards ensuring zero lost transactions between connected platforms',
    ],
    operationalImpact: 'Eliminates manual re-keying and synchronizes external transactions in real time.',
  },
  {
    id: 'sol-digital-solutions',
    title: 'Digital Solutions',
    summary:
      'Customer portals, employee self-service portals, B2B/B2C e-commerce platforms, document digitization, and enterprise mobility applications.',
    capabilities: [
      'Website Development, Web Applications & E-Commerce: High-performance corporate portals and B2B dealer ordering stores',
      'Customer & Employee Portals: 24/7 self-service access to invoices, ledger statements, repeat orders, leave, and payslips',
      'Online Forms, Document Digitization & Digital Workflows: Bulk scanning, OCR indexing, and paperless form routing',
      'Enterprise Mobility Suite: Mobile ERP, Field Sales App, Manager Dashboard, Field Service App, and Delivery/Fleet e-POD App',
    ],
    deliverables: [
      'Direct real-time integration with backend Vistara ERP inventory, pricing, and accounting ledgers',
      'Mobile-responsive web portals and native/cross-platform Android & iOS applications',
    ],
    operationalImpact: 'Connects customers, dealers, vendors, and field teams directly to your digital enterprise.',
  },
];

export const INDUSTRIES_SUB_ITEMS: SubFeatureItem[] = [
  {
    id: 'ind-manufacturing',
    title: 'Manufacturing',
    summary:
      'Production + Inventory + Procurement + Finance + Sales — engineered for discrete, batch, industrial machinery, automotive component, and process manufacturers.',
    capabilities: [
      'Multi-level Bill of Materials (BOM) with revision control, phantom assemblies, and co-products',
      'Material Requirements Planning (MRP) balancing open sales orders, safety stock, and vendor lead times',
      'Shop-floor Work Order routing, machine center scheduling, and external job-work/subcontracting tracking',
      'Quality Assurance (Inward raw material QC, in-process stage inspection, pre-dispatch certification)',
      'Integrated standard vs. actual absorption costing across material, labor, and factory overheads',
    ],
    deliverables: ['Production Planning', 'Inventory & Lot Control', 'Procurement & Subcontracting', 'Cost Accounting', 'Sales & Dispatch'],
    operationalImpact: 'Synchronizes procurement with shop-floor schedules to eliminate material bottlenecks.',
  },
  {
    id: 'ind-trading',
    title: 'Trading & Distribution',
    summary:
      'Purchasing + Inventory + Sales + Warehousing + Finance — built for wholesale importers, multi-branch distributors, and B2B supply houses.',
    capabilities: [
      'Multi-tier pricing matrices, volume rebate schemes, promotional slabs, and dealer credit limits',
      'Import procurement lifecycle including LC tracking, customs duty, freight, and landed cost apportionment',
      'Multi-warehouse bin management, batch/expiry FEFO picking, and inter-branch stock transfers',
      'High-velocity order processing with backorder management and route-based dispatch planning',
      'Real-time SKU margin visibility and automated customer credit exposure blocks',
    ],
    deliverables: ['Import & Local Purchasing', 'Multi-Warehouse Inventory', 'B2B Sales & Pricing', 'Logistics & Dispatch', 'Financial Accounting'],
    operationalImpact: 'Protects trading margins with exact landed-cost calculation and strict credit control.',
  },
  {
    id: 'ind-retail',
    title: 'Retail',
    summary:
      'POS + Inventory + Purchasing + Sales + Reporting — designed for multi-store retail chains, supermarkets, specialty outlets, and omnichannel brands.',
    capabilities: [
      'High-speed Point of Sale (POS) billing with barcode scanning, split tenders, and offline resilience',
      'Centralized merchandise planning, automated store replenishment, and inter-store stock balancing',
      'Loyalty points management, gift vouchers, time-bound promotional campaigns, and bundle pricing',
      'Centralized vendor procurement with consolidated warehouse-to-store distribution',
      'Store-wise daily cash/card settlement reconciliation and hourly sales performance analytics',
    ],
    deliverables: ['Retail POS Billing', 'Centralized Inventory', 'Replenishment & Purchasing', 'Loyalty & Promotions', 'Store Profitability Reporting'],
    operationalImpact: 'Unifies store front-end checkout with central warehouse inventory and finance.',
  },
  {
    id: 'ind-logistics',
    title: 'Logistics',
    summary:
      'Fleet + Transport + Billing + Operations + Finance — built for freight forwarders, 3PL operators, fleet owners, and parcel transport networks.',
    capabilities: [
      'Consignment booking, LR/waybill generation, manifest creation, and hub-and-spoke transit tracking',
      'Fleet lifecycle management covering fuel efficiency, tire tracking, preventive maintenance, and permits',
      'Driver roster, trip advance issuance, route expense settlement, and POD (Proof of Delivery) capture',
      'Contract freight billing, detention/demurrage calculation, and automated client invoicing',
      'Vehicle-wise and route-wise profitability statements integrated with core financial ledgers',
    ],
    deliverables: ['Fleet & Maintenance', 'Consignment & Trip Operations', 'Automated Freight Billing', 'Driver & Expense Control', 'Route Financials'],
    operationalImpact: 'Provides per-kilometer and per-vehicle cost transparency across the entire fleet.',
  },
  {
    id: 'ind-construction',
    title: 'Construction',
    summary:
      'Projects + Procurement + Inventory + Finance + Workforce — tailored for EPC contractors, civil engineering firms, and real estate developers.',
    capabilities: [
      'Bill of Quantities (BOQ) estimation, work breakdown structure (WBS), and project budget baselines',
      'Site-level material indenting, centralized procurement, and site store consumption tracking',
      'Subcontractor work order contracts, running account (RA) bill verification, and retention money control',
      'Equipment and heavy machinery deployment logs, fuel consumption, and site transfer tracking',
      'Project-wise cash flow, client milestone billing, and Cost-to-Complete (CTC) variance reporting',
    ],
    deliverables: ['BOQ & Project Controls', 'Site Procurement & Stores', 'Subcontractor RA Billing', 'Site Workforce & Plant', 'Project Accounting'],
    operationalImpact: 'Prevents project cost overruns by linking site material consumption and RA bills to BOQ limits.',
  },
  {
    id: 'ind-healthcare',
    title: 'Healthcare',
    summary:
      'Patient Administration + Pharmacy & Clinical Inventory + Billing + HR + Finance — built for multi-specialty hospitals, clinics, and diagnostic centers.',
    capabilities: [
      'Outpatient (OPD) and Inpatient (IPD) registration, appointment scheduling, and bed allocation',
      'Pharmacy and surgical consumable inventory with strict batch expiry, narcotic logs, and reorder alerts',
      'Integrated laboratory, radiology, and procedure billing with insurance/TPA claim documentation',
      'Roster management for clinicians, nursing staff, and paramedics with specialized payroll rules',
      'Departmental revenue and cost-per-bed financial analytics with statutory compliance',
    ],
    deliverables: ['OPD/IPD Administration', 'Pharmacy & Medical Stores', 'Consolidated Patient Billing', 'Clinical HR & Rosters', 'Hospital Finance'],
    operationalImpact: 'Streamlines patient billing and eliminates expiry wastage in medical and pharmacy stores.',
  },
  {
    id: 'ind-services',
    title: 'Professional Services',
    summary:
      'Projects + Timesheets + Expenses + Billing + Finance — engineered for consulting practices, engineering design firms, IT services, and agencies.',
    capabilities: [
      'Resource capacity planning, skill-based project allocation, and billable utilization tracking',
      'Weekly and daily employee timesheets with project manager approval workflows',
      'Project expense capture with client-reimbursable vs. non-billable classification',
      'Flexible billing models: Time & Material (T&M), Fixed-Price milestones, and recurring retainers',
      'Engagement-level gross margin analysis and automated revenue recognition',
    ],
    deliverables: ['Project & Resource Planning', 'Timesheet Governance', 'Project Expense Accounting', 'Milestone & T&M Billing', 'Practice Financials'],
    operationalImpact: 'Maximizes billable resource utilization and accelerates project milestone invoicing.',
  },
];

export const SERVICES_SUB_ITEMS: SubFeatureItem[] = [
  {
    id: 'srv-erp-consulting',
    title: 'ERP Consulting',
    summary:
      'Domain-led business process analysis, operational bottleneck discovery, and end-to-end ERP solution blueprinting before system configuration begins.',
    capabilities: [
      'On-site and remote discovery workshops with Finance, Procurement, Stores, Production, and Sales heads',
      'As-Is to To-Be business process mapping and standardization of Chart of Accounts, cost centers, and SKU coding',
      'Preparation of signed-off Functional Requirement Specifications (FRS) and phased rollout roadmaps',
    ],
    deliverables: ['Process Discovery Report', 'Solution Architecture Blueprint', 'Master Data Standardization Rules'],
    operationalImpact: 'Aligns software architecture with real-world operational workflows before go-live.',
  },
  {
    id: 'srv-implementation',
    title: 'Implementation',
    summary:
      'Structured, milestone-governed ERP deployment covering multi-branch configuration, Conference Room Pilots (CRP), User Acceptance Testing (UAT), and Go-Live hypercare.',
    capabilities: [
      'Multi-company and multi-branch setup, tax masters, numbering series, warehouse bin hierarchies, and role permissions',
      'Conference Room Pilot (CRP) simulations using your organization’s real purchase, production, and billing scenarios',
      'Role-specific hands-on training for storekeepers, accountants, production planners, and management',
    ],
    deliverables: ['Configured Production Environment', 'UAT Sign-Off Verification', 'Role-Based User Manuals & Training'],
    operationalImpact: 'Ensures smooth, zero-disruption transition from legacy tools to live ERP operations.',
  },
  {
    id: 'srv-customization',
    title: 'Customization',
    summary:
      'Clean, upgrade-safe functional extensions and bespoke reporting engineered around your organization’s unique commercial and industry rules.',
    capabilities: [
      'Custom commercial print formats (GST Tax Invoices, Purchase Orders, Export Packing Lists, Quality COA Certificates)',
      'Specialized pricing formulas, rebate calculations, and custom multi-stage approval matrices',
      'Bespoke departmental forms, industry-specific fields, and custom executive MIS reports',
    ],
    deliverables: ['Custom Print & Report Templates', 'Extension Modules', 'QA-Verified Functional Enhancements'],
    operationalImpact: 'Adapts Vistara ERP to your competitive processes without compromising core upgradeability.',
  },
  {
    id: 'srv-data-migration',
    title: 'Data Migration',
    summary:
      'Validated extraction, cleansing, deduplication, and import of legacy master records and financial opening balances into Vistara ERP.',
    capabilities: [
      'Structured ETL migration templates for Item Masters, Multi-Level BOMs, Customer Masters, and Vendor Masters',
      'Deduplication and normalization of legacy nomenclature, HSN/SAC tax codes, and unit-of-measure conversions',
      'Trial-run migration and 100% reconciliation of General Ledger, AR/AP bill-wise opening balances, and batch stock',
    ],
    deliverables: ['Cleansed Master Data Repository', 'Reconciled Opening Balance Audit', 'Historical Voucher Archive'],
    operationalImpact: 'Guarantees 100% accounting and inventory accuracy from Day 1 of go-live.',
  },
  {
    id: 'srv-application-development',
    title: 'Application Development',
    summary:
      'Full-stack custom web, mobile, and enterprise software engineering built on modern .NET, Java, Python, Node.js, React, Angular, and relational database architectures.',
    capabilities: [
      'Web Applications: B2B dealer/distributor ordering portals, vendor RFQ portals, and multi-branch operations consoles',
      'Mobile Applications: Native & cross-platform Android/iOS apps for field sales, warehouse barcode scanning, and e-POD delivery',
      'Custom Enterprise Systems: Bespoke costing engines, LIMS quality systems, and legacy client-server modernization',
    ],
    deliverables: ['Full-Stack Web & Mobile Apps', 'OpenAPI / REST Microservices', 'Hardened SQL Server / PostgreSQL Databases'],
    operationalImpact: 'Delivers purpose-built digital products tailored to proprietary business requirements.',
  },
  {
    id: 'srv-cloud-services',
    title: 'Cloud Services',
    summary:
      'Managed cloud hosting, server and network infrastructure administration, automated backup orchestration, and enterprise security governance.',
    capabilities: [
      'AWS and Microsoft Azure cloud architecture, VPC network isolation, and multi-branch VPN connectivity',
      'Windows and Linux application/database server administration, virtualization, and performance tuning',
      'Automated daily encrypted backups, disaster recovery drills, TLS/AES-256 encryption, and 24/7 infrastructure monitoring',
    ],
    deliverables: ['Managed Cloud & Server Infrastructure', 'Automated Backup & DR Governance', 'Role-Based Security Hardening'],
    operationalImpact: 'Keeps mission-critical ERP and enterprise databases fast, secure, and continuously available.',
  },
  {
    id: 'srv-integration',
    title: 'Integration',
    summary:
      'Seamless bi-directional connectivity between Vistara ERP, shop-floor hardware, banking networks, e-commerce stores, and statutory platforms.',
    capabilities: [
      'Hardware Connectors: Biometric attendance terminals, barcode/QR label printers, RFID readers, and digital weighbridges',
      'Financial & Statutory Bridges: Banking payment files, automated bank reconciliation, payment gateways, and GST/e-Invoicing APIs',
      'Enterprise Software Sync: E-commerce storefronts, external CRM platforms, and 3PL logistics tracking webhooks',
    ],
    deliverables: ['REST API & Webhook Connectors', 'Hardware Middleware Drivers', 'Automated Sync & Error-Retry Logs'],
    operationalImpact: 'Connects every hardware device and external software platform into one unified workflow.',
  },
  {
    id: 'srv-support-maintenance',
    title: 'Support & Maintenance',
    summary:
      'SLA-governed post-implementation application support, database optimization, statutory updates, and preventive maintenance.',
    capabilities: [
      'Application & Functional Support: Assistance with voucher reconciliations, BOM adjustments, and year-end financial closing',
      'Technical & Database Support: SQL query optimization, index rebuilding, backup verification, and performance monitoring',
      'Bug Fixes & Statutory Updates: Rapid patch deployment, GST/tax rule updates, and continuous remote/on-site user support',
    ],
    deliverables: ['6-Stage Ticket Lifecycle Governance', 'Dedicated Support Portal & Hotline', 'Scheduled Preventive Maintenance'],
    operationalImpact: 'Protects long-term system reliability and ensures continuous user adoption year after year.',
  },
];

export const COMPANY_SUB_ITEMS: SubFeatureItem[] = [
  {
    id: 'comp-about-us',
    title: 'About Us',
    summary:
      'Headquartered in Chennai, Tamil Nadu, India, Vistara Technologies is an enterprise software and IT solutions company specializing in integrated ERP systems, enterprise applications, cloud solutions, and business automation.',
    capabilities: [
      'Who We Are: Dedicated enterprise software engineering and consulting organization bridging functional domain depth with modern software architecture',
      'Our Vision: To be the most trusted enterprise technology partner enabling connected, transparent, and resilient business operations',
      'Our Mission: Deliver modular, high-reliability ERP and enterprise software backed by disciplined implementation and long-term support',
      'Our Values: Engineering Integrity, Process Clarity, Accountability in Delivery, and Long-Term Post-Sales Stewardship',
      'Our Expertise & Approach: Process-first discovery, clean data migration, Conference Room Pilots, and SLA-governed hypercare',
    ],
    deliverables: [
      'Headquarters: Chennai, Tamil Nadu, India',
      'Core Focus: ERP Solutions, Enterprise Applications, Cloud, Automation & Custom Engineering',
      'Corporate Governance: 100% client data ownership, strict NDA confidentiality, and transparent SLAs',
    ],
    operationalImpact: 'A dependable long-term technology partner committed to measurable operational outcomes.',
  },
  {
    id: 'comp-leadership',
    title: 'Leadership',
    summary:
      'Vistara Technologies is guided by experienced enterprise software architects, ERP functional directors, and infrastructure delivery heads with decades of combined domain experience.',
    capabilities: [
      'Enterprise Architecture & Product Engineering Practice — Directing core Vistara ERP platform evolution, relational database scalability, API security, and cloud-native engineering standards',
      'Functional Consulting & Industry Verticals Practice — Led by domain specialists in cost accounting, manufacturing MRP, trading supply chains, and EPC project controls',
      'Client Success, Implementation & Managed Support Practice — Governing milestone delivery, user adoption workshops, and 6-stage SLA support execution',
    ],
    deliverables: [
      'Direct executive sponsorship on every enterprise ERP implementation',
      'Cross-functional governance uniting accounting, supply chain, and software engineering leadership',
    ],
    operationalImpact: 'Ensures every client engagement benefits from senior architectural and domain oversight.',
  },
  {
    id: 'comp-clients',
    title: 'Clients',
    summary:
      'Trusted by growth-focused SMEs and multi-branch enterprises across Manufacturing, Trading & Distribution, EPC Construction, Healthcare, Logistics, Food Processing, Education, and Professional Services.',
    capabilities: [
      'Active footprint across Chennai (Ambattur, Oragadam, Guindy), Hosur, Coimbatore, Madurai, Bengaluru, and Hyderabad',
      'High multi-year client retention with continuous module expansion across additional plants, warehouses, and branches',
      'Verified industry references available during formal executive solution discovery',
    ],
  },
  {
    id: 'comp-case-studies',
    title: 'Case Studies',
    summary:
      'Verified enterprise implementation blueprints demonstrating how Vistara ERP solves complex manufacturing, multi-branch distribution, and civil construction challenges.',
    capabilities: [
      'Multi-Plant Precision Engineering: -22% inventory carrying cost and 3-day monthly financial close',
      'Multi-Branch Wholesale Distribution: < 6 hrs order-to-dispatch turnaround and -28% overdue receivables (DSO)',
      'EPC Construction & Site Digitization: -18.5% unplanned site procurement spend and 100% BOQ-to-actuals reconciliation',
    ],
  },
  {
    id: 'comp-careers',
    title: 'Careers',
    summary:
      'Build mission-critical enterprise software and lead real-world industrial transformations with our team in Chennai across Engineering, ERP Consulting, Business Analysis, QA, and Support.',
    capabilities: [
      '8 Career Tracks: Engineering, ERP Consulting, Business Analysis, Quality Assurance, Customer Support, Sales, Marketing & Administration',
      'Hands-on exposure to enterprise finance, supply chain architecture, and full-stack cloud engineering',
      'Direct application submission to our HR & Talent Acquisition desk (vistaratechnologies@gmail.com)',
    ],
  },
  {
    id: 'comp-contact',
    title: 'Contact',
    summary:
      'Connect with Vistara Technologies in Chennai to request a personalized ERP demonstration, technical architecture consultation, or commercial proposal.',
    capabilities: [
      'Head Office: Chennai, Tamil Nadu, India',
      'Official Email: vistaratechnologies@gmail.com',
      'Structured 7-field Enterprise Inquiry Form with instant reference confirmation and direct email dispatch',
    ],
  },
];

export const RESOURCES_SUB_ITEMS: SubFeatureItem[] = [
  {
    id: 'res-articles',
    title: 'Articles',
    summary:
      'Practical insights and operational strategies on multi-warehouse inventory optimization, batch traceability, working capital release, and enterprise automation.',
    capabilities: [
      'How ERP Improves Inventory Management Across Multi-Location Warehouses',
      'Eliminating Ghost Inventory and Stock Discrepancies with Barcode & Bin Control',
      'Working Capital Release Through Real-Time Inventory Aging Analytics',
    ],
  },
  {
    id: 'res-erp-guides',
    title: 'ERP Guides',
    summary:
      'In-depth executive guides covering ERP fundamentals, manufacturing BOM/MRP control, wholesale trading margin protection, and zero-disruption implementation roadmaps.',
    capabilities: [
      'What is ERP? Architecture of an Integrated Enterprise Platform',
      'ERP for Manufacturing: Controlling BOM, MRP, WIP, and Unit Costing',
      'ERP for Trading Businesses: Margin Protection, Landed Cost & Credit Governance',
      'ERP Implementation Guide: A Structured Blueprint for Zero-Disruption Rollout',
    ],
  },
  {
    id: 'res-faqs',
    title: 'FAQs',
    summary:
      'Direct, transparent answers to common executive and IT questions regarding modular rollout, implementation timelines, legacy data migration, cloud deployment, and SLA support.',
    capabilities: [
      'Phased modular deployment & licensing flexibility',
      'Implementation timelines (6–16 weeks) & ETL master data migration',
      'Public Cloud, Private Cloud, Hybrid & On-Premise hosting options',
      'Third-party API, hardware, and post-go-live SLA support governance',
    ],
  },
  {
    id: 'res-documentation',
    title: 'Documentation',
    summary:
      'Product evaluation checklists, Cloud vs. On-Premise architectural white papers, technology stack specifications (.NET, Java, Python, Node.js, React, Angular, SQL Server, PostgreSQL), and enterprise security documentation.',
    capabilities: [
      'How to Choose an ERP System: Evaluation Checklist for Decision Makers',
      'Cloud ERP vs. On-Premise ERP: Evaluating TCO, Security & Scalability',
      'Technology & Enterprise Architecture Specification (Backend, Frontend, Relational DBs, Cloud & REST APIs)',
      'Security, RBAC Permissions, AES-256/TLS Encryption, Audit Trails & Corporate Legal Governance',
    ],
  },
];

export const ALL_TOPICS: TopicSection[] = [
  {
    id: 'home',
    number: '01',
    title: 'Vistara Technologies — ERP & Enterprise Business Solutions',
    shortTitle: 'Home',
    navGroup: 'HOME',
    subtitle: 'Integrated ERP Solutions for Connected Business Operations',
    overview:
      'Vistara Technologies provides enterprise software solutions that help organizations manage finance, sales, procurement, inventory, human resources, manufacturing and business operations through integrated digital platforms.',
    secondaryOverview:
      'Explore our structured enterprise portfolio in sequential order: Home, Products, Solutions, Industries, Services, Company, and Resources.',
    highlights: [
      { label: 'Core ERP Suite', detail: 'Vistara ERP, Finance & Accounting, CRM, HR & Payroll, Inventory, Manufacturing & Business Analytics' },
      { label: 'Enterprise Solutions', detail: 'ERP Solutions, Business Automation, Enterprise Applications, Cloud, Integration & Digital Solutions' },
      { label: 'Full Lifecycle Partner', detail: '7 Industry Verticals · 8 Specialized Services · Headquartered in Chennai, India' },
    ],
  },
  {
    id: 'products',
    number: '02',
    title: 'Products — Vistara ERP & Core Enterprise Modules',
    shortTitle: 'Products',
    navGroup: 'PRODUCTS',
    subtitle: 'Vistara ERP · Finance & Accounting · CRM · HR & Payroll · Inventory Management · Manufacturing · Business Analytics',
    overview:
      'Vistara Technologies engineers a unified product suite built around Vistara ERP and its core enterprise modules. Every module operates on a single real-time relational database so transactions flow seamlessly from quotation and shop-floor production to warehouse dispatch and financial statements.',
    secondaryOverview:
      'Select any product module below to inspect its complete functional scope, sub-modules, deliverables, and measurable operational impact.',
    highlights: [
      { label: 'Unified Database', detail: 'Real-time sub-ledger to General Ledger posting with zero duplicate data entry' },
      { label: 'Modular Deployment', detail: 'Deploy the complete Vistara ERP suite or activate individual modules in phases' },
      { label: 'Audit & GST Ready', detail: 'Built-in maker-checker approvals, credit controls, and statutory compliance' },
    ],
    subItems: PRODUCTS_SUB_ITEMS,
  },
  {
    id: 'solutions',
    number: '03',
    title: 'Solutions — Enterprise Software, Cloud & Digital Transformation',
    shortTitle: 'Solutions',
    navGroup: 'SOLUTIONS',
    subtitle: 'ERP Solutions · Business Automation · Enterprise Applications · Cloud Solutions · System Integration · Digital Solutions',
    overview:
      'Beyond core resource planning, Vistara Technologies delivers end-to-end digital solutions encompassing rule-driven business process automation, standalone enterprise applications, managed cloud infrastructure, third-party system integration, and web/mobile digital portals.',
    secondaryOverview:
      'Choose any solution pillar below to review its architecture, workflow engines, and enterprise capabilities.',
    highlights: [
      { label: '6 Solution Pillars', detail: 'ERP Solutions, Business Automation, Enterprise Apps, Cloud, System Integration & Digital Solutions' },
      { label: 'Connected Ecosystem', detail: 'Bridges back-office ERP with customer portals, mobile field apps, banking, and hardware' },
      { label: 'Flexible Topology', detail: 'Supports Public Cloud (AWS/Azure), Private Cloud, Hybrid, and On-Premise deployments' },
    ],
    subItems: SOLUTIONS_SUB_ITEMS,
  },
  {
    id: 'industries',
    number: '04',
    title: 'Industries — Domain-Configured Vertical ERP Editions',
    shortTitle: 'Industries',
    navGroup: 'INDUSTRIES',
    subtitle: 'Manufacturing · Trading & Distribution · Retail · Logistics · Construction · Healthcare · Professional Services',
    overview:
      'Different industries operate on fundamentally different cost structures, inventory rules, and billing models. Vistara Technologies delivers specialized ERP configurations for seven major industry verticals so organizations gain native domain functionality without costly workarounds.',
    secondaryOverview:
      'Select any industry below to explore how Vistara combines production, purchasing, inventory, projects, fleet, clinical, and financial workflows for that sector.',
    highlights: [
      { label: '7 Industry Verticals', detail: 'Manufacturing, Trading & Distribution, Retail, Logistics, Construction, Healthcare & Professional Services' },
      { label: 'Domain-Native Controls', detail: 'From Multi-Level BOM/MRP and BOQ/RA Billing to FEFO Batch Control and Fleet Consignment Accounting' },
      { label: 'Rapid Time-to-Value', detail: 'Pre-configured industry templates accelerate rollout and end-user adoption' },
    ],
    subItems: INDUSTRIES_SUB_ITEMS,
  },
  {
    id: 'services',
    number: '05',
    title: 'Services — Consulting, Implementation, Engineering & Support',
    shortTitle: 'Services',
    navGroup: 'SERVICES',
    subtitle: 'ERP Consulting · Implementation · Customization · Data Migration · Application Development · Cloud Services · Integration · Support & Maintenance',
    overview:
      'Selecting enterprise software is only half the journey; disciplined execution determines the business outcome. Vistara Technologies provides eight comprehensive lifecycle services led by functional consultants, software architects, and dedicated support engineers.',
    secondaryOverview:
      'Select any service discipline below to view our methodology, deliverables, and SLA-governed support process.',
    highlights: [
      { label: '8 Core Services', detail: 'Consulting, Implementation, Customization, Migration, App Dev, Cloud, Integration & Support' },
      { label: 'Zero-Surprise Delivery', detail: 'Signed-off FRS blueprints, validated data migration, and Conference Room Pilots' },
      { label: '6-Stage SLA Support', detail: 'Issue Reported → Ticket Created → Analysis → Resolution → Testing → Closure' },
    ],
    subItems: SERVICES_SUB_ITEMS,
  },
  {
    id: 'company',
    number: '06',
    title: 'Company — About Vistara Technologies, Leadership, Clients & Contact',
    shortTitle: 'Company',
    navGroup: 'COMPANY',
    subtitle: 'About Us · Leadership · Clients · Case Studies · Careers · Contact',
    overview:
      'Headquartered in Chennai, Tamil Nadu, India, Vistara Technologies is an enterprise software and IT solutions partner dedicated to building reliable ERP platforms, custom applications, and long-term customer relationships.',
    secondaryOverview:
      'Explore our company profile, leadership governance, client portfolio, verified case studies, career openings, and direct contact desk below.',
    highlights: [
      { label: 'Headquarters', detail: 'Chennai, Tamil Nadu, India · Official Email: vistaratechnologies@gmail.com' },
      { label: 'Proven Track Record', detail: 'Serving Manufacturing, Trading, EPC Construction, Healthcare, Logistics & Service Enterprises' },
      { label: 'Direct Engagement', detail: 'Connect with our consulting or HR teams directly via structured inquiry forms' },
    ],
    subItems: COMPANY_SUB_ITEMS,
  },
  {
    id: 'resources',
    number: '07',
    title: 'Resources — Articles, ERP Guides, FAQs & Documentation',
    shortTitle: 'Resources',
    navGroup: 'RESOURCES',
    subtitle: 'Articles · ERP Guides · FAQs · Documentation',
    overview:
      'Explore our curated knowledge center featuring practical enterprise articles, comprehensive ERP and industry implementation guides, frequently asked questions, and technical architecture & security documentation.',
    secondaryOverview:
      'Select Articles, ERP Guides, FAQs, or Documentation below to read full publications and architectural specifications.',
    highlights: [
      { label: 'Articles & ERP Guides', detail: 'In-depth publications on ERP architecture, Manufacturing MRP, Trading margins & Inventory control' },
      { label: 'Executive FAQs', detail: 'Clear answers on modular rollout, timelines, data migration, cloud hosting & SLA support' },
      { label: 'Documentation & Stack', detail: 'ERP evaluation checklists, .NET/Java/React/SQL architecture specs & RBAC security governance' },
    ],
    subItems: RESOURCES_SUB_ITEMS,
  },
];

